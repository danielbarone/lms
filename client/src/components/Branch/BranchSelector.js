/* React */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Material UI*/
import {Button, CircularProgress, LinearProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
/* Styles */
import useStyles from './Branch.styles';
/* Components */
import { EntityTable, EntityTable4, InputModal } from '..';
import { branchActions } from '../../services/actions';


const columns = [
 // { field: 'id', headerName: 'ID', width: 75 },
  { field: 'name', headerName: 'Branch Name', width: 250 },
  { field: 'address', headerName: 'Address', width: 250 },
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

const BranchSelector = (props) => {
  const classes = useStyles(props);
  //Cant call state or you will get an infinite loop
  // const theState = useSelector((state) => state);
  const borrower = useSelector((state) => state.borrower2);
  const branches = useSelector((state) => state.branches.branches);
  const loading = useSelector((state) => state.branches.loading);
  const dispatch = useDispatch();

  // const createBranch = (branch) => branchActions.addBranch(branch);
  // const updateBranch = (branch) => branchActions.updateBranch(branch);
  // const deleteBranch = (branch) => branchActions.deleteBranch(branch);
  const getBranches = () => dispatch(branchActions.getBranches2());
  const cardNo = props.cardNo;

  useEffect(() => {
    getBranches();
  }, []);

  
  if(branches === null){
    return(
    <div className={classes.spinnerContainer}>
    <CircularProgress className={classes.spinner} />
  </div>
    )
    }
    else{
      console.log("Borrower");
      console.log(borrower);
      if( !borrower.borrowers || !borrower.borrowers.cardNo)
      return(
        <div>
       <Alert severity="error"> No user found with this cardNo. Please double check your number.  </Alert>
        </div>
      )
      else{
       
  return (
    <div className={classes.root}>
      {/* Temp div style */}
      <div style={{ display: 'flex', justifyContent: 'start' }}>
    
      </div>
      {/* Select which branch you want */}
      <EntityTable4
        cols={columns}
        icon='library'
        loading={loading}
        rows={branches}
        cardNo={cardNo}
      />
    </div>
  );
};
    }
}

export default BranchSelector;
