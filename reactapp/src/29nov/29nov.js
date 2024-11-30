import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
import "./b.css"
class Main extends Component{
    // constructor(){
    //     super()
    //     this.state=({swithon:true});
    // };
    // handle1=()=>{
    //     this.setState({swithon:!this.state.swithon})
    // }
    // render(){
       
    //     return(
    //         <div style={{height:"100vh",border:"2px solid black",display:"flex",justifyContent:"center",alignItems:"center"}}>
    //         {/* <h1>29Nov task</h1> */}
            
    //         <button onClick={this.handle1}>{this.state.swithon?<h1>Switch off</h1>:<h1>Switch on</h1>}</button>

    //         <h1>{this.state.swithon?<h1>Turned on</h1>:<h1>Turned Off</h1>}</h1>
    //         </div>
    //     )
    // }
    constructor(){
        super();
        this.state=({button:true,form:"hello enter any text"})
    }
   
    handle=()=>{
        this.setState({button:!this.state.button})
    }
    handle1=(e)=>{
        e.preventDefault();
        this.setState({form:e.target.id1.value})

    }
    render(){
        return(
            <div style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"column",gap:"50px",justifyContent:"center",alignItems:"center"}}>
                <h1>29 Nov task</h1>
                  <Button onClick={this.handle} variant="dark">{this.state.button?<h1>Buttton off</h1>:<h1>Buttton on</h1>}</Button>
            {/* <button onClick={this.handle}>{this.state.button?<h1>Buttton off</h1>:<h1>Buttton on</h1>}</button> */}
        
            <h1 className={this.state.button?"true":"false"}>{this.state.button?<h1>Bulb turned on</h1>:<h1>Bulb turned off</h1>}</h1>
         
            <form onSubmit={this.handle1}>
                <input id="id1" type="text"></input>
                <input type="submit"></input>
            </form>
            <p>{this.state.form}</p>
            </div>
        )
    }

}

export default Main;