import { FormControlLabel, Radio } from '@material-ui/core';
import { Field } from 'formik';
import { RadioGroup } from 'formik-material-ui';
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
        label={t('checkout.shippingMethod.free')}
      />
      <FormControlLabel
        value={ShippingMethodEnum.express}
        control={<Radio />}
        label={t('checkout.shippingMethod.express')}
      />
      <FormControlLabel
        value={ShippingMethodEnum.nextDay}
        control={<Radio />}
        label={t('checkout.shippingMethod.nextDay')}
      />
    </Field>
  );
};
