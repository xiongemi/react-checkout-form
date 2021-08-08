import { Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { CheckoutRoutePath } from '../../routes/checkout-route-path';

export const CheckoutStepper: FunctionComponent = () => {
  const { t } = useTranslation();
  let { pathname } = useLocation();

  let activeStep = 0;
  if (pathname.includes(CheckoutRoutePath.Delivery)) {
    activeStep = 0;
  } else if (pathname.includes(CheckoutRoutePath.Payment)) {
    activeStep = 1;
  } else {
    activeStep = 2;
  }

  return (
    <Stepper alternativeLabel activeStep={activeStep}>
      <Step key={CheckoutRoutePath.Delivery}>
        <StepLabel>{t('checkout.delivery')}</StepLabel>
      </Step>
      <Step key={CheckoutRoutePath.Payment}>
        <StepLabel>{t('checkout.payment')}</StepLabel>
      </Step>
      <Step key={CheckoutRoutePath.Confirmation}>
        <StepLabel>{t('checkout.confirmation')}</StepLabel>
      </Step>
    </Stepper>
  );
};
