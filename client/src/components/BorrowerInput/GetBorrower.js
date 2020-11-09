/* React */
import React, { useEffect, useState, useCallback } from 'react';
import { CircularProgress } from '@material-ui/core';

import axios from 'axios';

/* Components */
import { borrowerApi } from '../../utils/api';
/* Styles */
import useStyles from './BorrowerInput.styles';

const GetBorrower = (props) => {
  const classes = useStyles(props);
  const [borrower, setBorrower] = useState([]);
  const cardNo = 111;
 // console.log(props.cardNo);
//   console.log("cardNo");
//   console.log(props);

  const loadBorrower = useCallback(() => {
    borrowerApi.borrower().getByCardNo(props.cardNo).then((response) => {
      setBorrower(response.data);
     // console.log("This is get borrower");
     // console.log(response.data);
    });
  }, []);

  useEffect(() => {
    loadBorrower();
  }, [loadBorrower]);

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
