import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, TextField, Box } from '@mui/material';
import { addToCart } from '../data/cartProducts';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    const newCartItem = { ...product, quantity: parseInt(quantity, 10) };
    addToCart(newCartItem);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" alignItems="center">
          <TextField
            type="number"
            label="Quantity"
            value={quantity}
            onChange={handleQuantityChange}
            inputProps={{ min: 1 }}
            style={{ width: '60px', marginRight: '10px' }}
          />
          <Button size="small" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
