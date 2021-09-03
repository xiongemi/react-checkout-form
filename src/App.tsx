import { Container, CircularProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import AppRoutes from './routes/app-routes';
import { changeLanguage, initI18n } from './services/i18n';
import { rootStore } from './store/root.store';

const defaultLanguage = 'en-GB';
initI18n(process.env.PUBLIC_URL + '/i18n/{{lng}}.json', defaultLanguage);
changeLanguage(defaultLanguage);

function App() {
  return (
    <Container maxWidth="lg">
      <Suspense fallback={<CircularProgress />}>
        <Provider store={rootStore}>
          <AppRoutes />
        </Provider>
      </Suspense>
    </Container>
  );
}

export default App;
