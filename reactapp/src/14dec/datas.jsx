import React from "react";
import { useDatas } from "./index";
function Results(){
    const {message}=useDatas()
    return(
        <>
<h1>{message}</h1>
        </>
    )
}
export default Results;