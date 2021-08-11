import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../store/root-state.interface';
import { DeliveryFormValues } from '../components/delivery/delivery-form-values.interface';
import { PaymentFormValues } from '../components/payment/payment-form-values.interface';

import { CheckoutState } from './checkout-state.interface';

const getCheckoutState = (state: RootState): CheckoutState => state.checkout;

const getDeliveryForm = createSelector(
  getCheckoutState,
  (checkoutState: CheckoutState): DeliveryFormValues =>
    checkoutState?.deliveryForm
);

const getPaymentForm = createSelector(
  getCheckoutState,
  (checkoutState: CheckoutState): PaymentFormValues =>
    checkoutState?.paymentForm
);

export const checkoutSelectors = {
  getCheckoutState,
  getDeliveryForm,
  getPaymentForm,
};
