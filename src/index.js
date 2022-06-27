
import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/css/sb-admin.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();

