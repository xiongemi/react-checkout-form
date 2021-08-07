import { TFunction } from 'i18next';
import { object } from 'yup';

import { addressFormSchema } from '../address/address-form.schema';

export const paymentFormSchema = (t: TFunction) =>
  object().shape({
    billingAddress: addressFormSchema(t),
  });
