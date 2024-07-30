// src/components/BookItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCoverImageUrl } from '../utils';

const BookItem = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${book.name}`);
  };

  const coverImageUrl = getCoverImageUrl(book.isbn);

  return (
    <div className="book-item" onClick={handleClick}>
      <img src={coverImageUrl} alt={`${book.name} cover`} />
      <h2>{book.name}</h2>
      <p>Author: {book.authors.join(', ')}</p>
      <p>Released: {new Date(book.released).toDateString()}</p>
    </div>
  );
};

export default BookItem;
