/* React */
import React from 'react';
/* Styles */
import useStyles from './Borrower.styles';


const Borrower = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      Borrowers.....
    </div>
  );
};

export default Borrower;
