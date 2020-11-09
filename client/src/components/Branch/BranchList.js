/* React */
import React, { useEffect, useState, useCallback } from 'react';
import { CircularProgress } from '@material-ui/core';

/* Components */
import { adminApi } from '../../utils/api';
/* Styles */
import useStyles from './BranchList.styles';

const BranchList = (props) => {
  const classes = useStyles(props);
  const [branches, setBranches] = useState([]);

  const loadBranches = useCallback(() => {
    adminApi.branches().getAll().then((response) => {
      setBranches(response.data);
     // console.log(response.data);
    });
  }, []);

  useEffect(() => {
    loadBranches();
  }, [loadBranches]);

  if (!branches) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress className={classes.spinner}/>
      </div>
    );
  }

  return (
    <div>
      {branches.map(
        (val, index) => (
            <div key={`branch${index}-branchId${val.branchId}`}>
              {val.branchName}<br />
              {val.branchAddress}<br /><br />
            </div>
        ),
      )}
    </div>
  );
};

export default BranchList;
