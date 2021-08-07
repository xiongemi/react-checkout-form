import { TFunction } from 'i18next';
import { object } from 'yup';

import { addressFormSchema } from '../address/address-form.schema';

export const deliveryFormSchema = (t: TFunction) =>
  object().shape({
    shippingAddress: addressFormSchema(t),
  });
