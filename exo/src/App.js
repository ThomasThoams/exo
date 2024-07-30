import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home.js';
import BookDetail from './Page/BookDetail.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:name" element={<BookDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
