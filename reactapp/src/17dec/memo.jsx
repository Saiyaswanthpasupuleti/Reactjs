import React, { useCallback, useMemo, useState } from "react";

function Memo(){
    const [callbackcount,callbackSetcount]=useState(1)
    const [a,b]=useState(0)
    
//this is one way 
    // const callbackhandke=()=>{
    //     callbackSetcount(callbackcount+1)
    // }
    // const updatecount=useCallback(()=>b(a+1),[callbackcount])
    
//this is another way 

const maincallbackhandke=useCallback(()=>{
    callbackSetcount(callbackcount+1)
    b(a+1)
},[callbackcount])


 
    
    const [count,Setcount]=useState(0)
    // const [fact,Setfact]=useState(0)
    const counthandle=()=>{
        Setcount(count+1)
    }

    const factorial=(count)=>{
        var res=1;
        for(let i=count;i>=1;i--){
            res=res*i
        }
        return res;
    }

    const mainresult=useMemo(()=>factorial(count),[count])

   return(
    <div style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"row",gap:"50px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
        <div>
        <h4>useMemo it is used to memorize the computer Caluculations / reComputes when the dependencies is changed </h4>
        
        <p>Here i am finding factorial of a number by using useMemo</p>
        <button onClick={counthandle}>Click me</button>
        <h6>{count}</h6>

        <h1>{mainresult}</h1>
        </div>
        


        <div>
        <h4>useCall back is used to store the callback function recomputes only when the dependencies is changed</h4>
        {/* <button onClick={callbackhandke}>callback memo</button>
       <button onClick={updatecount}>Update count</button>
        */}
        <button onClick={maincallbackhandke}>main memo</button>
        <h2>normal count {callbackcount}</h2>
        <h2>update count {a}</h2>
        </div>
    </div>
   )
}
export default Memo;