import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '@components/layout/footer.component';
import Home from '@pages/static/home.page';
import Navbar from '@components/layout/navbar.component';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
