import React, { useContext, useState } from "react";
import { createContext } from "react";
const Context=createContext()

export const ProviderFunction=({children})=>{
    const [message,Setmessage]=useState("AppleBanana")
    return(
        <Context.Provider value={{message,Setmessage}} >
            {children}
        </Context.Provider>
    )

}
export const useDatas=()=>useContext(Context)