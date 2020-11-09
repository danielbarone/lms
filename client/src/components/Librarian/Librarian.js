/* React */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* Styles */
import useStyles from './Librarian.styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Librarian = (props) => {
  const classes = useStyles(props);

  const [results, setResults] = useState([]);
  const [branchId, setBranchId] = useState(0);
  const [copies, setCopies] = useState([]);
  const [books, setBooks] = useState([])
  const [editBranch, setEditBranch] = useState(false);
  const [editCopies, setEditCopies] = useState(false);
  const [buttonDisplay, setButtonDisplay] = useState(false);
  const [selectionIndex, setSelectionIndex] = useState(0);
  const [bookId, setBookId] = useState(0);
  const [bookSelection, setBookSelecton] = useState(false);
  const [newCopiesNo, setNewCopiesNo] = useState(0);
  const [editCopiesSuccess, setEditCopiesSuccess] = useState(false);
  const [editCopiesFailure, setEditCopiesFailure] = useState(false);

  const [branchName, setBranchName] = useState(null);
  const [branchAddress, setBranchAddress] = useState(null);


  //requests
  useEffect(() => {
    axios.get('http://localhost:8080/getAllBranches').then(res => {
      setResults(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  }, [])


  const getCopies = (branchId) => {
    axios.post('http://localhost:8080/getBookCopiesByBranchId', { "branchId": branchId }).then(res => {
      setCopies(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  }

  const getBooks = (branchId) => {
    axios.post("http://localhost:8080/getBranchBooks", { "branchId": branchId }).then(res => {
      setBooks(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  }

  const editBookCopies = () => {
    axios.post("http://localhost:8080/addBookCopies", { "id": { "branchId": branchId, "bookId": bookId }, "numOfCopies": newCopiesNo }).then(res => {
      console.log(res.data)
      setEditCopiesSuccess(true);
    }).catch(err => {
      console.log(err)
      setEditCopiesFailure(true);
    })
  }

  const editBranchDetails = () => {
    axios.post("http://localhost:8080/updateBranch", {"branchId": branchId, "branchName": branchName, "branchAddress": branchAddress}).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  //input handling
  //input handling for branchId
  const handleBranchId = (id) => {
    setSelectionIndex(id);
    if (id == undefined || id > (results.length) || results[(id - 1)] == undefined) {
      setBranchId(0);
      setButtonDisplay(false);
      setEditBranch(false);
      setEditCopies(false);
      setBookSelecton(false);
      setEditCopiesSuccess(false);
      setEditCopiesFailure(false);
    } else {
      var bid = results[(id - 1)].branchId
      setBranchId(bid);
      getCopies(bid);
      getBooks(bid);
      setButtonDisplay(true);
    }

  }

  const handleEditButton = () => {
    setEditCopies(false);
    setEditBranch(true);
    setBookSelecton(false);
    setEditCopiesSuccess(false);
    setEditCopiesFailure(false);
  }

  const handleAddButton = () => {
    setEditCopies(true);
    setEditBranch(false);
    setBookSelecton(false);
    setEditCopiesSuccess(false);
    setEditCopiesFailure(false);
  }

  const handleBookId = (id) => {
    if (id == undefined || id > (books.length) || books[(id)] == undefined) {
      setBookId(0);
      setBookSelecton(true);
    } else {
      var bkd = books[(id)].bookId
      setBookId(bkd);
      setBookSelecton(true);
    }
  }

  //render methods


  const RenderAddInput = () => {
    if (!bookSelection) {
      return null
    } else {
      let obj2 = copies[copies.findIndex(x => x.id.bookId == bookId)]
      console.log(obj2)
      if (obj2 == undefined) {
        return (<div>Somehow you got here, something went wrong, this means that the book you selected doesn't have copies but is in the branch</div>)
      } else {
        return (
          <div>
            <div> Current Number of Copies: {obj2.numOfCopies}</div>

          </div>
        )
      }

    }
  }

  //display books


  const RenderBooks = () => {
    if (branchId == 0) {
      return (<div>There is no branch selected</div>)
    } else if (books.length < 1) {
      return (<div>There are no books to display</div>)
    } else {
      return (
        <div>
          Books for the {results[(selectionIndex - 1)].branchName} branch:
          Select the book whose Copies you would like to edit
          <ol>
            {books.map((book, index) => (
              <button onClick={() => {handleBookId(index); setEditCopiesSuccess(false);
                setEditCopiesFailure(false);}}>{book.title}</button>

            ))}
          </ol>
        </div>
      )
    }
  }

  const RenderButtons = () => {
    if (!buttonDisplay) {
      return null;
    } else {
      return (
        <div>
          <Button variant="contained" color="primary" onClick={
            () => handleEditButton()
          }>
            Edit Branch
          </Button>
          <Button variant="contained" color="primary" style={{ "marginLeft": "15px" }} onClick={
            () => handleAddButton()
          }>
            Add Copies
          </Button>
        </div>
      );
    }
  }


  const RenderAddForm = () => {
    if (!editCopies) {
      return null
    } else {
      return (
        <div>
          <RenderBooks />


        </div>)
    }
  }

  const CopiesFeedback = () => {
    if (editCopiesSuccess == false && editCopiesFailure == false){
      return null;
    } else if (editCopiesSuccess == true){
      return (<div>Copies updated successfully</div>)
    }else if (editCopiesFailure == true){
      return (<div>Copies were not updated successfully</div>)
    }
  }

  const checkEditForm = () => {
    
    
      editBranchDetails();
      refreshPage();
    
    
    
  }

  const refreshPage = () => {
    window.location.reload();
  }


  return (

    <div className={classes.root}>
      Librarian...
      <div>
        <ol>
          {results.map(result => (
            <li key={result.branchId}>
              Name: {result.branchName}  |  Address: {result.branchAddress}
            </li>
          ))}
        </ol>
      </div>
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
      <RenderButtons />
      <RenderAddForm />
      <RenderAddInput />
      {(()=> {
          switch(editBranch){
            case true: return (
              <div>
                <div>
                  Leave fields blank for no change
                  <div>New Branch Name: <input onChange={(e)=> setBranchName(e.target.value)}></input></div>
                  <div> New Branch Address: <input onChange={(e)=> setBranchAddress(e.target.value)}></input></div>
                </div>
                <button onClick={()=> {
                    checkEditForm();
                }}>
                  Submit
                </button>
              </div>
              );
            case false: return null;
            default: return null
          }
      })()}
      {(() => {
        switch (bookSelection) {
          case false: return null
          case true: return (<div>New Copies: <input onChange={(e) => setNewCopiesNo(e.target.value)} value={newCopiesNo}></input><button onClick={() => editBookCopies()}>Submit</button></div>);
          default: return null;
        }
      })()}
      <CopiesFeedback />
      {(() => {
        switch (editCopiesSuccess){
          case true: return (<button onClick = {() => {handleBranchId(undefined); setBranchId(0)}}>Finished</button>);
          case false: return null;
          default: return null;
        }
      })()}


    </div>
  );
};



export default Librarian;
