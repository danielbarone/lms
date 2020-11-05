import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Admin,
  Home,
  Borrower,
  Librarian,
} from '../components';

const UnauthRoutes = () => (
  <Switch>
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/borrower" component={Borrower} />
    <Route exact path="/Librarian" component={Librarian} />
    <Route path="/" component={Home} />
  </Switch>
);

export default UnauthRoutes;
