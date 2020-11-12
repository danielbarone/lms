import * as actionTypes from './actionTypes';
import updateObject from '../utils';

const initialState = {
  loans: null,
  error: null,
  loading: false,
};

// eslint-disable-next-line no-unused-vars
const getLoansStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const getLoansSuccess = (state, action) => updateObject(state, {
  loans: action.loans,
  error: null,
  loading: false,
});

const getLoansFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const loansReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LOANS_STARTED: return getLoansStarted(state, action);
    case actionTypes.GET_LOANS_SUCCESS: return getLoansSuccess(state, action);
    case actionTypes.GET_LOANS_FAILURE: return getLoansFailure(state, action);
    default: return state;
  }
};

export default loansReducer;
