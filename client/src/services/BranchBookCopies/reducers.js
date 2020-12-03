/* eslint-disable no-unused-vars */
import * as actionTypes from './actionTypes';
import updateObject from '../utils';



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



const getBookCopiesStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const getBookCopiesSuccess = (state, action) => updateObject(state, {
  bookCopies: action.bookCopies,
  //books: action.books,
  error: null,
  loading: false,
});

const getBookCopiesFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const bookCopiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKCOPIES_STARTED: return getBookCopiesStarted(state, action);
    case actionTypes.GET_BOOKCOPIES_SUCCESS: return getBookCopiesSuccess(state, action);
    case actionTypes.GET_BOOKCOPIES_FAILURE: return getBookCopiesFailure(state, action);
    default: return state;
  }
};


export {
  booksReducer,
  bookCopiesReducer,
};
