// src/components/BookItem.js
import React, { useState } from 'react';
import { getCoverImageUrl } from '../utils';
import BookModal from './BookModal';

const BookItem = ({ book }) => {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const coverImageUrl = getCoverImageUrl(book.isbn);

  return (
    <div>
      <div className="book-item" onClick={handleOpen}>
        <img src={coverImageUrl} alt={`${book.name} cover`} />
        <h2>{book.name}</h2>
        <p>Author: {book.authors.join(', ')}</p>
        <p>Released: {new Date(book.released).toDateString()}</p>
      </div>
      <BookModal book={book} open={open} handleClose={handleClose} />
    </div>
  );
};

export default BookItem;
