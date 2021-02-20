import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './Borrower.styles';
import { EntityTable, Icon, InputModal } from '..';
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
      <EntityTable
        addAction={() => (
          <InputModal
            action={addBorrower}
            columns={addFormColumns}
            details='Enter details for the new borrower you would like to add.'
            title={<Icon name='add' color='white' />}
            titleText='New Borrower'
            refresh={getBorrowers}
          />
        )}
        deleteAction={(info) => (
          <InputModal
            action={deleteBorrower}
            columns={deleteFormColumns}
            details='Enter the id of the borrower you would like to delete'
            info={info}
            modal='delete'
            title={<Icon name='delete' color='white' />}
            titleText='Delete Borrower'
            refresh={getBorrowers}
          />
        )}
        updateAction={(info) => (
          <InputModal
            action={updateBorrower}
            columns={updateFormColumns}
            details='Edit details for the borrower you would like to update.'
            info={info}
            modal='update'
            title={<Icon name='edit' color='white' />}
            titleText='Update Borrower'
            refresh={getBorrowers}
          />
        )}
        cols={columns}
        icon='library'
        loading={loading}
        rows={borrowers}
      />
    </div>
  );
};

export default Borrower;
