import React from 'react';
import ReactDOM from 'react-dom';
import  { Router,  } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.scss';
import Routes from './routes';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
