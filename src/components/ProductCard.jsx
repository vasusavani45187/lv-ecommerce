import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // ✅ redux action

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ get dispatch from Redux

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // ✅ trigger redux action
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: 'pointer' }}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography>${product.price.toLocaleString()}</Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ mt: 1 }}
          onClick={handleAddToCart} // ✅ updated handler
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
