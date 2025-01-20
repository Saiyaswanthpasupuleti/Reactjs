import React from 'react'
import { useDispatch } from 'react-redux'
import { Five } from '../Actions/ActionPayload'
export default function MainPayload() {
    const Dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>Dispatch(Five(5))}>Inc by 5</button>
      
    </div>
  )
}
