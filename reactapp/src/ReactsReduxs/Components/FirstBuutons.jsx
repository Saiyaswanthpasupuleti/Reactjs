import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../Actions/SecondAction'
export default function FirstBuutons() {
    const Dispatch=useDispatch()
  return (

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <button onClick={()=>Dispatch(increment())}>Increment</button>
        <button onClick={()=>Dispatch(decrement())}>Decrement</button>
    </div>
  )
}
