import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class Todo extends Component{
    constructor(){
        super()
        this.state={text:"",list:[]}
    }
    handle1=(e)=>{
        e.preventDefault();
        this.setState({text:e.target.value})
    }
    handle2=(e)=>{
        e.preventDefault();
       this.setState((a)=>{
        return{
            list:[...a.list,a.text],
            text:""
        }
       })
    }
    // handleDelete=(index)=>{
    //     this.setState((a)=>({
    //         list:a.list.filter((_,i)=>i !== index)
    //     }))
    // }
    handleDelete = (index) => {
        this.setState((a) => ({
          list: a.list.filter((_, i) => i !== index)
        }));
      };
    render(){
        
        return(
            <div style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"row",gap:"50px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
            <h1>2 Dec task</h1>
            {/* <form onSubmit={this.handle2}>
            <input type="text" id="id1" onChange={this.handle1}></input>
            <input type="submit"></input>
            </form> */}


            <Form onSubmit={this.handle2}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  
  <Form.Control type="text" placeholder="Enter text" id="id1" onChange={this.handle1} />

</Form.Group>
<Button variant="primary" type="submit">
        Submit
      </Button>
</Form>

         
         <ul>
            {this.state.list.map((a,b)=>{
                return(
                    <div>
 <li key={b}>{a}</li>

 {/* <button onClick={() => this.handleDelete()}>delete</button> */}
 <Button variant="danger" onClick={() => this.handleDelete(b)}>Delete</Button>
                    </div>
                   
            )
               
            })}
         </ul>
            {/* <h1>{this.state.id}{this.state.list}</h1> */}
            </div>
        )
    }
}
export default Todo;







