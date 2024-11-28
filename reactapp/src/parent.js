import User from "./28nov/user";
import Admin from "./28nov/admin";
function Parent(props){
    return props.login==="user"?<User/>:props.login==="admin"?<Admin/>:<h1>You are not User and Admin</h1>
}
export default Parent;