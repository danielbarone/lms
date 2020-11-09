import {
  GET_GENRES_STARTED,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE,
} from './actionTypes';

import admin from '../api';

const getGenresStarted = (loading) => ({
  type: GET_GENRES_STARTED,
  loading,
});

const getGenresSuccess = (genres) => ({
  type: GET_GENRES_SUCCESS,
  genres,
});

const getGenresFailure = (error) => ({
  type: GET_GENRES_FAILURE,
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
  getGenres,
};
