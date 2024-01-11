import { Box, Container, Typography, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  // productgetapi
  const getproductapi = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (res.status === 200) {
        setProduct(res.data);
        console.log("product",product)
      }
    } 
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getproductapi();
  }, [id]);

  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6}>
            <Box>
              <img src={product.image} alt={product.title} width="50%"/>
            </Box>
          </Grid>
          <Grid item lg={6} md={6}>
            <Box>
              <Typography variant='h5'>{product.title}</Typography>
              <Typography variant='h6'>{product.price}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Product;
