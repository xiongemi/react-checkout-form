import { TFunction } from 'i18next';
import { object, string, boolean, ref } from 'yup';

export const signupFormSchema = (t: TFunction) => {
  return object().shape({
    guestCheckout: boolean(),
    email: string()
      .email(t('errorMessages.email'))
      .required(t('errorMessages.required', { fieldName: t('signup.email') })),
    password: string().when('guestCheckout', {
      is: false,
      then: (fieldSchema) =>
        fieldSchema
          .required(
            t('errorMessages.required', { fieldName: t('signup.password') })
          )
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            t('errorMessages.password')
          ),
    }),
    confirmPassword: string().when('guestCheckout', {
      is: false,
      then: (fieldSchema) =>
        fieldSchema
          .required(
            t('errorMessages.required', {
              fieldName: t('signup.confirmPassword'),
            })
          )
          .equals([ref('password')], t('errorMessages.confirmPassword')),
    }),
  });
};
