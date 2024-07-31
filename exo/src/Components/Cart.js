// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Box, Typography, Button } from '@mui/material';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Box>
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Panier
      </Typography>
      {cart.map((book) => (
        <Box key={book.isbn} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography>{book.name}</Typography>
          <Button variant="outlined" color="secondary" onClick={() => removeFromCart(book.isbn)}>
            Retirer
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Cart;
