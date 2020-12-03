import * as actionTypes from './actionTypes';
import admin from '../api';

/* CREATE */
// const addAuthorStarted = (loading) => ({
//   type: actionTypes.ADD_AUTHOR_STARTED,
//   loading,
// });

// const addAuthorSuccess = (author) => ({
//   type: actionTypes.ADD_AUTHOR_SUCCESS,
//   author,
// });

// const addAuthorFailure = (error) => ({
//   type: actionTypes.ADD_AUTHOR_FAILURE,
//   error,
// });

// const addAuthor = (author) => (dispatch) => {
//   dispatch(addAuthorStarted(true));

//   return admin.authors().create(author)
//     .then((response) => {
//       dispatch(addAuthorSuccess(author));
//       return response;
//     })
//     .catch((e) => dispatch(addAuthorFailure(e)));
// };

/* UPDATE */
// const updateAuthorStarted = (loading) => ({
//   type: actionTypes.UPDATE_AUTHOR_STARTED,
//   loading,
// });

// const updateAuthorSuccess = (author) => ({
//   type: actionTypes.UPDATE_AUTHOR_SUCCESS,
//   author,
// });

// const updateAuthorFailure = (error) => ({
//   type: actionTypes.UPDATE_AUTHOR_FAILURE,
//   error,
// });

// const updateAuthor = (author) => (dispatch) => {
//   dispatch(updateAuthorStarted(true));

//   return admin.authors().update(author)
//     .then((response) => {
//       dispatch(updateAuthorSuccess(author));
//       return response;
//     })
//     .catch((e) => dispatch(updateAuthorFailure(e)));
// };

/* DELETE */
// const deleteAuthorStarted = (loading) => ({
//   type: actionTypes.DELETE_AUTHOR_STARTED,
//   loading,
// });

// const deleteAuthorSuccess = (author) => ({
//   type: actionTypes.DELETE_AUTHOR_SUCCESS,
//   author,
// });

// const deleteAuthorFailure = (error) => ({
//   type: actionTypes.DELETE_AUTHOR_FAILURE,
//   error,
// });

// const deleteAuthor = (author) => (dispatch) => {
//   dispatch(deleteAuthorStarted(true));

//   return admin.authors().delete(author)
//     .then((response) => {
//       dispatch(deleteAuthorSuccess(author));
//       return response;
//     })
//     .catch((e) => dispatch(deleteAuthorFailure(e)));
// };

/* READ */
const getAuthorsStarted = (loading) => ({
  type: actionTypes.GET_AUTHORS_STARTED,
  loading,
});

const getAuthorsSuccess = (authors) => ({
  type: actionTypes.GET_AUTHORS_SUCCESS,
  authors,
});

const getAuthorsFailure = (error) => ({
  type: actionTypes.GET_AUTHORS_FAILURE,
  error,
});

const parseAuthorData = (authors) => authors.map(
  (a) => ({
    id: a.authorId,
    name: a.authorName || '--',
  }),
);

const getAuthors = () => (dispatch) => {
  dispatch(getAuthorsStarted(true));

  admin.authors().getAll()
    .then((response) => {
      const authors = parseAuthorData(response.data);
      dispatch(getAuthorsSuccess(authors));
    })
    .catch((e) => dispatch(getAuthorsFailure(e)));
};

export {
  // addAuthor,
  // deleteAuthor,
  // updateAuthor,
  getAuthors,
};
