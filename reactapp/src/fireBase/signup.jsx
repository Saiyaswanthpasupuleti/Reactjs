import React, { useState} from 'react'
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import { app } from './FireBase'
import Login from './login'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const [email,Setemail]=useState("")
    const [password,Setpassword]=useState("")
    const nav = useNavigate();
    const verify=getAuth(app)
    const handleSubmit=async (e)=>{
    
       
        e.preventDefault();
        try{
        
        let a=await createUserWithEmailAndPassword (verify,email,password)
        console.log(email,password)
        Setemail("")
        Setpassword("")
        nav("/login")
        }
        catch(err){
            console.log(err)
        }
        
    }
  return (
    <div>
        <h1>SignUp</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type='email' placeholder='Enter Your Email :' onChange={(e)=>Setemail(e.target.value)} value={email}></input>
        <input type='password' placeholder='Enter Your Password' onChange={(e)=>Setpassword(e.target.value)} value={password}></input>
        <input type='submit'></input>

      </form>

    </div>
  )
}
