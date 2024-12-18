import React, { createContext, useContext, useState } from "react";
import ChildContext from "./contexts1";

export let ParentComp=createContext();

export function ParentComponent(){
    let [name,Setname]=useState("Yaswanth")
    return(
        <>
        <ParentComp.Provider value={name}>
            <ChildContext></ChildContext>
        </ParentComp.Provider>
        </>
    )
}