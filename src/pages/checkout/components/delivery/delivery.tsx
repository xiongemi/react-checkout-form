import React from 'react';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export const Delivery: FunctionComponent = () => {
  const { t } = useTranslation();
  return <>{t('checkout.delivery')}</>;
};
