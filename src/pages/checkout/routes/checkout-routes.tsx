import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';

import Confirmation from '../components/confirmation/confirmation';
import Delivery from '../components/delivery/delivery';
import Payment from '../components/payment/payment';

import { CheckoutRoutePath } from './checkout-route-path';

export default function CheckoutRoutes() {
  let { path } = useRouteMatch();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={path + CheckoutRoutePath.Delivery}>
          <Delivery />
        </Route>
        <Route path={path + CheckoutRoutePath.Payment}>
          <Payment />
        </Route>
        <Route path={path + CheckoutRoutePath.Confirmation}>
          <Confirmation />
        </Route>
        <Route exact path={path}>
          <Redirect to={path + CheckoutRoutePath.Delivery} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
