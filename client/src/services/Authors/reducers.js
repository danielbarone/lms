/* eslint-disable no-unused-vars */
import * as actionTypes from './actionTypes';
import updateObject from '../utils';

/* CREATE */
// const initialStateCreate = {
//   author: null,
//   error: null,
//   loading: false,
// };

// const addAuthorStarted = (state, action) => updateObject(state, {
//   error: null,
//   loading: true,
// });

// const addAuthorSuccess = (state, action) => updateObject(state, {
//   author: action.author,
//   error: null,
//   loading: false,
// });

// const addAuthorFailure = (state, action) => updateObject(state, {
//   error: action.error,
//   loading: false,
// });

// const authorReducer = (state = initialStateCreate, action) => {
//   switch (action.type) {
//     case actionTypes.ADD_AUTHOR_STARTED: return addAuthorStarted(state, action);
//     case actionTypes.ADD_AUTHOR_SUCCESS: return addAuthorSuccess(state, action);
//     case actionTypes.ADD_AUTHOR_FAILURE: return addAuthorFailure(state, action);
//     default: return state;
//   }
// };

/* UPDATE */
// const initialStateUpdate = {
//   author: null,
//   error: null,
//   loading: false,
// };

// const updateAuthorStarted = (state, action) => updateObject(state, {
//   error: null,
//   loading: true,
// });

// const updateAuthorSuccess = (state, action) => updateObject(state, {
//   author: action.author,
//   error: null,
//   loading: false,
// });

// const updateAuthorFailure = (state, action) => updateObject(state, {
//   error: action.error,
//   loading: false,
// });

// const updatedAuthorReducer = (state = initialStateUpdate, action) => {
//   switch (action.type) {
//     case actionTypes.UPDATE_AUTHOR_STARTED: return updateAuthorStarted(state, action);
//     case actionTypes.UPDATE_AUTHOR_SUCCESS: return updateAuthorSuccess(state, action);
//     case actionTypes.UPDATE_AUTHOR_FAILURE: return updateAuthorFailure(state, action);
//     default: return state;
//   }
// };

/* DELETE */
// const initialStateDelete = {
//   author: null,
//   error: null,
//   loading: false,
// };

// const deleteAuthorStarted = (state, action) => updateObject(state, {
//   error: null,
//   loading: true,
// });

// const deleteAuthorSuccess = (state, action) => updateObject(state, {
//   author: action.author,
//   error: null,
//   loading: false,
// });

// const deleteAuthorFailure = (state, action) => updateObject(state, {
//   error: action.error,
//   loading: false,
// });

// const deletedAuthorReducer = (state = initialStateDelete, action) => {
//   switch (action.type) {
//     case actionTypes.UPDATE_AUTHOR_STARTED: return deleteAuthorStarted(state, action);
//     case actionTypes.UPDATE_AUTHOR_SUCCESS: return deleteAuthorSuccess(state, action);
//     case actionTypes.UPDATE_AUTHOR_FAILURE: return deleteAuthorFailure(state, action);
//     default: return state;
//   }
// };

/* READ */
const initialState = {
  authors: null,
  error: null,
  loading: false,
};

// eslint-disable-next-line no-unused-vars
const getAuthorsStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const getAuthorsSuccess = (state, action) => updateObject(state, {
  authors: action.authors,
  error: null,
  loading: false,
});

const getAuthorsFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_AUTHORS_STARTED: return getAuthorsStarted(state, action);
    case actionTypes.GET_AUTHORS_SUCCESS: return getAuthorsSuccess(state, action);
    case actionTypes.GET_AUTHORS_FAILURE: return getAuthorsFailure(state, action);
    default: return state;
  }
};

export {
  // deletedAuthorReducer,
  // authorReducer,
  authorsReducer,
  // updatedAuthorReducer,
};
