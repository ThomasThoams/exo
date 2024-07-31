// src/components/BookModal.js
import React, { useContext } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { getCoverImageUrl } from '../utils';
import { CartContext } from '../Context/CartContext';

const BookModal = ({ book, open, handleClose }) => {
  const { addToCart } = useContext(CartContext);

  if (!book) return null;

  const coverImageUrl = getCoverImageUrl(book.isbn);

  const handleAddToCart = () => {
    addToCart(book);
    handleClose(); // Ferme la modal après ajout au panier
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <img src={coverImageUrl} alt={`${book.name} cover`} style={imageStyle} />
        <Typography variant="h5" component="h2" sx={{ mt: 2, fontWeight: 'bold' }}>
          {book.name}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Author:</strong> {book.authors.join(', ')}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>ISBN:</strong> {book.isbn}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Publisher:</strong> {book.publisher}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Country:</strong> {book.country}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Released:</strong> {new Date(book.released).toDateString()}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Pages:</strong> {book.numberOfPages}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Media Type:</strong> {book.mediaType}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleAddToCart}>
          Ajouter au panier
        </Button>
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
  maxWidth: '600px',
  textAlign: 'center',
  outline: 'none',
};

const imageStyle = {
  width: '100%',
  maxHeight: '400px',
  objectFit: 'contain',
  borderRadius: '10px',
};

export default BookModal;
