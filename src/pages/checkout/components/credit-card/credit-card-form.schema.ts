import { TFunction } from 'i18next';
import { string, object } from 'yup';

export const creditCardSchema = (t: TFunction) =>
  object().shape({
    cardNumber: string()
      .required(
        t('errorMessages.required', { fieldName: t('creditCard.cardNumber') })
      )
      .matches(
        /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/,
        t('errorMessages.invalidFormat')
      ),
    expiryDate: string()
      .required(
        t('errorMessages.required', { fieldName: t('creditCard.expiryDate') })
      ) // regex from https://stackoverflow.com/questions/7992477/regular-expression-to-describe-credit-card-expiry-valid-thru-date
      .matches(/(0[1-9]|1[0-2])\/[0-9]{2}/, t('errorMessages.invalidFormat')),
    securityCode: string()
      .required(
        t('errorMessages.required', {
          fieldName: t('creditCard.securityCode'),
        })
      )
      .matches(/[0-9]{3}/, t('errorMessages.invalidFormat')),
  });
