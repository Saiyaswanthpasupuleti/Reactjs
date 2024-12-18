import React,{useState} from "react";
import MyVerticallyCenteredModal from "./model";
function FormComp(){
    const [a,b]=useState({
        user:"",
        mobile:"",
        email:"",
        photo:null
    })
    const [modalShow, setModalShow] = useState(false);  
    
    const handle=(event)=>{
        console.log(event)
        let {name,value,type,files}=event.target
        if(type==="file"){
            b((a)=>{
                return{
                    ...a,
                    photo:URL.createObjectURL(files[0]),
                }
            })

        }
        else{
            b((a)=>{
                return{
                 ...a,
                 [name]:value
                }
     
             })
        }
       

    }

    const submit=(e)=>{
        e.preventDefault();
        setModalShow(true)
    }
    return(
        <div style={{height:"100vh",border:"2px solid black",display:"flex", flexDirection:"row",gap:"50px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
            <h1>7 dec task</h1>
            <form onSubmit={submit}>
                <input type="text" name="user" value={a.user} onChange={handle}></input>
                <br></br>
                <p></p>
                <input type="text" name="mobile" value={a.mobile} onChange={handle}></input>
                <br></br>
                <p></p>
                <input type="email" name="email" value={a.email} onChange={handle}></input>
                <br></br>
                <p></p>
                <input type="file" accept="image/*" onChange={handle} />
          <p></p>
                <input type="submit"></input>
            </form>
            {/* <h1>{a.user}</h1>
            <h1>{a.mobile}</h1>
            <h1>{a.email}</h1> */}
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={a.user}
        mobile={a.mobile}
        email={a.email}
        photo={a.photo}
      />
        </div>
    )
}

export default FormComp;