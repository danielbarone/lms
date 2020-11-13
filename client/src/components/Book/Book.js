/* React */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Styles */
import useStyles from './Book.styles';
/* Components */
import { EntityTable, InputModal } from '..';
import { bookActions } from '../../services/actions';

const formatAuthors = (authors) => {
  if (authors === null || authors.length === 0) {
    return '';
  }
  let authorString = '';
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
}

const formatGenres = (genres) => {
  if (genres === null || genres.length === 0) {
    return '--';
  }
  let genreString = '';
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
}

const formatBook = (params) => {
  const authors = params.getValue('authors');
  let authorString = '';
  if (authors !== null && authors.length !== 0) {
    authorString = 'by ' + formatAuthors(authors);
  }
  
  return `${params.getValue('name') || ''} ${authorString}`
}

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'title', headerName: 'Book', width: 450, valueGetter: formatBook },
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

const formColumns = [
  { field: 'title', label: 'Book', type: 'text' },
  { field: 'publisher', label: 'Publisher', type: 'text' },
  { field: 'authors', label: 'Authors', type: 'select' },
  { field: 'genres', label: 'Genres', type: 'text' },
];

// const formColsUpdDel = [
//   { field: 'bookId', label: 'Book ID', type: 'text' },
//   { field: 'title', label: 'Book', type: 'text' },
// ];

const Book = (props) => {
  const classes = useStyles(props);
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();

  const createBook = (book) => bookActions.addBook(book);
  // const updateBook = (book) => bookActions.updateBook(book);
  // const deleteBook = (book) => bookActions.deleteBook(book);
  const getBooks = () => dispatch(bookActions.getBooks());

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className={classes.root}>
      {/* Temp div style */}
      <InputModal
          action={createBook}
          columns={formColumns}
          details='Enter details for the new book you would like to add.'
          title='New Book'
          refresh={getBooks}
        />
      {/* <div style={{ display: 'flex', justifyContent: 'start' }}>

        <InputModal
          action={updateBook}
          columns={formColsUpdDel}
          details='Edit details for the book you would like to update.'
          title='Update Book'
          refresh={getBooks}
        />
        <InputModal
          action={deleteBook}
          columns={formColsUpdDel}
          details='Review details of the book you are about to delete.'
          title='Delete Book'
          refresh={getBooks}
        />
      </div> */}
      <EntityTable
        rows={books}
        cols={columns}
        loading={loading}
      />
    </div>
  );
};

export default Book;
