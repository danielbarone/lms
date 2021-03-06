import * as actionTypes from './actionTypes';

import admin from '../api';
import { borrower}  from '../api';

/* CREATE */
const addBranchStarted = (loading) => ({
  type: actionTypes.ADD_BRANCH_STARTED,
  loading,
});

const addBranchSuccess = (branch) => ({
  type: actionTypes.ADD_BRANCH_SUCCESS,
  branch,
});

const addBranchFailure = (error) => ({
  type: actionTypes.ADD_BRANCH_FAILURE,
  error,
});

const addBranch = (branch) => (dispatch) => {
  dispatch(addBranchStarted(true));

  return admin.branches().create(branch)
    .then((response) => {
      dispatch(addBranchSuccess(branch));
      return response;
    })
    .catch((e) => dispatch(addBranchFailure(e)));
};

/* UPDATE */
const updateBranchStarted = (loading) => ({
  type: actionTypes.UPDATE_BRANCH_STARTED,
  loading,
});

const updateBranchSuccess = (branch) => ({
  type: actionTypes.UPDATE_BRANCH_SUCCESS,
  branch,
});

const updateBranchFailure = (error) => ({
  type: actionTypes.UPDATE_BRANCH_FAILURE,
  error,
});

const updateBranch = (branch) => (dispatch) => {
  dispatch(updateBranchStarted(true));

  return admin.branches().update(branch)
    .then((response) => {
      dispatch(updateBranchSuccess(branch));
      return response;
    })
    .catch((e) => dispatch(updateBranchFailure(e)));
};

/* DELETE */
const deleteBranchStarted = (loading) => ({
  type: actionTypes.DELETE_BRANCH_STARTED,
  loading,
});

const deleteBranchSuccess = (branch) => ({
  type: actionTypes.DELETE_BRANCH_SUCCESS,
  branch,
});

const deleteBranchFailure = (error) => ({
  type: actionTypes.DELETE_BRANCH_FAILURE,
  error,
});

const deleteBranch = (branch) => (dispatch) => {
  dispatch(deleteBranchStarted(true));

  return admin.branches().delete(branch)
    .then((response) => {
      dispatch(deleteBranchSuccess(branch));
      return response;
    })
    .catch((e) => dispatch(deleteBranchFailure(e)));
};

/* READ */
const getBranchesStarted = (loading) => ({
  type: actionTypes.GET_BRANCHES_STARTED,
  loading,
});

const getBranchesSuccess = (branches) => ({
  type: actionTypes.GET_BRANCHES_SUCCESS,
  branches,
});

const getBranchesFailure = (error) => ({
  type: actionTypes.GET_BRANCHES_FAILURE,
  error,
});

const parseBranchData = (branches) => branches.map(
  (b) => ({
    id: b.branchId,
    name: b.branchName,
    address: b.branchAddress,
  }),
);

const getBranches = () => (dispatch) => {
  dispatch(getBranchesStarted(true));

  admin.branches().getAll()
    .then((response) => {
      const branches = parseBranchData(response.data);
      dispatch(getBranchesSuccess(branches));
    })
    .catch((e) => dispatch(getBranchesFailure(e)));
};


const getBranches2 = () => (dispatch) => {
  dispatch(getBranchesStarted(true));

  borrower.branches().getAll()
    .then((response) => {
      const branches = parseBranchData(response.data);
      dispatch(getBranchesSuccess(branches));
    })
    .catch((e) => dispatch(getBranchesFailure(e)));
};

export {
  addBranch,
  deleteBranch,
  getBranches,
  getBranches2,
  updateBranch,
};
