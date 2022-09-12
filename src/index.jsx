import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './main/routes/AppRouter';
import { store } from './data/redux/store';
import { Provider } from 'react-redux';

import './presentation/assets/styles/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ store }>
      <AppRouter />
    </Provider>
);

reportWebVitals();
