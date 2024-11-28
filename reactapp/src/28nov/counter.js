import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
class Count extends Component{
    constructor(){
        super()
        this.state={count:0}
    }
    handle1=()=>{
        this.setState({count:this.state.count+1})
    }
    handle2=()=>{
        this.setState({count:this.state.count-1})
    }
    handle3=()=>{
        this.setState({count:this.state.count+2})
    }
    handle4=()=>{
        this.setState({count:this.state.count-2})
    } 
    handle5=()=>{
        this.setState({count:this.state.count+5})
    } 
    handle6=()=>{
        this.setState({count:this.state.count-5})
    }
    handle7=()=>{
        this.setState({count:0})
    }
    render(){
        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",gap:"10px"}}>
            <Button variant="dark"onClick={this.handle1}>+1</Button>
            <Button variant="dark" onClick={this.handle2}>-1</Button>
            <Button variant="dark" onClick={this.handle3}>+2</Button>
            <h1>{this.state.count}</h1>
            <Button variant="dark" onClick={this.handle4}>-2</Button>
            <Button variant="dark" onClick={this.handle5}>+5</Button>
            <Button variant="dark" onClick={this.handle6}>-5</Button>
            <Button variant="success"onClick={this.handle7}>Clear to 0</Button>


            </div>
        )
    }
}
export default Count;