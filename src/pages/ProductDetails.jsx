import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
  Paper
} from '@mui/material';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container sx={{ mt: 5 }}>
        <Typography variant="h5">Product not found</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 3 }}>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="400"
              image={product.image}
              alt={product.name}
            />
          </Card>

          <Box flex={1}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Category: {product.category}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price.toLocaleString()}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
              This is an exclusive Louis Vuitton product crafted with premium materials, combining fashion and elegance.
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => alert('Add to cart logic will go here')}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default ProductDetails;
