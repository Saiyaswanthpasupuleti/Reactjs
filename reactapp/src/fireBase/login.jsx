import React, { useState } from 'react'
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import { app } from './FireBase'
import { useNavigate } from 'react-router-dom'
import Signup from './signup'

export default function Login() {
    const [email,Setemail]=useState("")
    const [password,Setpassword]=useState("")
    const verify=getAuth(app)
    const nav=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
            console.log(email,password)
            let a=await signInWithEmailAndPassword(verify,email,password)
            console.log(Setemail,Setpassword)
            
       
            
                alert("your login is succesfull")
                Setemail("")
            Setpassword("")
                nav("/")
         
          

        }
        catch(err){
            console.log(err)
            alert("Invalid crendentials ")

        }
       
    }
  return (
    <div >
      <form onSubmit={handleSubmit}>
      <h1>LogIn</h1>

        <input type='email' placeholder='Enter your Email' onChange={(e)=>Setemail(e.target.value)} value={email}></input>
        <input type='password' placeholder='Enter your password' onChange={(e)=>Setpassword(e.target.value)} value={password}></input>
        <input type='submit'></input>
      </form>
   
    </div>
  )
}
