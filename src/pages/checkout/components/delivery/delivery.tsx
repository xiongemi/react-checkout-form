import { Box, Button, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useTranslation } from 'react-i18next';

import { AddressForm } from '../address/address-form';

import { deliveryFormSchema } from './delivery-form.schema';
import { initialDevlieryFormValues } from './delivery-form-values.initial';

export const Delivery: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Formik
      validationSchema={deliveryFormSchema(t)}
      initialValues={initialDevlieryFormValues}
      onSubmit={(value: any) => console.log(value)}
    >
      {({ errors, touched }) => (
        <Form>
          <Typography variant="h5" gutterBottom>
            {t('checkout.shippingAddress')}
          </Typography>
          <AddressForm
            formName="shippingAddress"
            errors={errors.shippingAddress}
            touched={touched.shippingAddress}
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
