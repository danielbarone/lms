
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './Librarian.styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

const formColumnsUpdateCopies = [
  {
    field: 'numOfCopies',
    label: 'New Copies Amount',
    type: 'text'
  }
]

const bookColumns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'title', headerName: 'Title', width: 450 },
]

const Librarian = (props) => {
  const classes = useStyles(props);

  const [branchSelection, setBranchSelection] = useState(false);
  const [branchId, setBranchId] = useState(0);
  const [bookId, setBookId] = useState(0);
  const [indivCopies, setIndivCopies] = useState(0);
  const [bookSelection, setBookSelection] = useState(false);



  //updated getting branches
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

  const getBranches = () => dispatch(branchActions.getBranches());
  const getBooks = (branchId) => dispatch(librarianActions.getBranchBooks(branchId));
  const getCopies = (branchId) => dispatch(librarianActions.getBranchCopies(branchId));
  const updateCopies = (branchId, bookId, numOfCopies) => librarianActions.updateBookCopies(branchId, bookId, numOfCopies);


  useEffect(() => {
    getBranches();
  }, []);



  const handleBranchId = (id) => {
    setBranchId(id);
    getBooks(id);
    getCopies(id);
    setBranchSelection(true);
  }



  const handleBookId = (id) => {
    setBookSelection(true);

    try {
      let copyCount = copies.find(c => c.bookId == books[(id - 1)].bookId && c.branchId == branchId);
      setIndivCopies(copyCount.numOfCopies);
      setBookId(books[id - 1].bookId);
    } catch (error) {
      setIndivCopies(0);
    }
  }



  const RenderBooks = () => {
    if (!branchSelection) {
      return null;
    } else {
      return (
        <div>
          <EntityTable
            cols={bookColumns}
            icon='library'
            loading={bookLoading}
            rows={books}
          />
          <div>This book has {indivCopies} copies </div>

        </div>)
    }
  }





  return (

    <div className={classes.root}>

      <EntityTable
        cols={columns}
        icon='library'
        loading={loading}
        rows={branches}
      />

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
      {(() => {
        switch (branchSelection) {
          case true: return (<RenderBooks />);
          case false: return null;
          default: return null;
        }
      })()}
      {(() => {
        switch (branchSelection) {
          case true: return (
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
              <InputModal
                action={updateCopies}
                columns={formColumnsUpdateCopies}
                details='Insert new Book Copies for the selected book'
                title='Update Book Copies'
                refresh={getBranches}
              />
            </div>
          );
          case false: return null;
          default: return null;
        }
      })()}
    </div>
  );
};



export default Librarian;
