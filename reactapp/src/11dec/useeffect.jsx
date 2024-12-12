import React, { useEffect, useState } from "react";

function Use(){
    const [count,Setcount]=useState(0)
    const [message,setMessage]=useState("hai")

    useEffect(()=>{Setcount(count+1)},[message])

    const handle=()=>{
        setMessage(message+"10k")
    }

    return(
        <>
        <button onClick={handle}>click</button>
        <h1>{count}</h1>
        <h1>{message}</h1>
        </>
    )
}
export default Use;