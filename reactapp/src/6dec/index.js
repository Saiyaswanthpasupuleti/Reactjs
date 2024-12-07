
import React, { useState } from "react";
import Button from "./button";
function Hook(){
  const[a,b]=useState(0)
  const increment = () => b(a + 1);
    
    return(
        <div style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"row",gap:"50px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
        <h1>6 dec Practice</h1>
        <Button name="Inc" onClick={increment}/>
        <h1>{a}</h1>
        </div>
    )
}
export default Hook;