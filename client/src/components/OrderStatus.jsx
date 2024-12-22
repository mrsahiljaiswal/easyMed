import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';

const OrderStatus = ({ status, cartItems }) => {
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
    <Container style={{ marginTop: '20px', maxWidth: '600px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box mb={4} textAlign="center">
          <Typography variant="h4" color={status === 'success' ? 'green' : 'red'} gutterBottom>
            {status === 'success' ? 'Booking Successful' : 'Booking Failed'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            Cart Summary
          </Typography>
          <List>
            {groupedCartItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondary={`Quantity: ${item.quantity} - Price: ${item.price}`}
                  />
                </ListItem>
                {index < groupedCartItems.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default OrderStatus;
