import React, { Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { initI18n } from './services/i18n';
import AppRoutes from './routes/app-routes';

const defaultLanguage = 'en-GB';
initI18n('/i18n/{{lng}}.json', defaultLanguage);

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
