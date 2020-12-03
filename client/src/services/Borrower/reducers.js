import * as actionTypes from './actionTypes';
import updateObject from '../utils';

const initialState = {
  borrowers: null,
  error: null,
  loading: false,
};

// eslint-disable-next-line no-unused-vars
const getBorrowersStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const getBorrowersSuccess = (state, action) => updateObject(state, {
  borrowers: action.Borrowers,
  error: null,
  loading: false,
});

const getBorrowersFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const BorrowersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_Borrowers_STARTED: return getBorrowersStarted(state, action);
    case actionTypes.GET_Borrowers_SUCCESS: return getBorrowersSuccess(state, action);
    case actionTypes.GET_Borrowers_FAILURE: return getBorrowersFailure(state, action);
    default: return state;
  }
};

export default BorrowersReducer;
