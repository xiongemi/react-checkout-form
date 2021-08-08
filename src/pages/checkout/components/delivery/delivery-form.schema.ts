import { TFunction } from 'i18next';
import { mixed, object } from 'yup';

import { addressFormSchema } from '../address/address-form.schema';

import { ShippingMethod } from './components/shipping-method.enum';

export const deliveryFormSchema = (t: TFunction) =>
  object().shape({
    shippingAddress: addressFormSchema(t),
    shippingMethod: mixed<ShippingMethod>().oneOf(
      Object.values(ShippingMethod) as ShippingMethod[]
    ),
  });
