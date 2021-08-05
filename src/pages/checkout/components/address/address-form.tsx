import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Field, FormikErrors, FormikTouched } from 'formik';

import { AddressFormValues } from './address-form-values.interface';

export interface AddressFormProps {
  formName: string;
  errors?: FormikErrors<AddressFormValues>;
  touched?: FormikTouched<AddressFormValues>;
}

export const AddressForm: FunctionComponent<AddressFormProps> = ({
  formName = 'Address',
  errors,
  touched,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="First Name"
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
          label="Last Name"
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
          label="Addess line 1"
          name={`${formName}.addressLine1`}
          variant="outlined"
          error={touched?.addressLine1 && !!errors?.addressLine1}
          helperText={touched?.addressLine1 && errors?.addressLine1}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Addess line 2"
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
          label="City"
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
          label="Province/State"
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
          label="Country"
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
          label="Zip/Postal Code"
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
