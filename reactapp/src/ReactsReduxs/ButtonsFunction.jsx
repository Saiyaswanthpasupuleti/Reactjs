import React from 'react'
import { useDispatch } from 'react-redux';
import { increment ,decrement} from './Actions/FirstAction';
export default function ButtonsFunction() {
    const Dispatch=useDispatch()
  return (
   
    <div>
      <button onClick={()=>Dispatch(increment())}>Inc</button>
      <button onClick={()=>Dispatch(decrement())}>Dec</button>
    </div>
  )
}
