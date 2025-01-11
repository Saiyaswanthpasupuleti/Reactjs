import React from "react";
import {useDispatch} from "react-redux"
import { decrement, increment } from "../Actions/FirstAction";
export function ButtonsFunction(){
    const Dispatch=useDispatch()
    return(
        <div>
            <button onClick={()=>Dispatch(increment())}>+</button>
            <button onClick={()=>Dispatch(decrement())}>-</button>
        </div>
    )
}