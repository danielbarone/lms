/* React */
import React from 'react';
/* Components */
import { BranchList } from '..';
/* Styles */
import useStyles from './Admin.styles';

const Admin = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <h1>Admin</h1>
      <h2>All Branches</h2>
      <BranchList />
    </div>
  );
};

export default Admin;
