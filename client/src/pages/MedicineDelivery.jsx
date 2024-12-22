// src/pages/MedicineDelivery.jsx

import React, { useRef, useState } from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';
import { addToCart, getCartProducts } from '../data/cartProducts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '16px',
  },
  letterNav: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '24px',
    overflowX: 'auto',
    padding: '8px',
    border: '1px solid #ccc',
  },
  category: {
    marginBottom: '24px',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  scrollContainer: {
    display: 'flex',
    overflowX: 'auto',
  },
  scrollItem: {
    flex: '0 0 auto',
    marginRight: '16px',
  },
}));

const MedicineDelivery = ({ setCartCount }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const refs = useRef({});
  const [cartItems, setCartItems] = useState(getCartProducts());

  const handleScrollToLetter = (letter) => {
    const element = refs.current[letter];
    if (element && element.current) {
      const offsetTop = element.current.offsetTop;
      const offsetHeight = element.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = offsetTop - (windowHeight / 2) + (offsetHeight / 2);
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const generateAlphabet = () => {
    return [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    setCartItems(getCartProducts());
    setCartCount(getCartProducts().length);
  };

  return (
    <Container className={classes.root}>
      {/* A-Z Navigation */}
      <Box className={classes.letterNav}>
        {generateAlphabet().map((letter) => (
          <Button key={letter} onClick={() => handleScrollToLetter(letter)}>
            {letter}
          </Button>
        ))}
      </Box>

      {/* Medicine Sections */}
      <div>
        {products.map((category) => {
          const firstLetter = category.category.charAt(0).toUpperCase();
          if (!refs.current[firstLetter]) {
            refs.current[firstLetter] = React.createRef();
          }
          return (
            <div
              key={category.category}
              ref={refs.current[firstLetter]}
              className={classes.category}
            >
              <Typography variant="h5" gutterBottom>
                {category.category}
              </Typography>
              <div className={classes.scrollContainer}>
                {category.items.map((product) => (
                  <div className={classes.scrollItem} key={product.id}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.media}
                        image={product.image}
                        title={product.name}
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
                        <Button size="small" color="primary" onClick={() => handleAddToCart(product)}>
                          Add to Cart
                        </Button>
                        <Button size="small" color="secondary" onClick={() => navigate(`/buy/${product.id}`)}>
                          Buy Now
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default MedicineDelivery;
