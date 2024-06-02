import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";

import {
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {Login} = useContext(AuthContext)

  async function handleLogin() {
    try {
      let res = await axios({
        method: "post",
        url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        data: {
          email,
          password,
        },
      });
      Login(res.data.token)
      console.log(res.da);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Heading textAlign={"center"}>Login</Heading>
      <Stack spacing={3}>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Email"
          size="lg"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter Password"
          size="lg"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Stack>
    </Container>
  );
};

export default Login;
