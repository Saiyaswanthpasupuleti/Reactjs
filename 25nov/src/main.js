import React from "react";
// import { Component } from "react";

// class Main extends Component{
//     render(props){
//         return(
//             <>
//             <p>{this.props.name}</p>
//             </>
//         )
//     }
// }


function Main(props){

    return(
        <div>
            {/* <h1>{props.name}</h1> */}
            {/* <h1>{props.children}</h1> */}
            {/* {console.log(props.children[0].props.children)} */}
            {props.children.map((a)=>{
                return JSON.stringify(a.props.children) + " hellp"
            })}
     
        
        </div>
    )
}


// class Main extends Component{
//     render(props){
//         return(
//             <>
//             {/* <h1>{this.props.name}{this.props.city}</h1> */}
//             <h1>{this.props.children}</h1>
//             {console.log(this.props.children)}
//             </>
//         )
//     }
// }



export default Main;

//in react props stands from properteries which are used to pass tfrom one compement to other componet for rusing the component 
// we can acces the component in 2 ways
// 1) parameter props : bt using props as a parameter
// 2) Children props  : this can be passed in open and close tagged compomnet 