import { Box, Button, FormControl, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useTranslation } from 'react-i18next';
import { styled } from '@material-ui/core/styles';
import { CheckboxWithLabel } from 'formik-material-ui';
import { useHistory } from 'react-router-dom';

import { AppRoutePath } from '../../../../routes/app-route-path';
import { CheckoutRoutePath } from '../../routes/checkout-route-path';
import { AddressForm } from '../address/address-form';

import { paymentFormSchema } from './payment-form.schema';
import { initialPaymentFormValues } from './payment-form-values.initial';

const PaymentFormControl = styled(FormControl)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const Payment: FunctionComponent = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const goBack = () => {
    history.push(AppRoutePath.Checkout + CheckoutRoutePath.Delivery);
  };

  return (
    <Formik
      validationSchema={paymentFormSchema(t)}
      initialValues={initialPaymentFormValues}
      onSubmit={(value: any) => console.log(value)}
    >
      {({ errors, touched, values }) => (
        <Form>
          <PaymentFormControl>
            <Typography variant="h5" component="legend" gutterBottom>
              {t('checkout.billingAddress')}
            </Typography>
            <Field
              component={CheckboxWithLabel}
              type="checkbox"
              name="sameAsShipping"
              Label={{ label: t('checkout.sameAsShipping') }}
            />
            {!values.sameAsShipping && (
              <AddressForm
                formName="billingAddress"
                errors={errors.billingAddress}
                touched={touched.billingAddress}
              />
            )}
          </PaymentFormControl>
          <Box
            textAlign="right"
            display="flex"
            justifyContent="space-between"
            mt={2}
          >
            <Button
              type="button"
              variant="contained"
              color="secondary"
              endIcon={<ArrowBackIcon />}
              size="large"
              onClick={goBack}
            >
              {t('checkout.previous')}
            </Button>
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
