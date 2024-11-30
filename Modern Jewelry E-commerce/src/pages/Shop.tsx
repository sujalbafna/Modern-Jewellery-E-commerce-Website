import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProductGrid } from '../components/shop/ProductGrid';

export function Shop() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-gray-900 mb-4">Our Collection</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handcrafted pieces, each designed to add a touch of elegance to your style.
            </p>
          </div>
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}