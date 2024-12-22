// src/pages/MedicineBuy.jsx

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, Button, Grid, TextField, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, CardActions } from '@mui/material';
import products from '../data/products';
import { addToCart, getCartProducts } from '../data/cartProducts';
import OrderStatus from '../components/OrderStatus';

const MedicineBuy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  const [openOrderStatus, setOpenOrderStatus] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    address: '',
    phone: '',
  });
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleBuyNow = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOrder = () => {
    setOpenDialog(false);
    setOrderStatus('success');
    setOpenOrderStatus(true);
  };

  const handleCloseOrderStatus = () => {
    setOpenOrderStatus(false);
  };

  const handleAddToCart = () => {
    const newCartItem = { ...product, quantity: parseInt(quantity, 10) };
    addToCart(newCartItem);
  };

  return (
    <Container style={{ marginTop: '20px', maxWidth: '800px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
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
              <Button variant="contained" color="primary" style={{ marginRight: '10px' }} onClick={handleBuyNow}>
                Buy Now
              </Button>
              <Button variant="outlined" color="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Paper>

      {category && (
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            More products from {category.category}
          </Typography>
          <Grid container spacing={3}>
            {category.items.filter((item) => item.id !== id).map((item, index) => (
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
                    <CardActions>
                      <Button size="small" color="primary" onClick={() => addToCart(item)}>
                        Add to Cart
                      </Button>
                      <Button size="small" color="secondary" onClick={() => navigate(`/buy/${item.id}`)}>
                        Buy Now
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delivery Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your delivery details to place the order.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={deliveryDetails.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="address"
            label="Address"
            type="text"
            fullWidth
            value={deliveryDetails.address}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            value={deliveryDetails.phone}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOrder} color="primary">
            Order
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openOrderStatus} onClose={handleCloseOrderStatus}>
        <DialogTitle>Order Status</DialogTitle>
        <DialogContent>
          <OrderStatus
            status={orderStatus}
            cartItems={getCartProducts()}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOrderStatus} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default MedicineBuy;
