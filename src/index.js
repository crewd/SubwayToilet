import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';
import GlobalStyles from './style/GlobalStyles'

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
