import React,{Component} from "react";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
class New extends Component{
    constructor(){
        super()
        this.state={products:[],isloading:true}
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products").then(a=>{
            setTimeout(() => {
                this.setState({products: a.data,isloading:false})
            }, 5000);
           })
    }
    render(){
        const {products,isloading} = this.state;
        return(
            <div style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"row",gap:"50px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
               <h1>3 dec task</h1>
                {isloading?<Spinner animation="border" variant="dark" />:(products.map((a)=>{return(<p>{a.title}</p>)}))}
                      
            
            
            </div>
        )
    }
}
export default New;