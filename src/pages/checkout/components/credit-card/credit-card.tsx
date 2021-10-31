import { Grid, TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import React, { ChangeEvent, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';

import { CreditCardFormValues } from './credit-card-form-values.interface';

export interface CreditCardProps {
  formName?: string;
  errors?: FormikErrors<CreditCardFormValues>;
  touched?: FormikTouched<CreditCardFormValues>;
  values: CreditCardFormValues;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CreditCard: FunctionComponent<CreditCardProps> = ({
  formName = 'creditCard',
  errors,
  touched,
  values,
  handleChange,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <InputMask
            mask="9999-9999-9999-9999"
            maskPlaceholder="####-####-####-####"
            name={`${formName}.cardNumber`}
            value={values.cardNumber}
            onChange={handleChange}
          >
            <TextField
              label={t('creditCard.cardNumber')}
              variant="outlined"
              error={touched?.cardNumber && !!errors?.cardNumber}
              helperText={touched?.cardNumber && errors?.cardNumber}
              fullWidth
            />
          </InputMask>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputMask
            mask="99/9999"
            maskPlaceholder="mm/yyyy"
            name={`${formName}.expiryDate`}
            value={values.expiryDate}
            onChange={handleChange}
          >
            <TextField
              label={t('creditCard.expiryDate')}
              variant="outlined"
              error={touched?.expiryDate && !!errors?.expiryDate}
              helperText={touched?.expiryDate && errors?.expiryDate}
              fullWidth
            />
          </InputMask>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputMask
            mask="999"
            name={`${formName}.securityCode`}
            value={values.securityCode}
            onChange={handleChange}
          >
            <TextField
              label={t('creditCard.securityCode')}
              variant="outlined"
              error={touched?.securityCode && !!errors?.securityCode}
              helperText={touched?.securityCode && errors?.securityCode}
              fullWidth
            />
          </InputMask>
        </Grid>
      </Grid>
    </>
  );
};
