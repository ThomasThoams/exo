// src/Page/BookDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../books.json';

const BookDetail = () => {
  const { name } = useParams();
  const book = books.find(b => b.name === name);

  if (!book) return <h2>Book not found</h2>;

  return (
    <div>
      <h1>{book.name}</h1>
      <p>Author: {book.authors.join(', ')}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Publisher: {book.publisher}</p>
      <p>Country: {book.country}</p>
      <p>Released: {new Date(book.released).toDateString()}</p>
      <p>Pages: {book.numberOfPages}</p>
      <p>Media Type: {book.mediaType}</p>
    </div>
  );
};

export default BookDetail;
