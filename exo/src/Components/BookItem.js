import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookItem = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${book.name}`);
  };

  return (
    <div className="book-item" onClick={handleClick}>
      <h2>{book.name}</h2>
      <p>Author: {book.authors.join(', ')}</p>
      <p>Released: {new Date(book.released).toDateString()}</p>
    </div>
  );
};

export default BookItem;
