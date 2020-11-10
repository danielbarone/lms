import * as actionTypes from './actionTypes';

import admin from '../api';

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

  admin.branches().create(branch)
    .then((response) => {
      console.log(response);
      dispatch(addBranchSuccess(branch));
    })
    .catch((e) => dispatch(addBranchFailure(e)));
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

export {
  addBranch,
  getBranches,
};
