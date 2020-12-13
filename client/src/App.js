import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { graphqlClient, queries } from './utils';
import { setSession } from './services/Session/actions';
import { Dashboard, Loading } from './components';

const query = queries.userSession;

const App = () => {
  const dispatch = useDispatch();
  const [initialised, setInitialised] = useState(false);

  const getSession = () => graphqlClient.query({ query })
    .then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInitialised(true);
    });

  useEffect(() => {
    getSession();
  }, []);

  return initialised
    ? <Dashboard />
    : <Loading duration={3000} timeoutMsg={'Network Error.'} />;
};

export default App;
