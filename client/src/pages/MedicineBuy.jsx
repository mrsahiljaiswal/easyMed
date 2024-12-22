// src/pages/MedicineBuy.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, Button, Grid, TextField, Box } from '@mui/material';
import products from '../data/products';

const MedicineBuy = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = products.flatMap((cat) => cat.items).find((item) => item.id === id);
  const category = products.find((cat) => cat.items.some((item) => item.id === id));

  if (!product) {
    return (
      <Container>
        <Typography variant="h4" color="error" gutterBottom>
          Product not found.
        </Typography>
      </Container>
    );
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Container style={{ marginTop: '20px', maxWidth: '800px' }}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={product.image}
          alt={product.name}
          style={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            {product.price}
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <TextField
              type="number"
              label="Quantity"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{ min: 1 }}
              style={{ width: '100px', marginRight: '20px' }}
            />
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
              Buy Now
            </Button>
            <Button variant="outlined" color="primary">
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>

      {category && (
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            More products from {category.category}
          </Typography>
          <Grid container spacing={3}>
            {category.items.filter((item) => item.id !== id).map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                    style={{ objectFit: 'contain' }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      {item.description}
                    </Typography>
                    <Typography variant="body1" color="primary" gutterBottom>
                      {item.price}
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth>
                      View
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default MedicineBuy;
