import { Container } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button} from "@chakra-ui/react";
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

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});



  async function getData(id) {

    try {
      let res = await axios({
        method: "get",
        url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
      });
      setProduct(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(id);
  }, [id]);

  const {title,price,category,brand,image} = product
  return (
    <Container>
         <Card>
          <img  style={{width:"150px" , textAlign:"center"}} src={image} alt="" />
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
            <Box>
              <Heading size="xs" textTransform="uppercase">Brand</Heading>
              <Text pt="2" fontSize="sm">
            Brand : {brand}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase"></Heading>
              <Text pt="2" fontSize="sm">
            
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <Box p="4">
       
        </Box>
      </Card>
    
    </Container>
  );
};

export default Products;
