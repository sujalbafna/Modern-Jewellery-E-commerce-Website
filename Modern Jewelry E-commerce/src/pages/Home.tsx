import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { CategoryCarousel } from '../components/home/CategoryCarousel';
import { Newsletter } from '../components/home/Newsletter';

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <CategoryCarousel />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}