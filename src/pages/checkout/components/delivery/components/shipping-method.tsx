import { FormControlLabel, Radio } from '@mui/material';
import { Field } from 'formik';
import { RadioGroup } from 'formik-mui';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { ShippingMethod as ShippingMethodEnum } from './shipping-method.enum';

export interface ShippingMethodProps {
  formName?: string;
}

export const ShippingMethod: FunctionComponent<ShippingMethodProps> = ({
  formName = 'shippingMethod',
}) => {
  const { t } = useTranslation();

  return (
    <Field component={RadioGroup} name={formName}>
      <FormControlLabel
        value={ShippingMethodEnum.free}
        control={<Radio />}
        label={t('checkout.shippingMethod.free') as string}
      />
      <FormControlLabel
        value={ShippingMethodEnum.express}
        control={<Radio />}
        label={t('checkout.shippingMethod.express') as string}
      />
      <FormControlLabel
        value={ShippingMethodEnum.nextDay}
        control={<Radio />}
        label={t('checkout.shippingMethod.nextDay') as string}
      />
    </Field>
  );
};
