/* React */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Styles */
import useStyles from './Branch.styles';
/* Components */
import { EntityTable, InputModal } from '..';
import { branchActions } from '../../services/actions';

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'name', headerName: 'Branch Name', width: 250 },
  { field: 'address', headerName: 'Address', width: 250 },
];

const formColumns = [
  { field: 'branchName', label: 'Branch Name', type: 'text' },
  { field: 'branchAddress', label: 'Branch Address', type: 'text' },
];

// const formColumnsUpdate = [
//   { field: 'branchId', label: 'Branch ID', type: 'text' },
//   { field: 'branchName', label: 'Branch Name', type: 'text' },
//   { field: 'branchAddress', label: 'Branch Address', type: 'text' },
// ];

const Branch = (props) => {
  const classes = useStyles(props);
  const branches = useSelector((state) => state.branches.branches);
  const loading = useSelector((state) => state.branches.loading);
  const dispatch = useDispatch();

  const createBranch = (branch) => branchActions.addBranch(branch);
  // const updateBranch = (branch) => branchActions.updateBranch(branch);
  const getBranches = () => dispatch(branchActions.getBranches());

  useEffect(() => {
    getBranches();
  }, []);

  return (
    <div className={classes.root}>
      <InputModal
        action={createBranch}
        columns={formColumns}
        details='Enter details for the new branch you would like to add.'
        title='New Branch'
        refresh={getBranches}
      />
      {/* <InputModal
        action={updateBranch}
        columns={formColumnsUpdate}
        details='Edit details for the branch you would like to update.'
        title='Update Branch'
        refresh={getBranches}
      /> */}
      <EntityTable
        cols={columns}
        icon='library'
        loading={loading}
        rows={branches}
      />
    </div>
  );
};

export default Branch;
