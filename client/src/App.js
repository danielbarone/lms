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
        userType
      }
    }
  }
`;

const App = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [initialised, setInitialised] = useState(false);
  const [failedGetSession, setFailedGetSession] = useState(false);

  const getSession = () => graphqlClient.query({ query })
    .then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInitialised(true);
    });

  const sessionTimeout = () => {
    const timer = setTimeout(() => {
      setFailedGetSession(true);
    }, 3000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    getSession();
    sessionTimeout();
  }, []);

  if (!initialised) {
    return (
      <>
        {failedGetSession ? (
          <h1>Network error.</h1>
        ) : (
          <div className={classes.spinnerContainer}>
            <CircularProgress className={classes.spinner}/>
          </div>
        )}
      </>
    );
  }

  return (
    <Dashboard />
  );
};

export default App;
