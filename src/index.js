import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h2>Wait,loading</h2>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);