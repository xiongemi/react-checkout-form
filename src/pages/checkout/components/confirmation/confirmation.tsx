import { Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { CheckoutStepper } from '../checkout-stepper/checkout-stepper';

import { ConfirmationProps, mapStateToProps } from './confirmation.props';

const Confirmation: FunctionComponent<ConfirmationProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <CheckoutStepper />
      <Typography variant="h3" gutterBottom>
        {t('checkout.delivery')}
      </Typography>

      <Typography variant="h3" gutterBottom>
        {t('checkout.payment')}
      </Typography>
    </>
  );
};

export default connect(mapStateToProps)(Confirmation);
