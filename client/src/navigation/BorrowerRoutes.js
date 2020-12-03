import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  BorrowerHome,
  Preview,
} from '../components';

const BorrowerRoutes = () => (
  <Switch>
    <Route exact path="/admin" component={Preview} />
    <Route exact path="/borrower" component={BorrowerHome} />
    <Route exact path="/Librarian" component={Preview} />
    <Route path="/" component={BorrowerHome} />
  </Switch>
);

export default BorrowerRoutes;
