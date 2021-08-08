import { AddressFormValues } from '../address/address-form-values.interface';

import { ShippingMethod } from './components/shipping-method.enum';

export interface DeliveryFormValues {
  shippingAddress: AddressFormValues;
  shippingMethod?: ShippingMethod;
}
