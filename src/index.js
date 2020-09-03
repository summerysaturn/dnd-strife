import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import charData from './blankChar.json';

ReactDOM.render(
  <React.StrictMode>
    <App charData={charData} />
  </React.StrictMode>,
  document.getElementById('root')
);
