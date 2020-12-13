import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import { graphqlClient, queries } from './utils';
import { setSession } from './services/Session/actions';
import { Dashboard } from './components';
import useStyles from './App.styles';

const query = queries.userSession;

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
