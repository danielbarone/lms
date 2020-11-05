import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Borrower,
  Canceled,
  Checkout,
  Home,
  Librarian,
  Preview,
  Success,
  Admin,
} from '../components';

const Routes = () => (
  <Switch>
    <Route exact path="/canceled" component={Canceled} />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/borrower" component={Borrower} />
    <Route exact path="/Librarian" component={Librarian} />
    <Route exact path="/preview" component={Preview} />
    <Route exact path="/success" component={Success} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
