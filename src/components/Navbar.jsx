import { Link as ReactRouterLink } from 'react-router-dom'
import { Button, Link as ChakraLink, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

const links =[
    {
        to:"/",
        label:"Home"
    },
    {
        to:"/products",
        label:"Products Details"

    },
   
]

const Navbar = () => {
    const {authStatus,Logout} = useContext(AuthContext)
const {isAuthenticated} = authStatus
  return (
<Flex
justifyContent={"space-around"}
backgroundColor={"teal.100"}
padding={4}
fontWeight={600}
>
    {links.map((link) =>(
        <ChakraLink
        key={link.to}
        as={ReactRouterLink}
        to={link.to}
        color={"blue"}
        _hover={{textDecoration:"none"}}
        >
      {link.label}
        </ChakraLink>
    ))}

    

    <ChakraLink as={ReactRouterLink}>
        {isAuthenticated ?   <Button onClick={Logout}>Logout</Button>: 
         <Button as={ReactRouterLink} to="/login">Login</Button>
        }
       
      
        
        </ChakraLink>
</Flex>
   
  )
}

export default Navbar