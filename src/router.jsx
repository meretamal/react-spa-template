import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '@components/layout/footer.component';
import HomePage from '@pages/static/home.page';
import Navbar from '@components/layout/navbar.component';
import NotFoundPage from '@pages/errors/not-found.page';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
