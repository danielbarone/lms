/* React */
import React, { useEffect, useState, useCallback } from 'react';
/* Styles */
import useStyles from './Branch.styles';
/* Components */
import { adminApi } from '../../utils/api';
import { BranchTable } from '..';

const Branch = (props) => {
  const classes = useStyles(props);
  const [branches, setBranches] = useState(null);

  const loadBranches = useCallback(() => {
    adminApi.branches().getAll().then((response) => {
      setBranches(response.data);
    });
  }, []);

  useEffect(() => {
    loadBranches();
  }, [loadBranches]);

  return (
    <BranchTable data={branches} />
  );
};

export default Branch;
