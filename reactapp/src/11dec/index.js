import React, { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Effect(){
    let [cart,UpdateCart]=useState(0)
    let [products,setproducts]=useState([])
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=>{setproducts(json)})
    },[cart])
    const handle=()=>{
        UpdateCart(cart+1)
    }
    const decrement=()=>{
        UpdateCart(cart-1)
    }
    const increment=()=>{
        UpdateCart(cart+1)
    }
    const clear=()=>{
        UpdateCart(0)
    }
    return(
        <div style={{height:"auto",border:"2px solid black",display:"flex",gap:"50px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
        <h1>11 Dec</h1>
        <div style={{display:"flex",gap:"3px",flexDirection:"row"}}>
       
        {/* <button>-</button> */}
        {/* <h3>Cart Value : {cart}</h3> */}
        <Button style={{borderRadius:"20px"}} variant="dark"  onClick={decrement}>-</Button>
        <Button style={{borderRadius:"20px"}}variant="success">Cart Value : {cart}</Button>
        <Button style={{borderRadius:"20px"}}variant="dark"  onClick={increment}>+</Button>
       

        {/* <button onClick={increment}>+</button> */}
        </div>
        <div>
        <Button variant="danger" style={{borderRadius:"20px"}} onClick={clear}>Clear Cart</Button>

        </div>
        <div style={{display:"flex",flexWrap:'wrap',borderRadius:"20px",gap:"20px",backgroundColor:"white",color:"black",justifyContent:"center"}}>
        {products.map(product => (
                    <Card  key={product.id} style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={product.image} height="100px" alt={product.title} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>${product.price}</Card.Text>
                            {/* <Button variant="primary">Buy Now</Button> */}
                            {/* <button onClick={handle}>Add to cart</button> */}
                            <Button onClick={handle} variant="dark">Add to cart</Button>
                        </Card.Body>
                    </Card>
                ))}
        </div>
       
       
       
        </div>
    )
}
export default Effect;