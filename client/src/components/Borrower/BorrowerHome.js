import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './Borrower.styles';
import { EntityTable, InputModal } from '..';
import { borrowerActions } from '../../services/actions';

const columns = [
  { field: 'id', headerName: 'Card No.', width: 125 },
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'address', headerName: 'Address', width: 250 },
  { field: 'phone', headerName: 'Phone', width: 250 },
]

const addFormColumns = [
  { field: 'name', label: 'Borrower Name', type: 'text' },
  { field: 'address', label: 'Borrower Address', type: 'text' },
  { field: 'phone', label: 'Borrower Phone', type: 'text' }
]

const updateFormColumns = [
  { field: 'cardNo', label: 'CardNo', type: 'text' },
  { field: 'name', label: 'Borrower Name', type: 'text' },
  { field: 'address', label: 'Borrower Address', type: 'text' },
  { field: 'phone', label: 'Borrower Phone', type: 'text' }
]

const deleteFormColumns = [
  { field: 'cardNo', label: 'CardNo', type: 'text' }
]

import { BorrowerInput } from '..';



const Borrower = (props) => {
  const classes = useStyles(props);
  const borrowers = useSelector((state) => state.borrowers.borrowers);
  const loading = useSelector((state) => state.borrowers.loading);
  const dispatch = useDispatch();


  const getBorrowers = () => dispatch(borrowerActions.getBorrowers());
  const addBorrower = (borrower) => borrowerActions.addBorrower(borrower);
  const updateBorrower = (borrower) => borrowerActions.updateBorrower(borrower);
  const deleteBorrower = (borrower) => borrowerActions.deleteBorrower(borrower);

  useEffect(() => {
    getBorrowers();
  }, [])

  return (
    <div className={classes.root}>
      Borrowers.....
      Please enter your borrower Id
      <BorrowerInput />
    </div>
  );
};

export default Borrower;
