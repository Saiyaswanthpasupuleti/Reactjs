import React from "react";
function Button(props){
//   const {name,onClick}=props
    return(
        <>
        <button onClick={props.onClick}>{props.name}</button>
        </>
    )
}
export default Button;