import React, { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Effect(){
    let [cart,UpdateCart]=useState(0)
    let [products,setproducts]=useState([])
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(
                json=>setproducts(json)
                
        )
    },[cart])
    const handle=()=>{
        UpdateCart(cart+1)
    }
    return(
        <div style={{height:"auto",border:"2px solid black",display:"flex",gap:"50px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
        <h1>11 Dec</h1>
        <p>Cart Value : {cart}</p>
        {products.map(product => (
                    <Card  key={product.id} style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={product.image} height="100px" alt={product.title} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>${product.price}</Card.Text>
                            {/* <Button variant="primary">Buy Now</Button> */}
                            <button onClick={handle}>Add to cart</button>
                        </Card.Body>
                    </Card>
                ))}
       
        </div>
    )
}
export default Effect;