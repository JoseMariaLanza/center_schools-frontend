import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './main/routes/AppRouter';
import { persistor, store } from './data/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './presentation/assets/styles/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
