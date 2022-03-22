import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'normalize.css';
import './index.css';
import './styles/global.scss';
import './styles/main.scss';
import './fonts/Roboto/Roboto-Bold.eot';
import './fonts/Roboto/Roboto-Bold.svg';
import './fonts/Roboto/Roboto-Bold.ttf';
import './fonts/Roboto/Roboto-Bold.woff';
import './fonts/Roboto/Roboto-Bold.woff2';
import './fonts/Roboto/Roboto-Medium.eot';
import './fonts/Roboto/Roboto-Medium.svg';
import './fonts/Roboto/Roboto-Medium.ttf';
import './fonts/Roboto/Roboto-Medium.woff';
import './fonts/Roboto/Roboto-Medium.woff2';
import './fonts/Roboto/Roboto-Regular.eot';
import './fonts/Roboto/Roboto-Regular.svg';
import './fonts/Roboto/Roboto-Regular.ttf';
import './fonts/Roboto/Roboto-Regular.woff';
import './fonts/Roboto/Roboto-Regular.woff2';
import './fonts/Roboto/Roboto-Thin.eot';
import './fonts/Roboto/Roboto-Thin.svg';
import './fonts/Roboto/Roboto-Thin.ttf';
import './fonts/Roboto/Roboto-Thin.woff';
import './fonts/Roboto/Roboto-Thin.woff2';
import './fonts/LemonTuesday/LemonTuesday.eot';
import './fonts/LemonTuesday/LemonTuesday.svg';
import './fonts/LemonTuesday/LemonTuesday.ttf';
import './fonts/LemonTuesday/LemonTuesday.woff';
import './fonts/LemonTuesday/LemonTuesday.woff2';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);