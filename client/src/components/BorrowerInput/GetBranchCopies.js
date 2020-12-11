/* React */
import React, { useEffect, useState, useCallback } from 'react';
import {Button, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loanActions } from '../../services/actions';
import { borrower2Actions as borrowerActions } from '../../services/actions';
import { branchBookCopiesActions } from '../../services/actions';
import { bookActions } from '../../services/actions';
import { EntityTable } from '..';
import { EntityTable2 } from '..';
// import java.util.Calendar;
// import java.sql.Date;



/* Components */
//import { borrowerApi } from '../../utils/api';

///This will need to be reworked
import {borrower as borrowerApi} from "../../services/api/";

/* Styles */
import useStyles from './BorrowerInput.styles';




const GetBranchCopies = (props) => {

///Will add redux after merge 
const theState = useSelector((state) => state);
 const borrower = useSelector((state) => state.borrower.borrower);
  const classes = useStyles(props);
  //const [branchCopies, setBranchCopies] = useState([]);
  //const [branchBooks, setBranchBooks] = useState([]);
  const [bookId, setBookId] = useState(0);
  const [branchId, setBranchId] = useState(props.branchId);
  const [cardNo, setCardNo] = useState(props.cardNo);
  const [dateOut2, setDateOut] = useState();
  const [dueDate2, setDueDate] = useState();
  const [bookCheckedOut, setBookCheckedOut] = useState(false);
  
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.loans.loading);
  const branchCopies = useSelector((state) => state.branchBooksCopies.bookCopies) 
  //const branchBooks = useSelector((state) => state.branchBooks.books);
  const branchBooks = useSelector((state) => state.branchBooks2.books);
  const loans = useSelector((state) => state.loans.loans);


  ///isCheckedout will be replaced with just locking the option
  const columns = [
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'numOfCopies', headerName: 'Copies', width: 100 },
    { field: 'isCheckedOut', headerName: 'isCheckedOut', width: 130 },
    //  { field: 'branchId', headerName: 'BranchId', width: 100 },
    //  { field: 'bookId', headerName: 'BookId', width: 100 },
   ];

   


const dispatch = useDispatch();




  useEffect(() => {
    if(bookCheckedOut){
      //setBookCheckedOut(false);
      //console.log("You checked out a book")
      //console.log("BookId: "+bookId);
      dispatch(loanActions.checkOutBook(bookId, branchId, cardNo, dateOut2, dueDate2));
    }
    dispatch(branchBookCopiesActions.getBothByBranchId(branchId));
    //dispatch(branchBookCopiesActions.getBooksByBranchId(branchId));
    //dispatch(branchBookCopiesActions.getBookCopiesByBranchId(branchId));
    dispatch(loanActions.getLoansByCardNo(props.cardNo));
  },[bookCheckedOut]);

  if (!branchCopies) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress className={classes.spinner}/>
      </div>
    );
  }

  
  function isCheckingOut (props, bookId, noOfCopies){
    
    var dateOut = new Date();
    var dueDate = new Date();
    dueDate.setDate(dateOut.getDate()+7);
    let sqlDO = new Date(dateOut).toISOString().slice(0, 19).replace('T', ' ');
    let sqlDD = new Date(dueDate).toISOString().slice(0, 19).replace('T', ' ');
  

    setBookId(bookId);
    setBranchId(props.branchId);
    setCardNo(props.cardNo);
    setDateOut(dateOut);
    setDueDate(dueDate);
    setBookCheckedOut(true);
  
    
  }

if(!branchCopies[0]){
    return(
    <div>
    ----------------Empty---------------
    <br />
    </div>
    )
}


var loans2;
if(loans && loans.length > 0){
//A checked out book from any branch should disable the checkout
  // loans2= loans.filter(function(loan){
  //     return loan.branchId == props.branchId;
  // } );
  loans2= loans.filter(function(loan){
    return loan.cardNo == props.cardNo;
} );
}




var branchBookCopies = [];

if(branchBooks != null & branchCopies != null)
branchBooks.forEach(function(item, index, array) {
//  console.log(item, index)

  var bookCopy = branchCopies.find(({bookId}) => bookId === item.bookId);
 

  ///Need to make sure branchBooks and branchCopies are both updated
  //Need to make this make sure bB and bC are on the same branch rn it can be fooled
  if(branchCopies[0].branchId != props.branchId || item.branchId != props.branchId || branchBooks[0].bookId != branchCopies[0].bookId || branchBooks.length != branchCopies.length)
  {
    //console.log("Branch id's did not match")
    //console.log("bc bi: "+branchCopies[0].branchId+" Current branch: "+props.branchId)
   // return;
   return (
    <div className={classes.spinnerContainer}>
      <CircularProgress className={classes.spinner}/>
    </div>
  );
  }
  else{
    //console.log("Branch id's Did  match")
    //console.log("bc bi: "+branchCopies[0].branchId+" Current branch: "+props.branchId)

  }

  var isCheckedOut = false;
  var cobBranchId = 0;
  if(loans2 && loans2.length > 0){
    var loans3= loans2.filter(function(loan){
      return loan.bookId == item.bookId;
  } );
  if(loans3 && loans3.length > 0 ){
      loans3.forEach(function(item, index, array) {
        cobBranchId= item.branchId;
        if((item.dateIn == "null" || item.dateIn == null) && item.dateOut != null){
          isCheckedOut = true;
          
        }
      });


      // if(loans3[0].dateIn == "null" && loans3[0].dateOut != null){
      //   //console.log("Is checked out")
      //   isCheckedOut = true;
      // }
    
  }
  }
  branchBookCopies.push({title: item.title, numOfCopies: bookCopy.numOfCopies, bookId: bookCopy.bookId, branchId: bookCopy.branchId, id: item.bookId, isCheckedOut: isCheckedOut, locked: isCheckedOut, cobBranchId: cobBranchId});
  
});



if(!branchBookCopies[0]){
  return(
  <div>
  ----------------Empty---------------
  <br />
  </div>
  )
}


  return (
    <div>

    Available Books For Branch <span className={classes.highlight}>{props.branch.name}</span>
    <EntityTable2
        rows={branchBookCopies}
        cols={columns}
        loading={loading}
        cardNo = {props.cardNo}
        branch ={props.branch}
      /> <br/>

    <br />   
      
    </div>
  );
};

export default GetBranchCopies;
