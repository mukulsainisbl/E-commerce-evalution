import { Card, Container, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import BoxesProducts from "./BoxesProducts";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      let res = await axios({
        method: "get",
        url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=men&page=1&limit=5&sort=price&order=asc",
      });
      setProducts(res?.data.data);
    } catch (error) {
      console.log(error);
    }
  }
console.log(products)
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container maxW='container.lg' mt={6}>
      <SimpleGrid columns={{ base: "1", md: "2", lg: "3" }} spacing={8}>
        {products.map((product) => (
          <BoxesProducts key={product.id} {...product} />
         
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
