import { configureStore } from '@reduxjs/toolkit';
import { organizationsApi } from '../../repository';
import { setupListeners } from '@reduxjs/toolkit/query';
import queryReducer from './querySlice';

export const store = configureStore({
  reducer: {
    [organizationsApi.reducerPath]: organizationsApi.reducer,
    query: queryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(organizationsApi.middleware),
});
setupListeners(store.dispatch);
