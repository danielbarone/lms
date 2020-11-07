/* React */
import React, { useEffect, useState, useCallback } from 'react';
/* Styles */
import useStyles from './Branch.styles';
/* Components */
import { adminApi } from '../../utils/api';
import { EntityTable } from '..';

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'name', headerName: 'Branch Name', width: 250 },
  { field: 'address', headerName: 'Address', width: 250 },
];

const Branch = (props) => {
  const classes = useStyles(props);
  const [branches, setBranches] = useState(null);

  const createRows = (brnchs) => brnchs.map((v) => ({
    id: v.branchId,
    name: v.branchName || '--',
    address: v.branchAddress || '--',
  }));

  const loadBranches = useCallback(() => {
    adminApi.branches().getAll().then((response) => {
      setBranches(createRows(response.data));
    });
  }, []);

  useEffect(() => {
    loadBranches();
  }, [loadBranches]);

  return (
    <div className={classes.root}>
      <EntityTable rows={branches} cols={columns} />
    </div>
  );
};

export default Branch;
