import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import User from './28nov/user';
// import Admin from './28nov/admin';
import reportWebVitals from './reportWebVitals';
import { ButtonsFunction } from './ReactsReduxs/Components/ButtonsFunction';
import ButtonResult from './ReactsReduxs/Components/ButtonResult';
import { Provider } from 'react-redux';
import { resultStore } from './ReactsReduxs/Store/FirstStore';
// import Main from './28nov/28nov';
import Conditiom from './28nov/condition';
import Parent from './parent';
import Count from './28nov/counter';
import Main from './29nov/29nov';
import Main1 from './30nov/main';
import Spinner from './3dec';
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
import { ParentContext } from './18dec/contexts';
import { ParentComponent } from './18dec/contexts';
import ChildContext from './18dec/contexts1';
// import Signup from './fireBase/signup';
// import Login from './fireBase/login';
// import Index from './fireBase';
// import Circle from './fireBase/Circle';
// import Hackthon from './hackthon';
// import Use from './11dec/useeffect';
// import ButtonsFunction from './ReactsReduxs/Components/ButtonsFunction';
// import { Provider } from 'react-redux';
// import { mainstore } from './ReactsReduxs/Store/FirstStore';
// import ButtonResult from './ReactsReduxs/Components/ButtonResult';
// import FirstBuutons from './ReactsReduxs/Components/FirstBuutons';

// import { Provider } from 'react-redux';
// import FirstResultedValue from './ReactsReduxs/Components/FirstResultedValue';
// import { ResultedStore } from './ReactsReduxs/Store/SecondStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  <Main/>
  <Conditiom loggedin={true}/>
  <User login="user"/>
  <Parent login="user"/>
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

  {/* <ProviderFunction>
    <Results></Results>
  </ProviderFunction>
   <Memo/> */}
{/* <CallbackH/> */}

{/* <ParentComponent/> */}
{/* <Signup/> */}
{/* <Login/> */}
{/* <Index/> */}
{/* <Hackthon/> */}

{/* <Circle/> */}
{/* <Circle/> */}
{/* <Provider store={mainstore}>
<ButtonsFunction/>
<ButtonResult/>
</Provider> */}
{/* 
<Provider store={ResultedStore}>
      <FirstBuutons />
      <FirstResultedValue />
    </Provider> */}

<Provider store={resultStore}>
<ButtonsFunction/>
<ButtonResult/>
</Provider>





  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
