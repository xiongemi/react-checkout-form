import React, { Suspense } from 'react';
import { Container, CircularProgress } from '@material-ui/core';

import { initI18n } from './services/i18n';
import AppRoutes from './routes/app-routes';

const defaultLanguage = 'en-GB';
initI18n('/i18n/{{lng}}.json', defaultLanguage);

function App() {
  return (
    <Container maxWidth="lg">
      <Suspense fallback={<CircularProgress />}>
        <AppRoutes />
      </Suspense>
    </Container>
  );
}

export default App;
