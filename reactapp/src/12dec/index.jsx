import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calculator from "../6dec/cal/caLindex";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Count from "../28nov/counter";
import Main from "../29nov/29nov";
import Main1 from "../30nov/main";
import Todo from "../2dec";
import New from "../3dec";
export default function All(){
    return(
      <div style={{height:"100vh"}}>

        <Router>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Nav className="me-auto" style={{display:"flex",justifyContent:'space-evenly',alignItems:"center",width:"100%"}}>
                    <Nav.Link as={Link}  to="/Task1" text="light">Task1</Nav.Link>
                    <Nav.Link  as={Link} to="/Task2">Task2</Nav.Link>
                    <Nav.Link as={Link}  to="/Task3">Task3</Nav.Link>
                    <Nav.Link as={Link}  to="/Task4">Task4</Nav.Link>
                    <Nav.Link  as={Link} to="/Task5">Task5</Nav.Link>
                    <Nav.Link as={Link}  to="/Task6">Task6</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

           
            <div>
            <Routes>
            <Route path="*" element="Wrong path"></Route>

                <Route path="/Task1" element={<Calculator/>}></Route>
                <Route path="/Task2" element={  <Count/>}></Route>
                <Route path="/Task3" element={  <Main/>}></Route>
                <Route path="/Task4" element={<Main1/>}></Route>
                <Route path="/Task5" element={<Todo/>}></Route>
                <Route path="/Task6" element={  <New/>}></Route>
                
                </Routes>
         </div>
        
           
        </Router>

      </div>
      
    )
}


