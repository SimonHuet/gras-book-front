import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import 'i18n';
import App from 'Components/App';
import * as serviceWorker from 'serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
