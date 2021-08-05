import { object, string } from 'yup';

export const addressFormSchema = object().shape({
  firstName: string().required('Field is required').max(30, 'Too long'),
  lastName: string().required('Field is required').max(30, 'Too long'),
  addressLine1: string().required('Field is required').max(200, 'Too long'),
  addressLine2: string().notRequired(),
  city: string().required('Field is required').max(30, 'Too long'),
  provinceState: string().required('Field is required').max(30, 'Too long'),
  country: string().required('Field is required').max(30, 'Too long'),
  zipPostalCode: string()
    .required('Field is required')
    .min(5, 'Too short')
    .max(7, 'Too long'),
});
