
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from './context/AuthContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChakraProvider>
    <BrowserRouter>
  <App />
  </BrowserRouter>
  </ChakraProvider>
  </AuthContextProvider>
  
  
    
 
)
