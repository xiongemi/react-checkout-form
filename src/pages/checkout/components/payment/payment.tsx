import { Box, Button, FormControl, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ClearIcon from '@material-ui/icons/Clear';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AppRoutePath } from '../../../../routes/app-route-path';
import { CheckoutRoutePath } from '../../routes/checkout-route-path';
import { AddressForm } from '../address/address-form';
import { CheckoutStepper } from '../checkout-stepper/checkout-stepper';
import { CreditCard } from '../credit-card/credit-card';

import { PaymentFormValues } from './payment-form-values.interface';
import { paymentFormSchema } from './payment-form.schema';
import {
  mapDispatchToProps,
  mapStateToProps,
  PaymentFormProps,
} from './payment.props';

const PaymentFormControl = styled(FormControl)(({ theme }) => ({
  display: 'block',
  marginTop: theme.spacing(2),
}));

export const Payment: FunctionComponent<PaymentFormProps> = ({
  paymentForm,
  submitPaymentForm,
  clearPaymentForm,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const goBack = () => {
    history.push(AppRoutePath.Checkout + CheckoutRoutePath.Delivery);
  };
  const submitForm = (values: PaymentFormValues) => {
    submitPaymentForm(values);
    history.push(AppRoutePath.Checkout + CheckoutRoutePath.Confirmation);
  };

  return (
    <>
      <CheckoutStepper />
      <Formik
        validationSchema={paymentFormSchema(t)}
        initialValues={paymentForm}
        onSubmit={submitForm}
      >
        {({ errors, touched, values, handleChange, setFieldTouched }) => (
          <Form>
            <PaymentFormControl>
              <Button
                type="reset"
                variant="contained"
                endIcon={<ClearIcon />}
                size="large"
                onClick={clearPaymentForm}
              >
                {t('checkout.clear')}
              </Button>
            </PaymentFormControl>
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
            <PaymentFormControl>
              <Typography variant="h5" component="legend" gutterBottom>
                {t('checkout.creditCard')}
              </Typography>
              <CreditCard
                formName="creditCard"
                errors={errors.creditCard}
                touched={touched.creditCard}
                values={values.creditCard}
                handleChange={handleChange}
              />
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
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
