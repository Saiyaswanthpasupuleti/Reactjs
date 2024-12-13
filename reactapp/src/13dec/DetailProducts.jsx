import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bcard from "./card";
import BSpinner from "./spinner";
function DetailProduct(){
    const [products,SetProducts]=useState([])
    useEffect(()=>{fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>SetProducts(json))},[])
   
    const {id}=useParams()

    const data=products.find((a)=>a.id===Number(id))
    return(
        <>
        {products.length>0?(<Bcard img={data.image} title={data.title} price={data.price}/>):(<BSpinner/>)}
       
        </>
    )
}
export default DetailProduct;