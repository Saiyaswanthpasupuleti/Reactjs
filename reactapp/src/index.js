import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import User from './28nov/user';
// import Admin from './28nov/admin';
import reportWebVitals from './reportWebVitals';
// import Main from './28nov/28nov';
// import Conditiom from './28nov/condition';
// import Parent from './parent';
import Count from './28nov/counter';
import Main from './29nov/29nov';
import Main1 from './30nov/main';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  {/* <Main/> */}
  {/* <Conditiom loggedin={true}/> */}
  {/* <User login="user"/> */}
  {/* <Parent login="user"/> */}
  <Count/>
  <Main/>
  <Main1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
