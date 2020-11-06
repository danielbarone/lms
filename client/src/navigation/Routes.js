import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Borrower,
  Home,
  Librarian,
  Preview,
  Admin,
} from '../components';

const Routes = () => (
  <Switch>
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/borrower" component={Borrower} />
    <Route exact path="/Librarian" component={Librarian} />
    <Route exact path="/preview" component={Preview} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
