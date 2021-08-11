import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootReducer } from './root.reducer';

const isDevelopment = process.env.NODE_ENV === 'development';

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: isDevelopment ? [logger] : [],
  devTools: isDevelopment,
});

export { rootStore };
