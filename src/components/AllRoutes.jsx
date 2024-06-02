import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Products from "../pages/ProductsDetailsPage"

const AllRoutes = () => {


  return (
    <Routes>
        <Route path="/" element={
       
 <Home/>
       
       
        
        }/>
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
   
  )
}

export default AllRoutes