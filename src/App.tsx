import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages 

import Login from './pages/login';
import Home from './pages/home';
import BookViewPage from './pages/bookViewPag';
import Perfil from './pages/perfil';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookViewPage />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}