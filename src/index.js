import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from '@Global/global';
import App from '@Components/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
