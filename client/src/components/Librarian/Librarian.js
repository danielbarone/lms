import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './Librarian.styles';
import { EntityTable, InputModal } from '..';
import { branchActions, librarianActions } from '../../services/actions';

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

/* Uncomment when used */
// const formColumnsUpdateCopies = [
//   {
//     field: 'numOfCopies',
//     label: 'New Copies Amount',
//     type: 'text',
//   },
// ];

const formColsUpdDel = [
  { field: 'branchId', label: 'Branch ID', type: 'text' },
  { field: 'branchName', label: 'Branch Name', type: 'text' },
  { field: 'branchAddress', label: 'Branch Address', type: 'text' },
];

const bookColumns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'title', headerName: 'Title', width: 450 },
];

const Librarian = (props) => {
  const classes = useStyles(props);

  const [branchSelection, setBranchSelection] = useState(false);
  const [branchId, setBranchId] = useState(props.branchId);
  const [bookId, setBookId] = useState(0);
  const [indivCopies, setIndivCopies] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [bookSelection, setBookSelection] = useState(false);

  const [newCopiesNo, setNewCopiesNo] = useState(0);

  // updated getting branches
  const branches = useSelector((state) => state.branches.branches);
  const books = useSelector((state) => state.branchBooks.books);
  const copies = useSelector((state) => state.copies.copies);
  const loading = useSelector((state) => state.branches.loading);
  const bookLoading = useSelector((state) => state.branchBooks.loading);
  const dispatch = useDispatch();

  console.log(books);
  console.log(copies);
  console.log(bookId);
  console.log(branchId);
  console.log(newCopiesNo);

  const getBranches = () => dispatch(branchActions.getBranches());
  const getBooks = (brId) => dispatch(librarianActions.getBranchBooks(brId));
  const getCopies = (brId) => dispatch(librarianActions.getBranchCopies(brId));
  const updateCopies = (brId, bkId, numOfCopies) => dispatch(
    librarianActions.updateBookCopies(brId, bkId, numOfCopies),
  );
  const updateBranch = (branch) => branchActions.updateBranch(branch);

  useEffect(() => {
    if (!branchId) {
      getBranches();
    } else {
      getBooks(branchId);
      getCopies(branchId);
      setBranchSelection(true);
    }
  }, [branchId]);

  const handleSubmit = () => {
    if (bookId === 0 || bookId === undefined) {
      alert('Please select a valid book');
    } else if (newCopiesNo === 0 || newCopiesNo === undefined) {
      alert('Please enter a valid new copies number entry');
    } else {
      alert('Copies updated successfully');
      updateCopies(branchId, bookId, newCopiesNo);
      window.location.reload(false);
    }
  };

  const handleBranchId = (id) => {
    setBranchId(id);
    getBooks(id);
    getCopies(id);
    setBranchSelection(true);
  };

  const handleBookId = (id) => {
    setBookSelection(true);
    try {
      const copyCount = copies.find((c) => c.bookId === books[(id - 1)].bookId);
      setIndivCopies(copyCount.numOfCopies);
      setBookId(books[id - 1].bookId);
    } catch (error) {
      setIndivCopies(0);
    }
  };

  const RenderBooks = () => (branchSelection ? (
      <div>
        <EntityTable
          cols={bookColumns}
          icon='library'
          loading={bookLoading}
          rows={books}
        />
        <div>This book has {indivCopies} copies </div>
      </div>
  ) : null);

  return (
    <div className={classes.root}>
      {/* User Type is Administrator ? */}
      {props.userType === '000' ? (
        <Fragment>
          <div>Please enter the number of the library branch you manage: </div>
          <TextField
            id="filled-number"
            label="Branch Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            onChange={(e) => handleBranchId(e.target.value)}
          />
        </ Fragment>
      ) : ''}
      {/* Branch ID Present ? */}
      {branchId ? (
        <Fragment >
          <RenderBooks />
          <div>
            <TextField
              id="filled-number"
              label="Book Selection"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              onChange={(e) => handleBookId(e.target.value)}
            />
            <div>
              New number of copies:
              <div>
                <TextField
                  id="filled-number"
                  label="New Copies Amount"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  onChange={(e) => setNewCopiesNo(e.target.value)}
                />
              </div>
              <div>
                <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
                  Submit
                </Button>
              </div>

            </div>
            {/* <InputModal
              action={updateCopies}
              columns={formColumnsUpdateCopies}
              details='Insert new Book Copies for the selected book'
              title='Update Book Copies'
              refresh={getBranches}
            /> */}
          </div>
        </Fragment>
      /* No branch ID ?  */
      ) : (
        <Fragment>
          <InputModal
            action={updateBranch}
            columns={formColsUpdDel}
            details='Edit details for the branch you would like to update.'
            title='Update Branch'
            refresh={getBranches}
          />
          <EntityTable
            cols={columns}
            icon='library'
            loading={loading}
            rows={branches}
          />
        </Fragment>
      )}
    </div>
  );
};

Librarian.propTypes = {
  branchId: PropTypes.number,
  userType: PropTypes.string,
};

export default Librarian;
