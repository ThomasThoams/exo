// src/pages/Home.js
import React, { useState } from 'react';
import BookList from '../Components/BookList';
import books from '../books.json';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const regex = new RegExp(query, 'i');
      const filtered = books.filter(book => 
        regex.test(book.name) || book.authors.some(author => regex.test(author))
      );      
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredBooks(books);
  };

  return (
    <div>
      <h1>Book List</h1>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for a book or author..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button onClick={clearSearch}>Clear</button>
      </div>
      <BookList books={filteredBooks} />
    </div>
  );
};

export default Home;
