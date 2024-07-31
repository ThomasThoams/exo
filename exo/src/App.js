// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home.js';
import BookDetail from './Page/BookDetail.js';
import CartProvider from './Context/CartContext.js';
import CartModal from './Components/CartModal.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);

  return (
    <CartProvider>
      <Router>
        <header>
          <h1>Bookstore</h1>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" style={{ cursor: 'pointer' }} onClick={handleCartOpen} />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:name" element={<BookDetail />} />
        </Routes>
        <CartModal open={cartOpen} handleClose={handleCartClose} />
      </Router>
    </CartProvider>
  );
};

export default App;
