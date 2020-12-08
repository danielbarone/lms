import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  BorrowerHome,
  Preview,
} from '../components';

const BorrowerRoutes = (props) => (
  <Switch>
    <Route exact path="/admin" component={Preview} />
    <Route
      exact
      path="/borrower"
      render={() => (
        <BorrowerHome {...props} />
      )}
    />
    <Route exact path="/librarian" component={Preview} />
    <Route path="/" component={Home} />
  </Switch>
);

export default BorrowerRoutes;
