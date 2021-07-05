import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Checkout } from '../pages/checkout/checkout';

import { AppRoutePath } from './app-route-path';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutePath.Checkout}>
          <Checkout />
        </Route>
        <Route exact path="/">
          <Redirect to={AppRoutePath.Checkout} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
