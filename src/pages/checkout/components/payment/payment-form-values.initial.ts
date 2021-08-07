import { initialAddressFormValues } from '../address/address-form-values.initial';

import { PaymentFormValues } from './payment-form-values.interface';

export const initialPaymentFormValues: PaymentFormValues = {
  billingAddress: initialAddressFormValues,
};
