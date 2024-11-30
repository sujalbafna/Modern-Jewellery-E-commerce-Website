import React from 'react';
import { ProductCard } from './ProductCard';

const products = [
  {
    id: '1',
    name: 'Crystal Drop Earrings',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80',
    category: 'Danglers',
  },
  {
    id: '2',
    name: 'Gold Hoop Earrings',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80',
    category: 'Hoops',
  },
  {
    id: '3',
    name: 'Pearl Stud Earrings',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1633810542706-90e5ff7557be?auto=format&fit=crop&q=80',
    category: 'Studs',
  },
  // Add more products as needed
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}