import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Redux/store';


ReactDOM.render(
  <Provider store={Store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);


reportWebVitals();
