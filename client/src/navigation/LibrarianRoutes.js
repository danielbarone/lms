import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  BorrowerHome,
  Home,
  Librarian,
  Preview,
} from '../components';

const LibrarianRoutes = (props) => (
  <Switch>
    <Route exact path="/admin" component={Preview} />
    <Route
      exact
      path="/borrower"
      render={() => (
        <BorrowerHome {...props} />
      )}
    />
    <Route
      exact
      path="/Librarian"
      render={() => (
        <Librarian {...props} />
      )}
    />
    <Route path="/" component={Home} />
  </Switch>
);

export default LibrarianRoutes;
