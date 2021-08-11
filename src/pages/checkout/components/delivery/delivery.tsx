import { Box, Button, FormControl, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ClearIcon from '@material-ui/icons/Clear';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AppRoutePath } from '../../../../routes/app-route-path';
import { CheckoutRoutePath } from '../../routes/checkout-route-path';
import { AddressForm } from '../address/address-form';

import { ShippingMethod } from './components/shipping-method';
import { DeliveryFormValues } from './delivery-form-values.interface';
import { deliveryFormSchema } from './delivery-form.schema';
import {
  DeliveryFormProps,
  mapDispatchToProps,
  mapStateToProps,
} from './delivery.props';

const DeliveryFormControl = styled(FormControl)(({ theme }) => ({
  display: 'block',
  marginTop: theme.spacing(2),
}));

const Delivery: FunctionComponent<DeliveryFormProps> = ({
  deliveryForm,
  submitDeliveryForm,
  clearDeliveryForm,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const submitForm = (values: DeliveryFormValues) => {
    submitDeliveryForm(values);
    history.push(AppRoutePath.Checkout + CheckoutRoutePath.Payment);
  };

  return (
    <Formik
      enableReinitialize={true}
      validationSchema={deliveryFormSchema(t)}
      initialValues={deliveryForm}
      onSubmit={submitForm}
    >
      {({ errors, touched }) => (
        <Form>
          <DeliveryFormControl>
            <Button
              type="reset"
              variant="contained"
              endIcon={<ClearIcon />}
              size="large"
              onClick={clearDeliveryForm}
            >
              {t('checkout.clear')}
            </Button>
          </DeliveryFormControl>
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

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
