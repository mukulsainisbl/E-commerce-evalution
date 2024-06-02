import { Button, Container} from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";



const BoxesProducts = ({ title, price, category,id }) => {
    const naviagte = useNavigate()
   


  return (
    <Container>
      <Card>
        <CardHeader>
          <Heading size="sm">Title: {title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">Price</Heading>
              <Text pt="2" fontSize="sm">
                {price}
              </Text>
            </Box>

            <Box>
              <Heading size="xs" textTransform="uppercase">Category</Heading>
              <Text pt="2" fontSize="sm">
                {category}
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <Box p="4">
        <Button onClick={() => naviagte(`/products/${id}`)}>View Details</Button>
        </Box>
      </Card>
    </Container>
  );
};

export default BoxesProducts;
