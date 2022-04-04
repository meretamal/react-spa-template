import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '@/components/layout/footer.component';
import Hero from '@/components/layout/hero.component';
import Navbar from '@/components/layout/navbar.component';

const HomePage = lazy(() => import('@/pages/static/home.page'));
const NotFoundPage = lazy(() => import('@/pages/errors/not-found.page'));
const SignInPage = lazy(() => import('@/pages/auth/sign-in.page'));
const SignUpPage = lazy(() => import('@/pages/auth/sign-up.page'));

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Hero navbar />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
