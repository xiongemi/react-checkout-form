import { Grid } from '@material-ui/core';
import { Field, FormikErrors, FormikTouched } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { SignupFormValues } from './signup-form-values.interface';

export interface SignUpFormProps {
  formName: string;
  errors?: FormikErrors<SignupFormValues>;
  touched?: FormikTouched<SignupFormValues>;
  values: SignupFormValues;
}

export const SignupForm: FunctionComponent<SignUpFormProps> = ({
  formName = 'signup',
  errors,
  touched,
  values,
}) => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          component={CheckboxWithLabel}
          type="checkbox"
          name={`${formName}.guestCheckout`}
          Label={{ label: t('signup.guestCheckout') }}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label={t('signup.email')}
          name={`${formName}.email`}
          variant="outlined"
          error={touched?.email && !!errors?.email}
          helperText={touched?.email && errors?.email}
          type="email"
          fullWidth
        />
      </Grid>
      {!values?.guestCheckout && (
        <>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              label={t('signup.password')}
              name={`${formName}.password`}
              variant="outlined"
              error={touched?.password && !!errors?.password}
              helperText={touched?.password && errors?.password}
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              label={t('signup.confirmPassword')}
              name={`${formName}.confirmPassword`}
              variant="outlined"
              error={touched?.confirmPassword && !!errors?.confirmPassword}
              helperText={touched?.confirmPassword && errors?.confirmPassword}
              type="password"
              fullWidth
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};
