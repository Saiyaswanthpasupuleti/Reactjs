import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Main from './main';
import A from './button';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
   {/* <Main name="yaswanth" city="Tenali"/> */}
   {/* <Main>
    <h1>child1</h1>
    <h1>child2</h1>
    <h1>child3</h1>
    <h1>child4</h1>
   </Main> */}
   <A/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
