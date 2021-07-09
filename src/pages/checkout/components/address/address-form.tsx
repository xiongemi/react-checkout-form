import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Field, Form, Formik, FormikProps, withFormik } from 'formik';

export const AddressForm: FunctionComponent = () => {
  return (
    <Form noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            label="First Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            label="Last Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            label="Addess line 1"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            label="Addess line 2"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            label="Postal/Zip Code"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            label="City"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            label="Province"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            label="Country"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </Form>
  );
};

const SearchFormik = withFormik({
  displayName: 'SearchForm',
  enableReinitialize: true,
  handleSubmit: () => {},
})(AddressForm);
