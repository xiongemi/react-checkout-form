import { object } from 'yup';

import { addressFormSchema } from '../address/address-form.schema';

export const deliveryFormSchema = object().shape({
  shippingAddress: addressFormSchema,
});
