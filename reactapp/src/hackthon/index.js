// // import React, { useState } from 'react';
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
// // import TextExample from './Card';

// // export default function Hackthon() {
// //   const [pages, setPages] = useState({
// //     1: false,
// //     2: false,
// //     3: false,
// //   });
// //   const [color, setColor] = useState('white');
// //   const [text, setText] = useState('serif');

// //   const togglePage = (pageNo) => {

// //     setPages((prevPages) => ({
// //       ...prevPages,
// //       [pageNo]: !prevPages[pageNo], 
// //     }));
// //   };

// //   const changecolor = (colr) => {
// //     setColor(colr);
// //   };

// //   const handleText = (font) => {
// //     setText(font);
// //   };

// //   const renderPageContent = (pageNo) => {
// //     switch (pageNo) {
// //       case 1:
// //         return (
// //           <div
// //             key="page1"
// //             style={{
// //               border: '2px solid black',
// //               height: '50vh',
// //               marginBottom: '20px',
// //             }}
// //           >
// //             <Navbar expand="lg" className="bg-body-tertiary">
// //               <Container>
// //                 <Navbar.Brand href="#home">Navbar</Navbar.Brand>
// //                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //                 <Navbar.Collapse id="basic-navbar-nav">
// //                   <Nav className="me-auto">
// //                     <Nav.Link href="#home">Home</Nav.Link>
// //                     <Nav.Link href="#link">Link</Nav.Link>
// //                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
// //                       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
// //                       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
// //                       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
// //                       <NavDropdown.Divider />
// //                       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
// //                     </NavDropdown>
// //                   </Nav>
// //                 </Navbar.Collapse>
// //               </Container>
// //             </Navbar>
// //             <div
// //               style={{
// //                 display: 'flex',
// //                 justifyContent: 'center',
// //                 alignItems: 'center',
// //                 height: '50vh',
// //               }}
// //             >
// //               <h1>Welcome to your website</h1>
// //             </div>
// //           </div>
// //         );
// //       case 2:
// //         return (
// //           <div
// //             key="page2"
// //             style={{
// //               textAlign: 'center',
// //               height: '50vh',
// //               justifyContent: 'center',
// //               border: '2px solid black',
// //               alignItems: 'center',
// //               marginBottom: '20px',
// //             }}
// //           >
// //             <h1>Featured Page</h1>
// //             <div
// //               style={{
// //                 display: 'flex',
// //                 justifyContent: 'center',
// //                 alignItems: 'center',
// //                 height: '25vh',
// //               }}
// //             >
// //               <TextExample />
// //               <TextExample />
// //               <TextExample />
// //             </div>
// //           </div>
// //         );
// //       case 3:
// //         return (
// //           <div
// //             key="page3"
// //             style={{
// //               height: '50vh',
// //               display: 'flex',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //               border: '2px solid black',
// //               marginBottom: '20px',
// //             }}
// //           >
// //             <h1>More about our brand</h1>
// //           </div>
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         height: '100vh',
// //         flexDirection: 'row',
// //         gap: '15px',
// //       }}
// //     >
   
// //       <div
// //         style={{
// //           height: 'auto',
// //           width: '500px',
// //           margin: '40px',
// //           padding: '30px',
// //           backgroundColor: color,
// //           fontFamily: text,
// //         }}
// //       >
// //         {Object.entries(pages)
// //           .filter(([_, isVisible]) => isVisible)
// //           .map(([pageNo]) => renderPageContent(Number(pageNo)))}
// //       </div>

   
// //       <div style={{ display: 'flex', flexDirection: 'column' }}>
// //         <p>Page Controls</p>
// //         <input
// //           type="checkbox"
// //           onClick={() => togglePage(1)}
       
// //         />
// //         Intro
// //         <input
// //           type="checkbox"
// //           onClick={() => togglePage(2)}
          
// //         />
// //         Products
// //         <input
// //           type="checkbox"
// //           onClick={() => togglePage(3)}
          
// //         />
// //         About
// //       </div>

      
// //       <div style={{ display: 'flex', flexDirection: 'column' }}>
// //         <p>Color Controls</p>
// //         <button style={{ backgroundColor: 'red' }} onClick={() => changecolor('red')}>
// //           Red
// //         </button>
// //         <button
// //           style={{ backgroundColor: 'yellowgreen' }}
// //           onClick={() => changecolor('yellowgreen')}
// //         >
// //           Yellowgreen
// //         </button>
// //         <button style={{ backgroundColor: 'yellow' }} onClick={() => changecolor('yellow')}>
// //           Yellow
// //         </button>
// //       </div>


// //       <div style={{ display: 'flex', flexDirection: 'column' }}>
// //         <p>Font Controls</p>
// //         <button style={{ fontFamily: 'cursive' }} onClick={() => handleText('cursive')}>
// //           Cursive
// //         </button>
// //         <button style={{ fontFamily: 'fantasy' }} onClick={() => handleText('fantasy')}>
// //           Fantasy
// //         </button>
// //         <button style={{ fontFamily: 'monospace' }} onClick={() => handleText('monospace')}>
// //           Monospace
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


// import React , { useState }from "react";



// const [circle,Setcircle]=useState([])
// const handleClick=()=>{
//   const radius=Math.floor(Math.random()*(200-20+1))+20

//   const newCircle={
//     x:e.clientX,
//     y:e.clientY,
//     radius
    
//   }
//   const updatedcircle=[...circle,newCircle]
  
  
//   if(updatedcircle.length>2){
//     Setcircle([])
//   }
//   else{
//    Setcircle(updatedcircle)
//   }
  
// }


// function Task(){
//   return(
//     <div style={{position:"relative",height:"100vh",width:"100vw"}} onClick={handleClick}>
//       {circle.map((a)=>(
//         <div style={{position:"absolute",border:"2px solid black",height:circle.radius*2,width:circle.radius*2,left:circle.x-circle.radius,top:circle.y-circle.radius}}>

//           </div>
//       ))}

//     </div>
//   )
// }


// import React,{useState} from "react";

// export default function Task(){
//   const [circle,Setcircle]=useState([])
//   const handleClick=(e)=>{
//     e.preventDefault()
//     const radius=Math.floor(Math.random()*(200-20))+20

//     const newCircle={
//       x:e.clientX,
//       y:e.clientY,
//       radius
//     }

//     const updatedcircle=[...circle,newCircle]

//     if(updatedcircle.length>2){
//       Setcircle([])
//     }
//     else{
//       Setcircle(updatedcircle)
//     }

//   }
//   return(
//     <div onClick={handleClick} style={{position:"relative",height:"100vh",width:"100vw"}}>
//       {circle.map((a)=>(
//         <div style={{position:"absolute",borderRadius:"50%",border:"2px solid black",height:a.radius*2,width:a.radius*2,top:a.y-a.radius,left:a.x-a.radius}}>
//           </div>
//       ))}

//     </div>
//   )
// }