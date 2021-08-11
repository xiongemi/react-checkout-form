import { Dispatch } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/root-state.interface';
import { checkoutSelectors } from '../../store/checkout.selectors';
import { checkoutSlice } from '../../store/checkout.slice';

import { PaymentFormValues } from './payment-form-values.interface';

const mapStateToProps = (state: RootState) => {
  return {
    paymentForm: checkoutSelectors.getPaymentForm(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    submitPaymentForm(formValues: PaymentFormValues) {
      dispatch(checkoutSlice.actions.submitPaymentForm(formValues));
    },
    clearPaymentForm() {
      dispatch(checkoutSlice.actions.clearPaymentForm());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type PaymentFormProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { PaymentFormProps };
