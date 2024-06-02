import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"
import { Navigate } from "react-router-dom"


const PrivateRoute = ({children}) => {
    const {authStatus} = useContext(AuthContext)

if(!authStatus.isAuthenticated){
return <Navigate to="/login"/>
}
  return children
}

export default PrivateRoute