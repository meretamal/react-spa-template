import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '@/components/layout/footer.component';
import HomePage from '@/pages/static/home.page';
import Navbar from '@/components/layout/navbar.component';
import NotFoundPage from '@/pages/errors/not-found.page';
import SignInPage from '@/pages/auth/sign-in.page';
import SignUpPage from '@/pages/auth/sign-up.page';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
