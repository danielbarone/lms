/* React */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Styles */
import useStyles from './Branch.styles';
/* Components */
import { EntityTable, Icon, InputModal } from '..';
import { branchActions } from '../../services/actions';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 75,
    valueFormatter: (params) => (params ? params.value : '--'),
  },
  {
    field: 'name',
    headerName: 'Branch Name',
    width: 250,
    valueFormatter: (params) => (params ? params.value : '--'),
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 250,
    valueFormatter: (params) => (params.value ? params.value : '--'),
  },
];

const formColumns = [
  { field: 'branchName', label: 'Branch Name', type: 'text' },
  { field: 'branchAddress', label: 'Branch Address', type: 'text' },
];

const formColsUpdDel = [
  { field: 'branchId', label: 'Branch ID', type: 'text' },
  { field: 'branchName', label: 'Branch Name', type: 'text' },
  { field: 'branchAddress', label: 'Branch Address', type: 'text' },
];

const Branch = (props) => {
  const classes = useStyles(props);
  const branches = useSelector((state) => state.branches.branches);
  const loading = useSelector((state) => state.branches.loading);
  const dispatch = useDispatch();

  const createBranch = (branch) => branchActions.addBranch(branch);
  const updateBranch = (branch) => branchActions.updateBranch(branch);
  const deleteBranch = (branch) => branchActions.deleteBranch(branch);
  const getBranches = () => dispatch(branchActions.getBranches());

  useEffect(() => {
    getBranches();
  }, []);

  return (
    <div className={classes.root}>
      {/* Temp div style */}
      <EntityTable
        addAction={() => (
          <InputModal
            action={createBranch}
            columns={formColumns}
            details='Enter details for the new branch you would like to add.'
            title={<Icon name='add' color='white' />}
            titleText='New Branch'
            refresh={getBranches}
          />
        )}
        deleteAction={(info) => (
          <InputModal
            action={deleteBranch}
            columns={formColsUpdDel}
            details='Review details of the branch you are about to delete.'
            info={info}
            modal='delete'
            title={<Icon name='delete' color='white' />}
            titleText='Delete Branch'
            refresh={getBranches}
          />
        )}
        updateAction={(info) => (
          <InputModal
            action={updateBranch}
            columns={formColsUpdDel}
            details='Edit details for the branch you would like to update.'
            info={info}
            modal='update'
            title={<Icon name='edit' color='white' />}
            titleText='Update Branch'
            refresh={getBranches}
          />
        )}
        icon='library'
        cols={columns}
        loading={loading}
        rows={branches}
      />
    </div>
  );
};

export default Branch;
