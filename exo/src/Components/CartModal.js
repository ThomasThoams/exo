// src/components/CartModal.js
import React, { useContext } from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import { CartContext } from '../Context/CartContext.js';
import CloseIcon from '@mui/icons-material/Close';

const CartModal = ({ open, handleClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5">Mon Panier</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {cart.length > 0 ? (
          cart.map((book) => (
            <Box key={book.isbn} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>{book.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {book.authors.join(', ')}
                </Typography>
              </Box>
              <Button variant="outlined" color="secondary" onClick={() => removeFromCart(book.isbn)}>
                Retirer
              </Button>
            </Box>
          ))
        ) : (
          <Typography variant="body1">Votre panier est vide.</Typography>
        )}
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  width: '90%',
  maxWidth: '500px',
};

export default CartModal;
