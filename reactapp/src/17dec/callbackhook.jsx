import React, { useCallback, useState } from "react";
export default function CallbackH(){
    const [count,setcount]=useState(1)
    const [a,b]=useState(0)
   const handle=useCallback(()=>{
    setcount(count+1)
    b(a+1)
   },[count])
    return(
        <>
        <button onClick={handle}>Click me</button>
        <h1>{count}</h1>
        {/* <button onClick={updateHandle}>Handle</button> */}
        <h1>{a}</h1>
    
        </>
    )
}