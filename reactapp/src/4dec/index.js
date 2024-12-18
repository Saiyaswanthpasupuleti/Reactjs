import React,{ Component } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Data from "./ex";

class Card extends Component{
    
    constructor(){
    super()
      this.state={count:0,product:{}}
    }
    componentDidUpdate(a,b){
        if(b.count!==this.state.count){
        axios.get(`https://fakestoreapi.com/products/${this.state.count}`).then((a)=>{this.setState({product:a.data})})
        }
    }
    handle0=()=>{
        this.setState({count:0})
    }
    handle1=()=>{
        this.setState({count:1})
    }
    handle2=()=>{
        this.setState({count:2})
    }
    handle3=()=>{
        this.setState({count:3})
    }
    handle4=()=>{
        this.setState({count:4})
    }
    handle5=()=>{
        this.setState({count:5})
    }
    handle6=()=>{
        this.setState({count:6})
    }
    handle7=()=>{
        this.setState({count:7})
    }
 handle8=()=>{
        this.setState({count:8})
    }
    handle9=()=>{
        this.setState({count:9})
    }
    handle10=()=>{
        this.setState({count:10})
    }
   
   
   
    render(){
        const { product} = this.state;

        return(
            <div style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"row",gap:"50px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
              <h1>4 dec task</h1>
              {/* <Button variant="dark" onClick={this.handle0}>0</Button> */}
              <Button variant="dark" onClick={this.handle1}>1</Button>
              <Button variant="dark" onClick={this.handle2}>2</Button>
              <Button variant="dark" onClick={this.handle3}>3</Button>
              <Button variant="dark" onClick={this.handle4}>4</Button>
              <Button variant="dark" onClick={this.handle5}>5</Button>
              <Button variant="dark" onClick={this.handle6}>6</Button>
              <Button variant="dark" onClick={this.handle7}>7</Button>
              <Button variant="dark" onClick={this.handle8}>8</Button>
              <Button variant="dark" onClick={this.handle9}>9</Button>
              <Button variant="dark" onClick={this.handle10}>10</Button>

              {/* <h1>{this.state.count}</h1> */}
              <Data
            title={product.title}
            price={product.price}
            image={product.image}
          />
            </div>
        )
    }
}
export default Card;