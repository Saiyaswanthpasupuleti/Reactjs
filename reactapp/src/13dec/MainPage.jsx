import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./index";
import ProductPage from "./ProductsPage";
import DetailProduct from "./DetailProducts";


function MainPage(){
    return(
        <div style={{height:"100vh",border:"2px solid black",display:"flex",gap:"50px",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
       <h1>13 December</h1>
       <Router>
        <Link to="/home" id="a">Home</Link>
        <Link to="/products" id="a">Products</Link>
        <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/products" element={<ProductPage/>}></Route>
            <Route path="/products/:id" element={<DetailProduct/>}></Route>
        </Routes>
       </Router>
        </div>
    )
}
export default MainPage;