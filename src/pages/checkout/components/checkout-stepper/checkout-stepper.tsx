import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouteMatch } from 'react-router-dom';

import { CheckoutRoutePath } from '../../routes/checkout-route-path';

export const CheckoutStepper: FunctionComponent = () => {
  const { t } = useTranslation();
  let { path } = useRouteMatch();
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    if (path.includes(CheckoutRoutePath.Delivery)) {
      setActiveStep(0);
    } else if (path.includes(CheckoutRoutePath.Payment)) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  }, [path]);

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
