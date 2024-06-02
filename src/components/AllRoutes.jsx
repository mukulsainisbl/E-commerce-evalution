import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Products from "../pages/ProductsDetailsPage"
import PrivateRoute from "./PrivateRoute"
const AllRoutes = () => {


  return (
    <Routes>
      
        <Route path="/" element={
    <PrivateRoute>
      <Home/>
    </PrivateRoute>   
 
       
       
        
        }/>
        <Route path="/products/:id" element={
     
            <Products/>
       
      
        
        }/>
        <Route path="/login" element={
       
             <Login/>
       
     
        }/>
    </Routes>
   
  )
}

export default AllRoutes