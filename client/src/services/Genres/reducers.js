import * as actionTypes from './actionTypes';
import updateObject from '../utils';

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

export default genresReducer;
