import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import { Checkout } from '../pages/checkout/checkout';

import { AppRoutePath } from './app-route-path';

export default function AppRoutes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
