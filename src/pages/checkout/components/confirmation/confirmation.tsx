import { Typography, Divider } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { AddressFormValues } from '../address/address-form-values.interface';
import { CheckoutStepper } from '../checkout-stepper/checkout-stepper';

import { ConfirmationProps, mapStateToProps } from './confirmation.props';

const AddressDisplay: FunctionComponent<{ address: AddressFormValues }> = ({
  address,
}) => {
  return (
    <>
      {address.firstName} {address.lastName} <br />
      {address.addressLine1} <br />
      {address.addressLine2 && (
        <>
          {address.addressLine2} <br />
        </>
      )}
      {address.city}, {address.provinceState}, {address.country}{' '}
      {address.zipPostalCode}
    </>
  );
};

const Confirmation: FunctionComponent<ConfirmationProps> = ({
  deliveryForm,
  paymentForm,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <CheckoutStepper />
      <Typography variant="h3" gutterBottom>
        {t('checkout.delivery')}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {t('checkout.shippingAddress')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <AddressDisplay address={deliveryForm.shippingAddress} />
      </Typography>
      <Typography variant="h6" gutterBottom>
        {t('checkout.shippingMethod.title')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t('checkout.shippingMethod.' + deliveryForm.shippingMethod)}
      </Typography>
      <Divider />

      <Typography variant="h3" gutterBottom>
        {t('checkout.payment')}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {t('checkout.billingAddress')}
      </Typography>
      {paymentForm.sameAsShipping && t('checkout.sameAsShipping')}
      {!paymentForm.sameAsShipping && (
        <Typography variant="body1" gutterBottom>
          <AddressDisplay address={paymentForm.billingAddress} />
        </Typography>
      )}
    </>
  );
};

export default connect(mapStateToProps)(Confirmation);
