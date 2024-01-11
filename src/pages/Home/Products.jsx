import { Box, Container, Typography, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  const getproducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      if (res.status === 200) {
        setProducts(res.data);
      }
    } catch (erros) {
      console.log(erros);
    }
  };
  useEffect(() => {
    getproducts();
  },[]);
  return (
    <Box>
      <Container>
        <Box>
          <Box>
            <Typography variant="h4">Products</Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {products.map((data) => {
                return (
                  <Grid item lg={4}>
                    <Link to={`/products/product/${data.id}`}>
                      <Box>
                        <img
                          src={data.image}
                          alt={data.title}
                          style={{ width: "50%" }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h5">{data.title}</Typography>
                      </Box>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Products;
