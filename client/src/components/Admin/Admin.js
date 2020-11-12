/* React */
import React from 'react';
/* Styles */
import { Typography } from '@material-ui/core';
import useStyles from './Admin.styles';
/* Components */
import Book from '../Book/Book';
import Branch from '../Branch/Branch';
import Genre from '../Genre/Genre';
import { TabbedMenu } from '..';

const adminTabs = [
  { id: 1, name: 'Books', content: <Book /> },
  { id: 2, name: 'Borrowers', content: 'Borrowers...' },
  { id: 3, name: 'Genres', content: <Genre /> },
  { id: 4, name: 'Library Branches', content: <Branch /> },
  { id: 5, name: 'Loans', content: 'Loans...' },
  { id: 6, name: 'Publishers', content: 'Publishers...' },
];

const Admin = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography
        variant='h5'
        className={classes.dashboardH1}
      >
        Administrator Dashboard
      </Typography>
      <TabbedMenu data={adminTabs} />
    </div>
  );
};

export default Admin;
