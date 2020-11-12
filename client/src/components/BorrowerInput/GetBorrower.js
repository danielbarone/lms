/* React */
import React, { useEffect, useState, useCallback } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { borrowerActions } from '../../services/actions';


/* Components */
import { borrowerApi } from '../../utils/api';
/* Styles */
import useStyles from './BorrowerInput.styles';

const GetBorrower = (props) => {

 const borrower = useSelector((state) => state.borrower.borrowers);

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
// console.log("Borrower");
// console.log(borrower);
// console.log(borrower2);
// console.log(props.cardNo);

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
    <div>
    ----------------Borrower---------------
    <br />
        CardNo: {borrower.cardNo}<br />
        Name: {borrower.name}
    <br />
    ---------------------------------------
    <br />   
      
    </div>
  );
};

export default GetBorrower;
