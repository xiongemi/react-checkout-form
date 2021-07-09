import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { AddressForm } from '../address/address-form';

export const Delivery: FunctionComponent = () => {
  const { t } = useTranslation();
  return <AddressForm />;
};
