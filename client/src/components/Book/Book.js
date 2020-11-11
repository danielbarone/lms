/* React */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Styles */
import useStyles from './Book.styles';
/* Components */
import { EntityTable, InputModal } from '..';
import { bookActions } from '../../services/actions';

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'name', headerName: 'Book', width: 250 },
];

// const formColumns = [
//   { field: 'bookName', label: 'Book', type: 'text' },
// ];

// const formColsUpdDel = [
//   { field: 'bookId', label: 'Book ID', type: 'text' },
//   { field: 'bookName', label: 'Book', type: 'text' },
// ];

const Book = (props) => {
  const classes = useStyles(props);
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();

  // const createBook = (book) => bookActions.addBook(book);
  // const updateBook = (book) => bookActions.updateBook(book);
  // const deleteBook = (book) => bookActions.deleteBook(book);
  const getBooks = () => dispatch(bookActions.getBooks());

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className={classes.root}>
      {/* Temp div style */}
      {/* <div style={{ display: 'flex', justifyContent: 'start' }}>
        <InputModal
          action={createBook}
          columns={formColumns}
          details='Enter details for the new book you would like to add.'
          title='New Book'
          refresh={getBooks}
        />
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
