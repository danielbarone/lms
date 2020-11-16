/* eslint-disable no-unused-vars */
import * as actionTypes from './actionTypes';
import updateObject from '../utils';

/* CREATE */
// const initialStateCreate = {
//   book: null,
//   error: null,
//   loading: false,
// };

// const addBookStarted = (state, action) => updateObject(state, {
//   error: null,
//   loading: true,
// });

// const addBookSuccess = (state, action) => updateObject(state, {
//   book: action.book,
//   error: null,
//   loading: false,
// });

// const addBookFailure = (state, action) => updateObject(state, {
//   error: action.error,
//   loading: false,
// });

// const bookReducer = (state = initialStateCreate, action) => {
//   switch (action.type) {
//     case actionTypes.ADD_BOOK_STARTED: return addBookStarted(state, action);
//     case actionTypes.ADD_BOOK_SUCCESS: return addBookSuccess(state, action);
//     case actionTypes.ADD_BOOK_FAILURE: return addBookFailure(state, action);
//     default: return state;
//   }
// };

// /* UPDATE */
// const initialStateUpdate = {
//   book: null,
//   error: null,
//   loading: false,
// };

// const updateBookStarted = (state, action) => updateObject(state, {
//   error: null,
//   loading: true,
// });

// const updateBookSuccess = (state, action) => updateObject(state, {
//   book: action.book,
//   error: null,
//   loading: false,
// });

// const updateBookFailure = (state, action) => updateObject(state, {
//   error: action.error,
//   loading: false,
// });

// const updatedBookReducer = (state = initialStateUpdate, action) => {
//   switch (action.type) {
//     case actionTypes.UPDATE_BOOK_STARTED: return updateBookStarted(state, action);
//     case actionTypes.UPDATE_BOOK_SUCCESS: return updateBookSuccess(state, action);
//     case actionTypes.UPDATE_BOOK_FAILURE: return updateBookFailure(state, action);
//     default: return state;
//   }
// };

// /* DELETE */
// const initialStateDelete = {
//   book: null,
//   error: null,
//   loading: false,
// };

// const deleteBookStarted = (state, action) => updateObject(state, {
//   error: null,
//   loading: true,
// });

// const deleteBookSuccess = (state, action) => updateObject(state, {
//   book: action.book,
//   error: null,
//   loading: false,
// });

// const deleteBookFailure = (state, action) => updateObject(state, {
//   error: action.error,
//   loading: false,
// });

// const deletedBookReducer = (state = initialStateDelete, action) => {
//   switch (action.type) {
//     case actionTypes.UPDATE_BOOK_STARTED: return deleteBookStarted(state, action);
//     case actionTypes.UPDATE_BOOK_SUCCESS: return deleteBookSuccess(state, action);
//     case actionTypes.UPDATE_BOOK_FAILURE: return deleteBookFailure(state, action);
//     default: return state;
//   }
// };

/* READ */
const initialState = {
  books: null,
  error: null,
  loading: false,
};

// eslint-disable-next-line no-unused-vars
const getBooksStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const getBooksSuccess = (state, action) => updateObject(state, {
  books: action.books,
  error: null,
  loading: false,
});

const getBooksFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS_STARTED: return getBooksStarted(state, action);
    case actionTypes.GET_BOOKS_SUCCESS: return getBooksSuccess(state, action);
    case actionTypes.GET_BOOKS_FAILURE: return getBooksFailure(state, action);
    default: return state;
  }
};

export {
  // deletedBookReducer,
  // bookReducer,
  booksReducer,
  // updatedBookReducer,
};
