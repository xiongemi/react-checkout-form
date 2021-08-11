import { Dispatch } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/root-state.interface';
import { checkoutSelectors } from '../../store/checkout.selectors';
import { checkoutSlice } from '../../store/checkout.slice';

import { DeliveryFormValues } from './delivery-form-values.interface';

const mapStateToProps = (state: RootState) => {
  return {
    deliveryForm: checkoutSelectors.getDeliveryForm(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    submitDeliveryForm(formValues: DeliveryFormValues) {
      dispatch(checkoutSlice.actions.submitDeliveryForm(formValues));
    },
    clearDeliveryForm() {
      dispatch(checkoutSlice.actions.clearDeliveryForm());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type DeliveryFormProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { DeliveryFormProps };
