import * as actionTypes from './actionTypes';
import admin from '../api';

/* CREATE */
// const addBookStarted = (loading) => ({
//   type: actionTypes.ADD_BOOK_STARTED,
//   loading,
// });

// const addBookSuccess = (book) => ({
//   type: actionTypes.ADD_BOOK_SUCCESS,
//   book,
// });

// const addBookFailure = (error) => ({
//   type: actionTypes.ADD_BOOK_FAILURE,
//   error,
// });

// const addBook = (book) => (dispatch) => {
//   dispatch(addBookStarted(true));

//   return admin.books().create(book)
//     .then((response) => {
//       dispatch(addBookSuccess(book));
//       return response;
//     })
//     .catch((e) => dispatch(addBookFailure(e)));
// };

/* UPDATE */
// const updateBookStarted = (loading) => ({
//   type: actionTypes.UPDATE_BOOK_STARTED,
//   loading,
// });

// const updateBookSuccess = (book) => ({
//   type: actionTypes.UPDATE_BOOK_SUCCESS,
//   book,
// });

// const updateBookFailure = (error) => ({
//   type: actionTypes.UPDATE_BOOK_FAILURE,
//   error,
// });

// const updateBook = (book) => (dispatch) => {
//   dispatch(updateBookStarted(true));

//   return admin.books().update(book)
//     .then((response) => {
//       dispatch(updateBookSuccess(book));
//       return response;
//     })
//     .catch((e) => dispatch(updateBookFailure(e)));
// };

/* DELETE */
// const deleteBookStarted = (loading) => ({
//   type: actionTypes.DELETE_BOOK_STARTED,
//   loading,
// });

// const deleteBookSuccess = (book) => ({
//   type: actionTypes.DELETE_BOOK_SUCCESS,
//   book,
// });

// const deleteBookFailure = (error) => ({
//   type: actionTypes.DELETE_BOOK_FAILURE,
//   error,
// });

// const deleteBook = (book) => (dispatch) => {
//   dispatch(deleteBookStarted(true));

//   return admin.books().delete(book)
//     .then((response) => {
//       dispatch(deleteBookSuccess(book));
//       return response;
//     })
//     .catch((e) => dispatch(deleteBookFailure(e)));
// };

/* READ */
const getBooksStarted = (loading) => ({
  type: actionTypes.GET_BOOKS_STARTED,
  loading,
});

const getBooksSuccess = (books) => ({
  type: actionTypes.GET_BOOKS_SUCCESS,
  books,
});

const getBooksFailure = (error) => ({
  type: actionTypes.GET_BOOKS_FAILURE,
  error,
});

const parseBookData = (books) => books.map(
  (b) => ({
    id: b.bookId,
    name: b.title || '--',
    authors: b.authors,
    genres: b.genres,
    publisher: b.publisher,
  }),
);

const getBooks = () => (dispatch) => {
  dispatch(getBooksStarted(true));

  admin.books().getAll()
    .then((response) => {
      const books = parseBookData(response.data);
      dispatch(getBooksSuccess(books));
      console.log(response.data);
    })
    .catch((e) => dispatch(getBooksFailure(e)));
};

export {
  // addBook,
  // deleteBook,
  // updateBook,
  getBooks,
};
