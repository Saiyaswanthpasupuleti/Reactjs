import React,{useState} from "react";
import FormModal from "./modal";
import axios from "axios";

function Form(){
    const [value,SetValue]=useState({
        username:"",
        password:""
    })
    const [modalShow, setModalShow] = useState(false);  
    const [formData,SetformData]=useState(false)
    const handle=(a)=>{
        const {name,value}=a.target
        SetValue((a)=>{
            return{
                ...a,
                [name]:value
            }
        })
    }

    const handle1=(e)=>{
        e.preventDefault();
     
        axios.post('https://dummyjson.com/auth/login', value)
        .then((res) => {
            setModalShow(true);
            res.data.accessToken ? SetformData(true) : SetformData(false);
        })
        .catch((err) => {
            console.error(err); // Handles any error (network issues, invalid credentials, etc.)
            setModalShow(true);
            SetformData(false); // Show "Invalid Credentials" if an error occurs
        });
    
   


    }
    
    return(
        <div style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"column",gap:"50px",justifyContent:"center",alignItems:"center"}}>
            <h1>10 th december</h1>
         <form onSubmit={handle1}>
         <input type="text" name="username" value={value.username} onChange={handle}></input>
          <input type="password" name="password" value={value.password} onChange={handle} ></input>
          <input type="submit"></input>
        
         </form>
         <h1>{value.username}</h1>
         <h1>{value.password}</h1>
         {formData?<FormModal show={modalShow}
        onHide={() => setModalShow(false)}
        username={value.username}
        password={value.password}
        status='Login Sucessfull'
        />:<FormModal show={modalShow}
        onHide={() => setModalShow(false)}
        username="Invalid Credentials"
        />}
         



        </div>
    )
}

export default Form;