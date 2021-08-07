import { TFunction } from 'i18next';
import { object, string } from 'yup';

export const addressFormSchema = (t: TFunction) => {
  return object().shape({
    firstName: string()
      .required(
        t('errorMessages.required', { fieldName: t('address.firstName') })
      )
      .max(30, t('errorMessages.tooLong', { max: 30 })),
    lastName: string()
      .required(
        t('errorMessages.required', { fieldName: t('address.lastName') })
      )
      .max(30, t('errorMessages.tooLong', { max: 30 })),
    addressLine1: string()
      .required(
        t('errorMessages.required', { fieldName: t('address.addressLine1') })
      )
      .max(200, t('errorMessages.tooLong', { max: 200 })),
    addressLine2: string().notRequired(),
    city: string()
      .required(
        t('errorMessages.required', { fieldName: t('address.addressLine2') })
      )
      .max(30, t('errorMessages.tooLong', { max: 30 })),
    provinceState: string()
      .required(
        t('errorMessages.required', { fieldName: t('address.provinceState') })
      )
      .max(30, t('errorMessages.tooLong', { max: 30 })),
    country: string()
      .required(
        t('errorMessages.required', { fieldName: t('address.country') })
      )
      .max(30, t('errorMessages.tooLong', { max: 30 })),
    zipPostalCode: string()
      .required(
        t('errorMessages.required', { fieldName: t('address.zipPostalCode') })
      )
      .min(5, t('errorMessages.tooShort', { min: 5 }))
      .max(7, t('errorMessages.tooLong', { max: 7 })),
  });
};
