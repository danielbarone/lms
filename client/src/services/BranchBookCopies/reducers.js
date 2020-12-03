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
const getBBooksStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const getBBooksSuccess = (state, action) => updateObject(state, {
  books: action.books,
  error: null,
  loading: false,
});

const getBBooksFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const bBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BBOOKS_STARTED: return getBBooksStarted(state, action);
    case actionTypes.GET_BBOOKS_SUCCESS: return getBBooksSuccess(state, action);
    case actionTypes.GET_BBOOKS_FAILURE: return getBBooksFailure(state, action);
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
  bBooksReducer,
  bookCopiesReducer,
};
