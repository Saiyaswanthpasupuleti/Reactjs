import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar';
import Footer from './footer';
import Body from './body';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{backgroundColor:"rgb(19, 40, 81)",width:"auto",display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-between"}}>
{/* <App /> */}
<Navbar />
<Body />
<Footer />
</div>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
