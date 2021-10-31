import { Grid } from '@mui/material';
import { Field, FormikErrors, FormikTouched } from 'formik';
import { TextField } from 'formik-mui';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { AddressFormValues } from './address-form-values.interface';

export interface AddressFormProps {
  formName: string;
  errors?: FormikErrors<AddressFormValues>;
  touched?: FormikTouched<AddressFormValues>;
}

export const AddressForm: FunctionComponent<AddressFormProps> = ({
  formName = 'address',
  errors,
  touched,
}) => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label={t('address.firstName')}
          name={`${formName}.firstName`}
          variant="outlined"
          error={touched?.firstName && !!errors?.firstName}
          helperText={touched?.firstName && errors?.firstName}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label={t('address.lastName')}
          name={`${formName}.lastName`}
          variant="outlined"
          error={touched?.lastName && !!errors?.lastName}
          helperText={touched?.lastName && errors?.lastName}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label={t('address.addressLine1')}
          name={`${formName}.addressLine1`}
          variant="outlined"
          error={touched?.addressLine1 && !!errors?.addressLine1}
          helperText={touched?.addressLine1 && !!errors?.addressLine1}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label={t('address.addressLine2')}
          name={`${formName}.addressLine2`}
          variant="outlined"
          error={touched?.addressLine2 && !!errors?.addressLine2}
          helperText={touched?.addressLine2 && errors?.addressLine2}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label={t('address.city')}
          name={`${formName}.city`}
          variant="outlined"
          error={touched?.city && !!errors?.city}
          helperText={touched?.city && errors?.city}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label={t('address.provinceState')}
          name={`${formName}.provinceState`}
          variant="outlined"
          error={touched?.provinceState && !!errors?.provinceState}
          helperText={touched?.provinceState && errors?.provinceState}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label={t('address.country')}
          name={`${formName}.country`}
          variant="outlined"
          error={touched?.country && !!errors?.country}
          helperText={touched?.country && errors?.country}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label={t('address.zipPostalCode')}
          name={`${formName}.zipPostalCode`}
          variant="outlined"
          error={touched?.zipPostalCode && !!errors?.zipPostalCode}
          helperText={touched?.zipPostalCode && errors?.zipPostalCode}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
