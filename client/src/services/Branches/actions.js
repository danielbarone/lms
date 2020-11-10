import {
  GET_BRANCHES_STARTED,
  GET_BRANCHES_SUCCESS,
  GET_BRANCHES_FAILURE,
} from './actionTypes';

import admin from '../api';

const getBranchesStarted = (loading) => ({
  type: GET_BRANCHES_STARTED,
  loading,
});

const getBranchesSuccess = (branches) => ({
  type: GET_BRANCHES_SUCCESS,
  branches,
});

const getBranchesFailure = (error) => ({
  type: GET_BRANCHES_FAILURE,
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
  // eslint-disable-next-line import/prefer-default-export
  getBranches,
};
