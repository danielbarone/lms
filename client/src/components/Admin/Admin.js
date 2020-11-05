/* React */
import React from 'react';
/* Styles */
import useStyles from './Admin.styles';

const Admin = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      Admin...
    </div>
  );
};

export default Admin;
