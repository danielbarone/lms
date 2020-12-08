/* React */
import React, { useEffect, useState, useCallback } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { borrower2Actions as borrowerActions } from '../../services/actions';


/* Components */
import { borrowerApi } from '../../utils/api';
/* Styles */
import useStyles from './BorrowerInput.styles';

const GetBorrower = (props) => {

  const theState = useSelector((state) => state);
 const borrower = useSelector((state) => state.borrower2.borrowers);
// console.log("The State");
// console.log(theState);
 const dispatch = useDispatch();
 const classes = useStyles(props);
  //const [borrower, setBorrower] = useState([]);
  const cardNo = 111;
 // console.log(props.cardNo);
//   console.log("cardNo");
//   console.log(props);

//   const loadBorrower = useCallback(() => {
//     borrowerApi.borrower().getByCardNo(props.cardNo).then((response) => {
//       setBorrower(response.data);
//      // console.log("This is get borrower");
//      // console.log(response.data);
//     });
//   }, []);

//   useEffect(() => {
//     loadBorrower();
//   }, [loadBorrower]);

useEffect(() => {
  dispatch(borrowerActions.getBorrowerByCardNo(props.cardNo));
}, []);
// const borrower2 = useSelector((state) => state.borrower.borrowers);


  if (!borrower) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress className={classes.spinner}/>
      </div>
    );
  }






// console.log(
//     axios.post("http://localhost:8090/getBorrowerByCardNo",{ params: { "cardNo": 111 } })
// )



  return (
    <div 
   // style={{ backgroundColor: 'green' }}
   className={classes.borrowerCardBackground}
    >

    <div className={classes.borrowerCardText}>
    
    <span className={classes.borrowerCardLines}> Borrower Card </span>
    <br />
        CardNo: <span className={classes.borrowerCardInfo1}> {borrower.cardNo}</span> <br />
        Name: <span className={classes.borrowerCardInfo1}> {borrower.name} </span>
    <br />
    ---------------------------------------
    <br />   
    </div>
    </div>
  );
};

export default GetBorrower;
