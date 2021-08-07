import { Box, Button, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useTranslation } from 'react-i18next';

import { AddressForm } from '../address/address-form';

import { paymentFormSchema } from './payment-form.schema';
import { initialPaymentFormValues } from './payment-form-values.initial';

export const Payment: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Formik
      validationSchema={paymentFormSchema(t)}
      initialValues={initialPaymentFormValues}
      onSubmit={(value: any) => console.log(value)}
    >
      {({ errors, touched }) => (
        <Form>
          <Typography variant="h5" gutterBottom>
            {t('checkout.billingAddress')}
          </Typography>
          <AddressForm
            formName="billingAddress"
            errors={errors.billingAddress}
            touched={touched.billingAddress}
          />
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
