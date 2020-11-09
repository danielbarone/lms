import * as actionTypes from './actionTypes';
import updateObject from '../utils';

const initialState = {
  branches: null,
  error: null,
  loading: false,
};

// eslint-disable-next-line no-unused-vars
const getBranchesStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const getBranchesSuccess = (state, action) => updateObject(state, {
  branches: action.branches,
  error: null,
  loading: false,
});

const getBranchesFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const branchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BRANCHES_STARTED: return getBranchesStarted(state, action);
    case actionTypes.GET_BRANCHES_SUCCESS: return getBranchesSuccess(state, action);
    case actionTypes.GET_BRANCHES_FAILURE: return getBranchesFailure(state, action);
    default: return state;
  }
};

export default branchesReducer;