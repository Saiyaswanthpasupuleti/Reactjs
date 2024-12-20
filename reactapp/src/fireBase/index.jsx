import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Signup from './signup'
import Login from './login'
import Home from './home'
import { app } from './FireBase'
import {getAuth,onAuthStateChanged} from "firebase/auth"
export default function Index() {
    const [logeedIn,SetLoggedin]=useState(false)
    const authentication=getAuth()
    useEffect(()=>{
        let a=onAuthStateChanged(authentication,(e)=>{
            if(e){
                SetLoggedin(true)
            }
            else{
                SetLoggedin(false)
            }
        })

    },[authentication])
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",border:"2px solid black",flexDirection:"column",gap:"10px"}}>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={logeedIn?<Home/>:<Navigate to="/login"/>}></Route>
        <Route path='/signup' element={logeedIn?<Login/>:<Signup/>}></Route>
        <Route path='/login' element={logeedIn?<Navigate to="/"/>:<Login/>}></Route>
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}
