import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Admin,
  Home,
  BorrowerHome,
  Librarian,
} from '../components';

const AdminRoutes = (props) => (
  <Switch>
    <Route
      exact
      path="/admin"
      render={() => (
        <Admin {...props} />
      )}
    />
    <Route
      exact
      path="/borrower"
      render={() => (
        <BorrowerHome {...props} />
      )}
    />
    <Route
      exact
      path="/librarian"
      render={() => (
        <Librarian {...props} />
      )}
    />
    <Route path="/" component={Home} />
  </Switch>
);

export default AdminRoutes;
