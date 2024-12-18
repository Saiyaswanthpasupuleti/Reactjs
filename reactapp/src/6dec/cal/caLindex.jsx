import React,{useState} from "react";
import Btn from "./button";
import Form from 'react-bootstrap/Form';
function Calculator(){
    const [input, setInput] = useState(""); 
 
  const handle = (value) => {
    if (value === "C") {
      setInput(""); 
    } else if (value === "=") {
        // eslint-disable-next-line 
        setInput(eval(input).toString());
    } else {
      setInput((prev) => prev + value); 
    }
  };
    return(
        <div style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"row",gap:"50px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
        <h1>6 dec task Calculator</h1>
        {/* <input type="text" value={input}></input> */}
{/* First row */}
<div style={{display:"flex",flexDirection:"column",gap:"10px",border:"2px solid black",height:"auto",width:"auto",padding:"20px",borderRadius:"20px"}}>
{/* <input type="text" value={input}></input> */}
<Form.Control style={{width:"170px"}} type="text" value={input} />
<div style={{ display: "flex", gap: "10px" }}>
          <Btn value="1" onClick={handle} />
          <Btn value="2" onClick={handle} />
          <Btn value="3" onClick={handle} />
          <Btn value="+" onClick={handle} />
        </div>

        {/* Second row */}
        <div style={{ display: "flex", gap: "10px" }}>
          <Btn value="4" onClick={handle} />
          <Btn value="5" onClick={handle} />
          <Btn value="6" onClick={handle} />
          <Btn value="-" onClick={handle} />
        </div>

        {/* Third row */}
        <div style={{ display: "flex", gap: "10px" }}>
          <Btn value="7" onClick={handle} />
          <Btn value="8" onClick={handle} />
          <Btn value="9" onClick={handle} />
          <Btn value="*" onClick={handle} />
        </div>

        {/* Fourth row */}
        <div style={{ display: "flex", gap: "10px" }}>
          <Btn value="C" onClick={handle} />
          <Btn value="0" onClick={handle} />
          <Btn value="/" onClick={handle} />
          <Btn value="=" onClick={handle} />
        
        </div>












</div>
        

        {/* {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"].map(
          (btnValue) => (
            <Btn value={btnValue} onClick={handle} />
          )
        )} */}
        </div>
    )
}
export default  Calculator;