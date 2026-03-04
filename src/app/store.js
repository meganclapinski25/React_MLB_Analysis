import { configureStore } from '@reduxjs/toolkit';
import { mlbApi } from '../features/mlb/mlbApi';

export const store = configureStore({
  reducer: {
    [mlbApi.reducerPath]: mlbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mlbApi.middleware),
});
