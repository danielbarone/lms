/* eslint-disable no-unused-vars */
import * as actionTypes from './actionTypes';
import updateObject from '../utils';

/* CREATE */
const initialStateCreate = {
  genre: null,
  error: null,
  loading: false,
};

const addGenreStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const addGenreSuccess = (state, action) => updateObject(state, {
  genre: action.genre,
  error: null,
  loading: false,
});

const addGenreFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const genreReducer = (state = initialStateCreate, action) => {
  switch (action.type) {
    case actionTypes.ADD_GENRE_STARTED: return addGenreStarted(state, action);
    case actionTypes.ADD_GENRE_SUCCESS: return addGenreSuccess(state, action);
    case actionTypes.ADD_GENRE_FAILURE: return addGenreFailure(state, action);
    default: return state;
  }
};

/* UPDATE */
const initialStateUpdate = {
  genre: null,
  error: null,
  loading: false,
};

const updateGenreStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const updateGenreSuccess = (state, action) => updateObject(state, {
  genre: action.genre,
  error: null,
  loading: false,
});

const updateGenreFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const updatedGenreReducer = (state = initialStateUpdate, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_GENRE_STARTED: return updateGenreStarted(state, action);
    case actionTypes.UPDATE_GENRE_SUCCESS: return updateGenreSuccess(state, action);
    case actionTypes.UPDATE_GENRE_FAILURE: return updateGenreFailure(state, action);
    default: return state;
  }
};

/* READ */
const initialState = {
  genres: null,
  error: null,
  loading: false,
};

// eslint-disable-next-line no-unused-vars
const getGenresStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const getGenresSuccess = (state, action) => updateObject(state, {
  genres: action.genres,
  error: null,
  loading: false,
});

const getGenresFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GENRES_STARTED: return getGenresStarted(state, action);
    case actionTypes.GET_GENRES_SUCCESS: return getGenresSuccess(state, action);
    case actionTypes.GET_GENRES_FAILURE: return getGenresFailure(state, action);
    default: return state;
  }
};

export {
  genreReducer,
  genresReducer,
  updatedGenreReducer,
};
