/* React */
import React, { useEffect, useState, useCallback } from 'react';
import {Button, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loanActions } from '../../services/actions';


/* Components */
import { borrowerApi } from '../../utils/api';
/* Styles */
import useStyles from './BorrowerInput.styles';

const GetBorrowerBranchLoans = (props) => {
  const classes = useStyles(props);
  const loans = useSelector((state) => state.loans.loans);
  const lState = useSelector((state) => state);
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
    // if(bookReturn){
    //   setBookReturn(false)
    //   console.log("Book Returned")
    //   dispatch(loanActions.returnBook(bookId2, branchId2, cardNo2, dateOut2, dueDate2, dateIn2));
    // }
    // else{  
    //   console.log("nope");
    // }  

    dispatch(loanActions.getLoansByCardNo(props.cardNo));
  },[]);

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
    // console.log("Sql Format");
    // console.log(sqlDO)
    // console.log(sqlDD)

    setBookId(bookId);
    setBranchId(branchId);
    setCardNo(cardNo);
    setDateOut(sqlDO);
    setDueDate(sqlDD);
    setDateIn(sqlDI);
    setBookReturn(true);
    console.log("isReturning")
  
    // useEffect(() => {
    //   dispatch(loanActions.checkOutBook(bookId, props.branchId, props.cardNo, dateOut, dueDate));
    // }, []);  
  }




// console.log("Loans");
// console.log(loans);
 var loans2;
if(loans[0]){
    // console.log("Loans1");
    // console.log(loans);
    // console.log("branches");
    // console.log(props.branchId);
  loans2= loans.filter(function(loan){
      return loan.branchId == props.branchId;
  } );
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

  return (
    <div>
    ----------------Loans from Branch {props.branchId}---------------
    <br />
    {/* CardNo: {loans.cardNo}<br />
    Name: {borrower.name} */}
    <ol>
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
    <br />
    ---------------------------------------
    <br />   
      
    </div>
  );
};

export default GetBorrowerBranchLoans;
