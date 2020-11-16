/* React */
import React, { useEffect, useState, useCallback } from 'react';
import {Button, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loanActions } from '../../services/actions';
import { borrowerActions } from '../../services/actions';
// import java.util.Calendar;
// import java.sql.Date;



/* Components */
import { borrowerApi } from '../../utils/api';
/* Styles */
import useStyles from './BorrowerInput.styles';









const GetBranchCopies = (props) => {

///Will add redux after merge 
 const borrower = useSelector((state) => state.borrower.borrower);
  const classes = useStyles(props);
  const [branchCopies, setBranchCopies] = useState([]);
  const [branchBooks, setBranchBooks] = useState([]);
  const [bookId, setBookId] = useState(0);
  const [branchId, setBranchId] = useState(props.branchId);
  const [cardNo, setCardNo] = useState(props.cardNo);
  const [dateOut2, setDateOut] = useState();
  const [dueDate2, setDueDate] = useState();
  const [bookCheckedOut, setBookCheckedOut] = useState(false);



  //const cardNo = 111;
 // console.log(props.cardNo);
//   console.log("cardNo");
//   console.log(props);

const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(borrowerActions.getBorrower());
// }, []);

  const loadBranchCopies = useCallback(() => {
    borrowerApi.borrower().getBookCopiesByBranchId(props.branchId).then((response) => {
        setBranchCopies(response.data);
   
    });
    // console.log("branchId");
    // console.log(props.branchId);
    borrowerApi.borrower().getBranchBooks(props.branchId).then((response) => {
        setBranchBooks(response.data);
    });
  }, []);

  // useEffect(() => {
  //   loadBranchCopies();
  //   if((bookId==0)){
  //     console.log("It's time")
  //     console.log("bookId: "+bookId)
  //   }
  //   else{
  //     console.log("No book id")
  //   }
  // }, [loadBranchCopies]);
  useEffect(() => {
    if(bookCheckedOut){
      //setBookCheckedOut(false);
      console.log("You checked out a book")
      dispatch(loanActions.checkOutBook(bookId, branchId, cardNo, dateOut2, dueDate2));
    }
    // else{
    //   console.log("No book id")
    // }
    loadBranchCopies();
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
    // console.log("handler");
    // console.log(props);
    // console.log(bookId+" "+props.branchId+" "+props.cardNo+" "+noOfCopies)
    // console.log("DateOut DueDate DateIn")
    // console.log(dateOut)
    // console.log(dueDate)
    // console.log("Sql Format");
    // console.log(sqlDO)
    // console.log(sqlDD)

    setBookId(bookId);
    setBranchId(props.branchId);
    setCardNo(props.cardNo);
    setDateOut(dateOut);
    setDueDate(dueDate);
    setBookCheckedOut(true);
  
    // useEffect(() => {
    //   dispatch(loanActions.checkOutBook(bookId, props.branchId, props.cardNo, dateOut, dueDate));
    // }, []);  
  }





//   console.log("branchCopies");
//   console.log(branchCopies);
  
//   console.log(branchCopies[1]);
//  console.log("branchBooks");
//  console.log(branchBooks);

if(!branchCopies[0]){
    return(
    <div>
    ----------------Empty---------------
    <br />
    </div>
    )
}

  return (
    <div>
    ----------------Available Books For Branch {props.branchId}---------------
    <br />
    <ol>
    {/* {branchCopies.map(
        (val, index) => (
            <div key={`branchCopies${index}-branchCopiesId${val.dateOut}`}>
             <br />
             <li key={val.id.bookId}>
              BookId: {val.id.bookId}<br />
              Copies: {val.numOfCopies}<br />
             </li>
            </div>
        ),
      )} */}
      {branchBooks.map(
        (val, index) => (
            <div key={val.bookId}>
             <br />
             <li key={val.bookId}>
              {/* BookId: {val.bookId}<br /> */}
              <Button onClick={() => { isCheckingOut(props, val.bookId, branchCopies[index].numOfCopies )}}>
               {val.title}<br />
              Copies: {branchCopies[index].numOfCopies}<br/>
              </Button>
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

export default GetBranchCopies;
