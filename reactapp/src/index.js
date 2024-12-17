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
// import Spinner from './3dec';
import Lifecycle from './5dec';
import Card from './4dec';
import New from './3dec';
import Todo from './2dec';
import Hook from './6dec';
import FormComp from './7dec';
import Calculator from './6dec/cal/caLindex';
import Form from './10dec/form';
import Effect from './11dec';
import FormX from './11dec/login';
import All from './12dec/index';
import MainPage from './13dec/MainPage';
import { ProviderFunction } from './14dec';
import Results from './14dec/datas';
import Memo from './17dec/memo';
import CallbackH from './17dec/callbackhook';


// import Use from './11dec/useeffect';
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
  <Todo/>
  <New/>
  <Card/>
  <Lifecycle/>
  <Hook/>
  <Calculator/>
  <FormComp/>

  <Form/>
  <Effect/>

<FormX/>
<All/>
<MainPage/>

{/* <Use/> */}

  <ProviderFunction>
    <Results></Results>
  </ProviderFunction>
   <Memo/>
{/* <CallbackH/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
