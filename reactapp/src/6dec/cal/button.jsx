import React from "react";
import Button from 'react-bootstrap/Button';
function Btn({value,onClick}){
    return(
        <>
        <Button onClick={()=>{onClick(value)}} variant="dark">{value}</Button>
        </>
    )
}
export default Btn;