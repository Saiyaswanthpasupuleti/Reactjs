import React,{Component} from "react";

class Main1 extends Component{
    // constructor(){
    //     super()
    //     this.state={firstname:"",lastname:"",fullname:""}
    // }
    // handle1=(e)=>{
    //    const {name,value}=e.target
    //    this.setState({[name]:value})
    // }
    // handle2=(e)=>{
    //     e.preventDefault();
    //     this.setState({fullname: this.state.firstname+this.state.lastname})


    // }
   
    // render(){
    //     return(
    //         <div  style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"column",gap:"50px",justifyContent:"center",alignItems:"center"}}>
    //         <h1>30 Nov task</h1>
    //         <form onSubmit={this.handle2}>
    //             <input type="text" name="firstname" onChange={this.handle1}/>
    //             <input type="text" name="lastname" onChange={this.handle1}/>

    //             <input type="submit"></input>

    //         </form>
    //         {/* <h1>{this.state.firstname}</h1> */}
    //         <h1>{this.state.fullname}</h1>
    //         </div>
    //     )
    // }
   
    constructor(){
        super()
        this.state={num:"Enter a number to check if it's odd or even"}
    }
    handle=(e)=>{  
        e.preventDefault();
        let val=e.target.num.value
        // if(val===""){
        //     this.setState({num:"enter valid num"})
        // }
        // else{
        //     this.setState({num:val%2===0?"even":"odd"})
        // }

        this.setState({num:val%2===0?"even":"odd"})
    }
    render(){
        return(
            <div  style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"column",gap:"50px",justifyContent:"center",alignItems:"center"}}>
            <form onSubmit={this.handle}>
                <input type="number" name="num"></input>
                <input type="submit"></input>
            </form>
<p>{this.state.num}</p>
            </div>
        )
    }
}

export default Main1;