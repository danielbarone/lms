/* React */
import React from 'react';
/* Styles */
import useStyles from './Librarian.styles';

const Librarian = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      Librarian...
    </div>
  );
};

export default Librarian;
