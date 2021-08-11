import { initialDevlieryFormValues } from '../components/delivery/delivery-form-values.initial';
import { initialPaymentFormValues } from '../components/payment/payment-form-values.initial';

import { CheckoutState } from './checkout-state.interface';

export const initialCheckoutState: CheckoutState = {
  deliveryForm: initialDevlieryFormValues,
  paymentForm: initialPaymentFormValues,
};
