import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
function Lifecycle(){
    const [a,b]=useState(0)
    const handle1=()=>{
        b(a+1)
    }
    const handle2=()=>{
        b(a-1)
    }
    return(
        <div style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"column",gap:"50px",justifyContent:"center",alignItems:"center"}}>
            <h1>5 Dec Task</h1>
            <h1>{a}</h1>
            
            <Button  onClick={handle1} variant="dark">+1</Button>
            <Button  onClick={handle2} variant="dark">-1</Button>


        </div>
    )
}
export default Lifecycle;