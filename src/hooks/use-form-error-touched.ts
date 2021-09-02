import { useFormikContext, getIn, FormikErrors, FormikTouched } from 'formik';
import { useState, useEffect } from 'react';

export function useFormErrorTouched<T>(name: string | string[]) {
  const { touched, errors, values, isSubmitting } = useFormikContext();
  const [formError, setFormError] = useState<FormikErrors<T>>();
  const [formTouched, setFormTouched] = useState<FormikTouched<T>>();
  const [formValues, setFormValues] = useState<FormikTouched<T>>();

  useEffect(() => {
    setFormError(getIn(errors, name));
  }, [errors, name]);

  useEffect(() => {
    setFormTouched(getIn(touched, name));
  }, [touched, name]);

  useEffect(() => {
    setFormValues(getIn(values, name));
  }, [values, name]);

  return { formError, formTouched, formValues, isSubmitting };
}
