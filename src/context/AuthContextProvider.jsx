import { createContext, useState } from "react"


 export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

const [authStatus,setAuthStatus] = useState({
    isAuthenticated:false,
    token:null,
    email:null
})


const Login =(token,email)=> {
    setAuthStatus({
        isAuthenticated:true,
        token:token,
        email:email
    })
}


const Logout =()=>{
    setAuthStatus({
        isAuthenticated:false,
        token:null,
        email:null
    })
}
  return (
  <AuthContext.Provider value={{authStatus,Login,Logout}}>
     {children}
  </AuthContext.Provider>
  )
}

export default AuthContextProvider