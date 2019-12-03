import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import 'i18n';
import App from 'Components/App';
import * as serviceWorker from 'serviceWorker';
import { Provider } from 'react-redux';
import { store } from 'Redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.register();
