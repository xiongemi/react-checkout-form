import { RootState } from '../../../../store/root-state.interface';
import { checkoutSelectors } from '../../store/checkout.selectors';

const mapStateToProps = (state: RootState) => {
  return {
    deliveryForm: checkoutSelectors.getDeliveryForm(state),
    paymentForm: checkoutSelectors.getPaymentForm(state),
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

type ConfirmationProps = mapStateToPropsType;

export { mapStateToProps };
export type { ConfirmationProps };
