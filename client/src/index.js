import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import App from './App';
import configureStore from './services/store';
import graphqlClient from './utils/graphqlClient';
import { history } from './navigation';
import { ThemeProvider } from './theme/ThemeContext';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <ApolloProvider client={graphqlClient}>
      <Router history={history}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  </Provider>
), document.getElementById('root'));
