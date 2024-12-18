import React, { useContext } from "react";
import { ParentComp } from "./contexts";
function ChildContext(){
    let useData=useContext(ParentComp)
    return(
        <>
       <h1>{useData}</h1>
        </>
    )
}
export default ChildContext;