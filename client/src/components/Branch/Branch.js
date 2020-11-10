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

const Branch = (props) => {
  const classes = useStyles(props);
  const branches = useSelector((state) => state.branches.branches);
  const loading = useSelector((state) => state.branches.loading);
  const dispatch = useDispatch();

  const refresh = () => dispatch(branchActions.getBranches());

  useEffect(() => {
    dispatch(branchActions.getBranches());
  }, []);

  return (
    <div className={classes.root}>
      <InputModal
        action={(branch) => branchActions.addBranch(branch)}
        columns={formColumns}
        details='Enter details for the new branch you would like to add.'
        title='New Branch'
        refresh={refresh}
      />
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
