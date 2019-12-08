import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { store } from 'Redux/store';
import { Provider } from 'react-redux';
import App from 'Components/App';
import * as serviceWorker from 'serviceWorker';
import 'i18n';
import 'styles/index.css';

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
