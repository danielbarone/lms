/* React */
import React from 'react';
/* Styles */
import useStyles from './Borrower.styles';

import { BorrowerInput } from '..';



const BorrowerHome = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      Borrowers.....
      Please enter your borrower Id
      <BorrowerInput />
    </div>
  );
};

export default BorrowerHome;