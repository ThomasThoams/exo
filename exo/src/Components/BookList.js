import React from 'react';
import books from '../books.json';
import BookItem from './BookItem';

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
