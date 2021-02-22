import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  BorrowerHome,
  Preview,
} from '../components';

const UnauthRoutes = (props) => (
  <Switch>
    <Route exact path='/admin' component={Preview} />
    <Route exact path='/borrower' component={BorrowerHome} />
    <Route exact path='/Librarian' component={Preview} />
    <Route path='/' render={() => (
      <Home {...props} />
    )} />
  </Switch>
);

export default UnauthRoutes;
