import { TFunction } from 'i18next';
import { boolean, object } from 'yup';

import { addressFormSchema } from '../address/address-form.schema';

export const paymentFormSchema = (t: TFunction) =>
  object().shape({
    sameAsShipping: boolean(),
    billingAddress: object().when('sameAsShipping', {
      is: (sameAsShipping: boolean) => !sameAsShipping,
      then: addressFormSchema(t),
    }),
  });
