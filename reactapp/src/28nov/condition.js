
function Conditiom(props){
    // let looged=false
    // if(looged){
    //     return(
    //         <>
    //         <h1>i am logged in </h1></>
    //     )
    // }
    // else{
    //     return(
    //         <>
    //         <h1>i am logged unsucesfull</h1></>
    //     )
    // }
    return props.loggedin?<h1>Loged in succesfull</h1>:<h1>Logged in unsuccesfull</h1>
}
export default Conditiom;