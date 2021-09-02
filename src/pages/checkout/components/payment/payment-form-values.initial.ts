import { initialAddressFormValues } from '../address/address-form-values.initial';
import { initialCreditCardValues } from '../credit-card/credit-card-form-values.initial';

import { PaymentFormValues } from './payment-form-values.interface';

export const initialPaymentFormValues: PaymentFormValues = {
  sameAsShipping: false,
  billingAddress: initialAddressFormValues,
  creditCard: initialCreditCardValues,
};
