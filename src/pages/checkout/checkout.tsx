import { Box, Paper } from '@material-ui/core';
import React from 'react';
import { FunctionComponent } from 'react';

import { CheckoutStepper } from './components/checkout-stepper/checkout-stepper';
import CheckoutRoutes from './routes/checkout-routes';

export const Checkout: FunctionComponent = () => {
  return (
    <>
      <CheckoutStepper />
      <Paper>
        <Box p={3}>
          <CheckoutRoutes />
        </Box>
      </Paper>
    </>
  );
};
