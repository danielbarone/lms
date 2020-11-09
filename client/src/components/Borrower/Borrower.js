/* React */
import React from 'react';
/* Styles */
import useStyles from './Borrower.styles';

import { BorrowerInput } from '..';

//console.log("Borrower test");
// const axios = require('axios');
// axios.get("http://localhost:8080/getAllBranches").then(resp => {
//   console.log("Test2:");
//   console.log(resp);
// });

const Borrower = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      Borrowers.....
      Please enter your borrower Id
      <BorrowerInput />
    </div>
  );
};

export default Borrower;
