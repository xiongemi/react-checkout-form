import { AddressFormValues } from '../address/address-form-values.interface';
import { CreditCardFormValues } from '../credit-card/credit-card-form-values.interface';

export interface PaymentFormValues {
  sameAsShipping: boolean;
  billingAddress: AddressFormValues;
  creditCard: CreditCardFormValues;
}
