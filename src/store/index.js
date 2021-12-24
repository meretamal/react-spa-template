import { configureStore } from '@reduxjs/toolkit';
import baseApi from '@api/base.api';
import reducer from './modules';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
