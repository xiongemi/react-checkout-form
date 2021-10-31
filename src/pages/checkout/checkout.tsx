import { Box, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

import CheckoutRoutes from './routes/checkout-routes';

export const Checkout: FunctionComponent = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('checkout route has been changed');
  }, [location.pathname]);

  return (
    <Paper>
      <Box p={3}>
        <CheckoutRoutes />
      </Box>
    </Paper>
  );
};
