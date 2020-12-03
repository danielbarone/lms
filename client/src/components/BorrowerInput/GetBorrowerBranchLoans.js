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
     { field: 'bookId', headerName: 'BookId', width: 100 },
     { field: 'title', headerName: 'Book Title', width: 200 },
     { field: 'dateOut', headerName: 'DateOut', width: 110 },
     { field: 'dueDate', headerName: 'DueDate', width: 110 },
     { field: 'dateIn', headerName: 'DateIn', width: 110 },
   ];


 // console.log(props.cardNo);
//   console.log("cardNo");
//   console.log(props);

  // const loadBorrower = useCallback(() => {
  //   borrowerApi.borrower().getLoansByCardNo(props.cardNo).then((response) => {
  //     setLoans(response.data);
  //   //  console.log("branch and card id");
  //   //  console.log(props.branchId);
  //   //  console.log(props.cardNo);

  //   });
  // }, []);

  // useEffect(() => {
  //   loadBorrower();
  // }, [loadBorrower]);

  ////This code brok my comp for a bit be carful with uncommenting
  useEffect(() => {
    if(bookReturn){
      //console.log("Returning book")
      //alert("Book returned");
      // return(
      //   <div>
      //     Book Returned
      //   </div>
      // )
      //console.log("BookId: "+bookId2+" branchId: "+branchId2+" cardNo: "+cardNo2);
      //console.log("DateIn: "+dateIn2);
      dispatch(loanActions.returnBook(bookId2, branchId2, cardNo2, dateOut2, dueDate2, dateIn2));
    }
    // if(bookReturn){
      //   setBookReturn(false)
      //   console.log("Book Returned")
      //   dispatch(loanActions.returnBook(bookId2, branchId2, cardNo2, dateOut2, dueDate2, dateIn2));
      // }
      // else{  
        //   console.log("nope");
        // }  
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
    
    // CardNo: {val.cardNo}<br />
    // BranchId: {val.branchId}<br />
    // BookId: {val.bookId}<br />
    // DateOut: {val.dateOut}<br />
    // DueDate: {val.dueDate}<br />
    // DateIn: {val.dateIn}<br />

    var cardNo = loan.cardNo;
    var branchId = loan.branchId;
    var bookId = loan.bookId;
    var dateOut = loan.dateOut;
    var dueDate = loan.dueDate;
    var dateIn = new Date();
    let sqlDO = new Date(dateOut).toISOString().slice(0, 19).replace('T', ' ');
    let sqlDI = new Date(dateIn).toISOString().slice(0, 19).replace('T', ' ');
    let sqlDD = new Date(dueDate).toISOString().slice(0, 19).replace('T', ' ');
    
    // console.log(props);
    // console.log(bookId+" "+props.branchId+" "+props.cardNo+" "+noOfCopies)
    // console.log("DateOut DueDate DateIn")
    // console.log(dateOut)
    // console.log(dueDate)

// let sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
// let output = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
// let d = sdf.parse(dateOut);
// let formattedTime = output.format(d);
// console.log("Format");
// console.log(new Date().toISOString());
// console.log(dateOut);

    // console.log("Sql Format");
    // console.log(sqlDO)
    // console.log(sqlDD)
    // console.log(sqlDI)

    let DO2 = sqlDO.substring(0,10)+"T00:00:00.000Z";
    let DD2 = sqlDD.substring(0,10)+"T00:00:00.000Z";
    let DI2 = sqlDI.substring(0,10)+"T00:00:00.000Z";
    // console.log("Added bit")
    // console.log(DO2);
    //   console.log(DD2);
    //     console.log(DI2);

    setBookId(bookId);
    setBranchId(branchId);
    setCardNo(cardNo);
    setDateOut(DO2);
    setDueDate(DD2);
    setDateIn(DI2);
    setBookReturn(true);
    //console.log("isReturning")
  
    // useEffect(() => {
    //   dispatch(loanActions.checkOutBook(bookId, props.branchId, props.cardNo, dateOut, dueDate));
    // }, []);  
  }




// console.log("Loans");
// console.log(loans);
 var loans2;
 var loans3 = [];
if(loans[0]){
    // console.log("Loans1");
    // console.log(loans);
    // console.log("branches");
    // console.log(props.branchId);

  ///Loan will sometimes return all loans so this needs to filter
  loans2= loans.filter(function(loan){
      return loan.branchId == props.branchId;
  } );
  loans2= loans2.filter(function(loan){
    return loan.cardNo == props.cardNo;
} );
if(branchBooks!== null && allBooks !== null)
loans2.forEach(function(item, index, array) {


  var lFilter= allBooks.filter(function(book){
    return book.bookId == item.bookId;
} );
//  console.log("AllBooks");
//   console.log(allBooks);
//   console.log("Item");
//   console.log(item);
  // console.log("Index: "+index);
  // console.log("IlFilter");
  // console.log(lFilter);
  var title = '';
  if(lFilter.length > 0)
   title = lFilter[0].title;

  loans3.push({title: title, cardNo: item.cardNo, branchId: item.branchId, bookId: item.bookId, dateOut: item.dateOut, dueDate: item.dueDate, dateIn: item.dateIn, id: item.id})
});
  //console.log(loans2);
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



// console.log("BranchBooks");
// console.log(branchBooks);
// console.log("State");
// console.log(lState);
// console.log("Loans3");
// console.log(loans3);


  return (
    <div>
    ----------------Loans from Branch {props.branchId}---------------
    <br />
    {/* CardNo: {loans.cardNo}<br />
    Name: {borrower.name} */}
    <EntityTable3
        rows={loans3}
        cols={columns}
        loading={loading}
      /> <br/>

    {/* <ol>
    {loans2.map(
        (val, index) => (
            <div key={`loan${index}-loanId${val.dateOut}`}>
             <br />
             <li key={val.dateOut}>
             <Button onClick={() => {isReturning(val)}}>
             Select
              </Button><br/>
              CardNo: {val.cardNo}<br />
              BranchId: {val.branchId}<br />
              BookId: {val.bookId}<br />
              DateOut: {val.dateOut}<br />
              DueDate: {val.dueDate}<br />
              DateIn: {val.dateIn}<br />
             </li>
            </div>
        ),
      )}
      </ol>
    <br /> */}
    ---------------------------------------
    <br />   
      
    </div>
  );
};

export default GetBorrowerBranchLoans;
