import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Admin,
  Home,
  BorrowerHome,
  Librarian,
} from '../components';

const UnauthRoutes = () => (
  <Switch>
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/borrower" component={BorrowerHome} />
    <Route exact path="/Librarian" component={Librarian} />
    <Route path="/" component={Home} />
  </Switch>
);

export default UnauthRoutes;
