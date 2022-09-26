import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { authSlice } from './slices/auth/authSlice';
import { dashboardSlice } from './slices/dashboard/dashboardSlice';

const persistAuthConfig = {
  key: 'auth',
  storage,
};

const persistPublisherConfig = {
  key: 'publisher',
  storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authSlice.reducer);
const persistedPublisherReducer = persistReducer(persistPublisherConfig, dashboardSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    dashboard: persistedPublisherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//     reducer: {
//         auth: authSlice.reducer,
//         dashboard: dashboardSlice.reducer
//     }
// })
