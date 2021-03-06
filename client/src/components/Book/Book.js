/* React */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Styles */
import useStyles from './Book.styles';
/* Components */
import {
  BookForm,
  EntityTable,
  Icon,
  InputModal,
} from '..';
import { bookActions } from '../../services/actions';

const formatAuthors = (authors) => {
  if (authors === null || authors.length === 0) {
    return '';
  }
  let authorString = '';
  // eslint-disable-next-line array-callback-return
  authors.map((a, i) => {
    if (i === 0) {
      authorString += a.authorName;
    } else if (i === authors.length - 1) {
      authorString += `, and ${a.authorName}`;
    } else {
      authorString += `, ${a.authorName}`;
    }
  });
  return authorString;
};

const formatGenres = (genres) => {
  if (genres === null || genres.length === 0) {
    return '--';
  }
  let genreString = '';
  // eslint-disable-next-line array-callback-return
  genres.map((g, i) => {
    if (i === 0) {
      genreString += g.genreName;
    } else if (i === genres.length - 1) {
      genreString += `, and ${g.genreName}`;
    } else {
      genreString += `, ${g.genreName}`;
    }
  });
  return genreString;
};

const formatBook = (params) => {
  const authors = params.getValue('authors');
  let authorString = '';
  if (authors !== null && authors.length !== 0) {
    authorString = `by ${formatAuthors(authors)}`;
  }

  return `${params.getValue('name') || ''} ${authorString}`;
};

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  {
    field: 'title',
    headerName: 'Book',
    width: 450,
    valueGetter: formatBook,
  },
  {
    field: 'publisher',
    headerName: 'Publisher',
    width: 250,
    valueFormatter: (params) => (params.value ? params.value.publisherName : '--'),
  },
  {
    field: 'genres',
    headerName: 'Genre',
    width: 250,
    valueFormatter: (params) => (params.value ? formatGenres((params.value)) : '--'),
  },
];

const Book = (props) => {
  const classes = useStyles(props);
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();

  const createBook = (book) => bookActions.addBook(book);
  const updateBook = (book) => bookActions.updateBook(book);
  const deleteBook = (book) => bookActions.deleteBook(book);
  const getBooks = () => dispatch(bookActions.getBooks());

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className={classes.root}>
      {/* Temp div style */}
      <EntityTable
        addAction={() => (
          <InputModal
            action={createBook}
            details='Enter details for the new book you would like to add.'
            title={<Icon name='add' color='white' />}
            titleText='New Book'
            refresh={getBooks}
            CustomForm={BookForm}
          />
        )}
        deleteAction={(info) => (
          <InputModal
            action={deleteBook}
            details='Edit details for the book you would like to delete.'
            info={info}
            modal='delete'
            title={<Icon name='delete' color='white' />}
            titleText='Delete Book'
            refresh={getBooks}
            CustomForm={BookForm}
            requireId={true}
          />
        )}
        updateAction={(info) => (
          <InputModal
            action={updateBook}
            details='Edit details for the book you would like to update.'
            info={info}
            modal='update'
            title={<Icon name='edit' color='white' />}
            titleText='Update Book'
            refresh={getBooks}
            CustomForm={BookForm}
            requireId={true}
          />
        )}
        icon={'library'}
        rows={books}
        cols={columns}
        loading={loading}
      />
    </div>
  );
};

export default Book;
