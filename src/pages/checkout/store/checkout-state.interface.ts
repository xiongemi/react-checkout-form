import { DeliveryFormValues } from '../components/delivery/delivery-form-values.interface';
import { PaymentFormValues } from '../components/payment/payment-form-values.interface';

export interface CheckoutState {
  deliveryForm: DeliveryFormValues;
  paymentForm: PaymentFormValues;
}
