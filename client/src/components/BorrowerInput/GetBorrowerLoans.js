/* React */
import React, { useEffect, useState, useCallback } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loanActions } from '../../services/actions';
import { EntityTable } from '..';

/* Styles */
import useStyles from './BorrowerInput.styles';


const columns = [
   // { field: 'id', headerName: 'ID', width: 75 },
   // { field: 'cardNo', headerName: 'CardNo', width: 75 },
    { field: 'branchId', headerName: 'BranchId', width: 100 },
    { field: 'bookId', headerName: 'BookId', width: 100 },
    { field: 'dateOut', headerName: 'DateOut', width: 110 },
    { field: 'dueDate', headerName: 'DueDate', width: 110 },
    { field: 'dateIn', headerName: 'DateIn', width: 110 },
  ];


//   CardNo: {val.cardNo}<br />
//   BranchId: {val.branchId}<br />
//   BookId: {val.bookId}<br />
//   DateOut: {val.dateOut}<br />
//   DueDate: {val.dueDate}<br />
//   DateIn: {val.dateIn}<br />



const GetBorrowerLoans = (props) => {

    const loans = useSelector((state) => state.loans.loans);
    const loading = useSelector((state) => state.loans.loading);
   const lState = useSelector((state) => state);
   
  const classes = useStyles(props);
  //const [loans, setLoans] = useState([]);
  
  const cardNo = 111;
  const dispatch = useDispatch();


 
 // console.log(props.cardNo);
//   console.log("cardNo");
//   console.log(props);

//   const loadBorrower = useCallback(() => {
//     borrowerApi.borrower().getLoansByCardNo(props.cardNo).then((response) => {
//       setLoans(response.data);
//      // console.log("This is get borrower");
//      // console.log(response.data);
//     });
//   }, []);

//   useEffect(() => {
//     loadBorrower();
//   }, [loadBorrower]);

useEffect(() => {
    dispatch(loanActions.getLoansByCardNo(props.cardNo));
  }, []);

  if (!loans) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress className={classes.spinner}/>
      </div>
    );
  }








// console.log("Loans");
// console.log(loans);
// console.log("branches");
// if(!loans[0])
// console.log(loans)

  return (
    <div>
    
    ----------------Loans---------------
    <br />
    {/* <EntityTable
        rows={loans}
        cols={columns}
        loading={loading}
      /> <br/> */}
    {/* CardNo: {loans.cardNo}<br />
    Name: {borrower.name} */}
    <ol>
    {loans.map(
        (val, index) => (
            <div key={`loan${index}-loanId${val.dateOut}`}>
             <br />
             <li key={val.dateOut}>
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

export default GetBorrowerLoans;
