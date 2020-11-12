/* eslint-disable no-unused-vars */
import * as actionTypes from './actionTypes';
import updateObject from '../utils';

/* CREATE */
const initialStateCreate = {
  branch: null,
  error: null,
  loading: false,
};

const addBranchStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const addBranchSuccess = (state, action) => updateObject(state, {
  branch: action.branch,
  error: null,
  loading: false,
});

const addBranchFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const branchReducer = (state = initialStateCreate, action) => {
  switch (action.type) {
    case actionTypes.ADD_BRANCH_STARTED: return addBranchStarted(state, action);
    case actionTypes.ADD_BRANCH_SUCCESS: return addBranchSuccess(state, action);
    case actionTypes.ADD_BRANCH_FAILURE: return addBranchFailure(state, action);
    default: return state;
  }
};

/* UPDATE */
const initialStateUpdate = {
  branch: null,
  error: null,
  loading: false,
};

const updateBranchStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const updateBranchSuccess = (state, action) => updateObject(state, {
  branch: action.branch,
  error: null,
  loading: false,
});

const updateBranchFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const updatedBranchReducer = (state = initialStateUpdate, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_BRANCH_STARTED: return updateBranchStarted(state, action);
    case actionTypes.UPDATE_BRANCH_SUCCESS: return updateBranchSuccess(state, action);
    case actionTypes.UPDATE_BRANCH_FAILURE: return updateBranchFailure(state, action);
    default: return state;
  }
};

/* DELETE */
const initialStateDelete = {
  branch: null,
  error: null,
  loading: false,
};

const deleteBranchStarted = (state, action) => updateObject(state, {
  error: null,
  loading: true,
});

const deleteBranchSuccess = (state, action) => updateObject(state, {
  branch: action.branch,
  error: null,
  loading: false,
});

const deleteBranchFailure = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const deletedBranchReducer = (state = initialStateDelete, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_BRANCH_STARTED: return deleteBranchStarted(state, action);
    case actionTypes.UPDATE_BRANCH_SUCCESS: return deleteBranchSuccess(state, action);
    case actionTypes.UPDATE_BRANCH_FAILURE: return deleteBranchFailure(state, action);
    default: return state;
  }
};

/* READ */
const initialState = {
  branches: null,
  error: null,
  loading: false,
};

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

export {
  branchReducer,
  branchesReducer,
  deletedBranchReducer,
  updatedBranchReducer,
};
