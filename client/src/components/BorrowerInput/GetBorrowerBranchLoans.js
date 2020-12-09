/* React */
import React, { useEffect, useState, useCallback } from 'react';
import {Button, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loanActions } from '../../services/actions';
import { EntityTable } from '..';
import { EntityTable3 } from '..';
import { branchBookCopiesActions } from '../../services/actions';
import { bookActions } from '../../services/actions';


/* Components */
import { borrowerApi } from '../../utils/api';
/* Styles */
import useStyles from './BorrowerInput.styles';

const GetBorrowerBranchLoans = (props) => {
  const classes = useStyles(props);
  const loans = useSelector((state) => state.loans.loans);
  const lState = useSelector((state) => state);
  const branchBooks = useSelector((state) => state.branchBooks.books);
  const allBooks = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  //const [loans, setLoans] = useState([]);
  const cardNo = 111;
  const branchId = 0;

  const [bookId2, setBookId] = useState(0);
  const [branchId2, setBranchId] = useState(props.branchId);
  const [cardNo2, setCardNo] = useState(props.cardNo);
  const [dateOut2, setDateOut] = useState();
  const [dueDate2, setDueDate] = useState();
  const [dateIn2, setDateIn] = useState();
  const [bookReturn, setBookReturn] = useState(false);

  const loading = useSelector((state) => state.loans.loading);

  const columns = [
    // { field: 'id', headerName: 'ID', width: 75 },
    // { field: 'cardNo', headerName: 'CardNo', width: 75 },
    //  { field: 'branchId', headerName: 'BranchId', width: 100 },
    // { field: 'bookId', headerName: 'BookId', width: 100 },
     { field: 'title', headerName: 'Book Title', width: 200 },
     { field: 'dateOut', headerName: 'DateOut', width: 110 },
     { field: 'dueDate', headerName: 'DueDate', width: 110 },
     { field: 'dateIn', headerName: 'DateIn', width: 110 },
   ];




 
  useEffect(() => {
    if(bookReturn){
      dispatch(loanActions.returnBook(bookId2, branchId2, cardNo2, dateOut2, dueDate2, dateIn2));
    }
        else{
          dispatch(bookActions.getBooks2());
          dispatch(branchBookCopiesActions.getBothByBranchId(branchId2));
         //dispatch(branchBookCopiesActions.getBooks());
      dispatch(loanActions.getLoansByCardNo(props.cardNo));
    }
  },[bookReturn]);

  if (!loans) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress className={classes.spinner}/>
      </div>
    );
  }



  function isReturning (loan){
    

    var cardNo = loan.cardNo;
    var branchId = loan.branchId;
    var bookId = loan.bookId;
    var dateOut = loan.dateOut;
    var dueDate = loan.dueDate;
    var dateIn = new Date();
    let sqlDO = new Date(dateOut).toISOString().slice(0, 19).replace('T', ' ');
    let sqlDI = new Date(dateIn).toISOString().slice(0, 19).replace('T', ' ');
    let sqlDD = new Date(dueDate).toISOString().slice(0, 19).replace('T', ' ');
    


    let DO2 = sqlDO.substring(0,10)+"T00:00:00.000Z";
    let DD2 = sqlDD.substring(0,10)+"T00:00:00.000Z";
    let DI2 = sqlDI.substring(0,10)+"T00:00:00.000Z";
 

    setBookId(bookId);
    setBranchId(branchId);
    setCardNo(cardNo);
    setDateOut(DO2);
    setDueDate(DD2);
    setDateIn(DI2);
    setBookReturn(true);
    //console.log("isReturning")
  
  }




// console.log("Loans");
// console.log(loans);
 var loans2;
 var loans3 = [];
if(loans[0]){


  ///Loan will sometimes return all loans so this needs to filter
  loans2= loans.filter(function(loan){
      return loan.branchId == props.branchId;
  } );
  loans2= loans2.filter(function(loan){
    return loan.cardNo == props.cardNo;
} );
if(branchBooks!== null && allBooks !== null)
loans2.forEach(function(item, index, array) {

  // console.log("Loan item");
  // console.log(item);
  var lFilter= allBooks.filter(function(book){
    return book.bookId == item.bookId;
} );
  var title = '';
  if(lFilter.length > 0)
   title = lFilter[0].title;

  loans3.push({title: title, cardNo: item.cardNo, branchId: item.branchId, bookId: item.bookId, dateOut: item.dateOut, dueDate: item.dueDate, dateIn: item.dateIn, id: item.id})
});

}
else{
    loans2 = loans;
}

if(!loans2[0]){
    return(
        <div>
             ----------------Loans---------------<br />
             No Loans from this branch
        </div>
    )
}






  return (
    <div>
    ----------------Loans from Branch <span className={classes.highlight}>{props.branch.name}</span>---------------
    <br />

    <EntityTable3
        rows={loans3}
        cols={columns}
        loading={loading}
        branch = {props.branch}
      /> <br/>

 
    ---------------------------------------
    <br />   
      
    </div>
  );
};

export default GetBorrowerBranchLoans;
