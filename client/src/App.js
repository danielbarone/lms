import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import gql from 'graphql-tag';
import { Dashboard } from './components';
import graphqlClient from './utils/graphqlClient';
import { setSession } from './services/Session/actions';
import useStyles from './App.styles';

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        contactId
        email
        id
        firstName
        lastName
      }
    }
  }
`;

const App = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInitialised(true);
    });
  }, []);

  if (!initialised) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress className={classes.spinner}/>
      </div>
    );
  }

  return (
    <Dashboard />
  );
};

export default App;
