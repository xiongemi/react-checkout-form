import { AddressFormValues } from '../address/address-form-values.interface';

export interface PaymentFormValues {
  sameAsShipping: boolean;
  billingAddress: AddressFormValues;
}
