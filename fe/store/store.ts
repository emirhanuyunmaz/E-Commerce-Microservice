import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { customerApi } from './customer/customerApi';
// import { pokemonApi } from './services/pokemon'

export const store = configureStore({
  reducer: {
    [customerApi.reducerPath]: customerApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customerApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
