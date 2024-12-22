import React, { useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider, Button, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { getCartProducts, removeFromCart, addToCart, clearCart } from '../data/cartProducts';
import { addToCartHistory, getCartHistory } from '../data/cartHistory';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const [cartItems, setCartItems] = useState(getCartProducts());
  const [openDialog, setOpenDialog] = useState(false);
  const [cartHistory, setCartHistory] = useState(getCartHistory());

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    setCartItems(getCartProducts());
  };

  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: parseInt(quantity, 10) } : item
    );
    setCartItems(updatedCart);
    addToCart(updatedCart.find((item) => item.id === productId));
  };

  const handleBookNow = () => {
    addToCartHistory(cartItems);
    setCartHistory(getCartHistory());
    clearCart();
    setCartItems(getCartProducts());
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClearCart = () => {
    clearCart();
    setCartItems(getCartProducts());
  };

  const handleRebookOrder = (order) => {
    order.forEach(item => addToCart(item));
    setCartItems(getCartProducts());
  };

  const groupedCartItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  return (
    <Container style={{ marginTop: '20px', maxWidth: '800px', width: '100%', height: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      <List>
        {groupedCartItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={item.name}
                secondary={`Price: ${item.price}`}
              />
              <TextField
                type="number"
                label="Quantity"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                inputProps={{ min: 1 }}
                style={{ width: '60px', marginRight: '10px' }}
              />
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFromCart(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
            {index < groupedCartItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      <Box mt={4} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleBookNow} style={{ marginRight: '10px' }}>
          Book Now
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClearCart}>
          Clear Cart
        </Button>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Order Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your order has been placed successfully! Your delivery is on the way.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Previous Orders
        </Typography>
        <List>
          {cartHistory.map((order, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={`Order ${index + 1}`}
                  secondary={order.map(item => `${item.name} (x${item.quantity})`).join(', ')}
                />
                <Button variant="outlined" color="primary" onClick={() => handleRebookOrder(order)}>
                  Rebook
                </Button>
              </ListItem>
              {index < cartHistory.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Cart;
