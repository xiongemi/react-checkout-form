import { initialAddressFormValues } from '../address/address-form-values.initial';

import { ShippingMethod } from './components/shipping-method.enum';
import { DeliveryFormValues } from './delivery-form-values.interface';

export const initialDevlieryFormValues: DeliveryFormValues = {
  shippingAddress: initialAddressFormValues,
  shippingMethod: ShippingMethod.free,
};
