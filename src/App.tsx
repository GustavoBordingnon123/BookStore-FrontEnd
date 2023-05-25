import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import BookViewPage from './pages/bookViewPag';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id" element={<BookViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}