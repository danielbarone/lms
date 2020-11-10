import * as actionTypes from './actionTypes';
import admin from '../api';

/* CREATE */
const addGenreStarted = (loading) => ({
  type: actionTypes.ADD_GENRE_STARTED,
  loading,
});

const addGenreSuccess = (genre) => ({
  type: actionTypes.ADD_GENRE_SUCCESS,
  genre,
});

const addGenreFailure = (error) => ({
  type: actionTypes.ADD_GENRE_FAILURE,
  error,
});

const addGenre = (genre) => (dispatch) => {
  dispatch(addGenreStarted(true));

  return admin.genres().create(genre)
    .then((response) => {
      dispatch(addGenreSuccess(genre));
      return response;
    })
    .catch((e) => dispatch(addGenreFailure(e)));
};

/* UPDATE */
const updateGenreStarted = (loading) => ({
  type: actionTypes.UPDATE_GENRE_STARTED,
  loading,
});

const updateGenreSuccess = (genre) => ({
  type: actionTypes.UPDATE_GENRE_SUCCESS,
  genre,
});

const updateGenreFailure = (error) => ({
  type: actionTypes.UPDATE_GENRE_FAILURE,
  error,
});

const updateGenre = (genre) => (dispatch) => {
  dispatch(updateGenreStarted(true));

  return admin.genres().update(genre)
    .then((response) => {
      dispatch(updateGenreSuccess(genre));
      return response;
    })
    .catch((e) => dispatch(updateGenreFailure(e)));
};

/* READ */
const getGenresStarted = (loading) => ({
  type: actionTypes.GET_GENRES_STARTED,
  loading,
});

const getGenresSuccess = (genres) => ({
  type: actionTypes.GET_GENRES_SUCCESS,
  genres,
});

const getGenresFailure = (error) => ({
  type: actionTypes.GET_GENRES_FAILURE,
  error,
});

const parseGenreData = (genres) => genres.map(
  (g) => ({
    id: g.genreId,
    name: g.genreName || '--',
  }),
);

const getGenres = () => (dispatch) => {
  dispatch(getGenresStarted(true));

  admin.genres().getAll()
    .then((response) => {
      const genres = parseGenreData(response.data);
      dispatch(getGenresSuccess(genres));
    })
    .catch((e) => dispatch(getGenresFailure(e)));
};

export {
  addGenre,
  updateGenre,
  getGenres,
};
