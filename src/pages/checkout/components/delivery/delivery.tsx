import { Box, Button, FormControl, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';

import { AppRoutePath } from '../../../../routes/app-route-path';
import { CheckoutRoutePath } from '../../routes/checkout-route-path';
import { AddressForm } from '../address/address-form';

import { deliveryFormSchema } from './delivery-form.schema';
import { initialDevlieryFormValues } from './delivery-form-values.initial';
import { ShippingMethod } from './components/shipping-method';

const DeliveryFormControl = styled(FormControl)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const Delivery: FunctionComponent = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const submitForm = () => {
    history.push(AppRoutePath.Checkout + CheckoutRoutePath.Payment);
  };

  return (
    <Formik
      validationSchema={deliveryFormSchema(t)}
      initialValues={initialDevlieryFormValues}
      onSubmit={submitForm}
    >
      {({ errors, touched }) => (
        <Form>
          <DeliveryFormControl>
            <Typography variant="h5" component="legend" gutterBottom>
              {t('checkout.shippingAddress')}
            </Typography>
            <AddressForm
              formName="shippingAddress"
              errors={errors.shippingAddress}
              touched={touched.shippingAddress}
            />
          </DeliveryFormControl>
          <DeliveryFormControl>
            <Typography variant="h5" component="legend" gutterBottom>
              {t('checkout.shippingMethod.title')}
            </Typography>
            <ShippingMethod />
          </DeliveryFormControl>
          <Box textAlign="right" mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<ArrowRightAltIcon />}
              size="large"
            >
              {t('checkout.continue')}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
