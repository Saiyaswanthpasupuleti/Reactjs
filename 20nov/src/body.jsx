import { Component } from "react";
import Myimage from "./assests/download.jpg"

class Body extends Component{
    render(){
        return(
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"80vh",alignItems:"center"}}>
                <table border={3}>
                    <tr>
                        <td> <img src={Myimage} alt="imgs" /></td>
                        <td> <img src={Myimage} alt="imgs" /></td>
                        <td> <img src={Myimage} alt="imgs" /></td>
                        <td> <img src={Myimage} alt="imgs" /></td>

                        <td> <img src={Myimage} alt="imgs" /></td>

                    </tr>
                    <tr>
                        <td> <img src={Myimage} alt="imgs" /></td>
                        <td> <img src={Myimage} alt="imgs" /></td>
                        <td> <img src={Myimage} alt="imgs" /></td>
                        <td> <img src={Myimage} alt="imgs" /></td>

                        <td> <img src={Myimage} alt="imgs" /></td>

                    </tr>
                    <tr>
                        <td> <img src={Myimage} alt="imgs" /></td>
                        <td> <img src={Myimage} alt="imgs" /></td>
                        <td> <img src={Myimage} alt="imgs" /></td>
                        <td> <img src={Myimage} alt="imgs" /></td>

                        <td> <img src={Myimage} alt="imgs" /></td>

                    </tr>
                </table>
               
               
            </div>
        )
    }
}

export default Body;