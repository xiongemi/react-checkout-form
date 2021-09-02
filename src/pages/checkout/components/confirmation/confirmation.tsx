import { Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { ConfirmationProps, mapStateToProps } from './confirmation.props';

const Confirmation: FunctionComponent<ConfirmationProps> = ({
  deliveryForm,
  paymentForm,
}: ConfirmationProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h2" gutterBottom>
        {t('checkout.delivery')}
      </Typography>

      <Typography variant="h2" gutterBottom>
        {t('checkout.payment')}
      </Typography>
    </>
  );
};

export default connect(mapStateToProps, null)(Confirmation);
