import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  BorrowerHome,
  Librarian,
  Preview,
} from '../components';

const LibrarianRoutes = () => (
  <Switch>
    <Route exact path="/admin" component={Preview} />
    <Route exact path="/borrower" component={BorrowerHome} />
    <Route exact path="/Librarian" component={Librarian} />
    <Route path="/" component={Librarian} />
  </Switch>
);

export default LibrarianRoutes;
