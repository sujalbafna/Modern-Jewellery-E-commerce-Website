import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <Link to={`/shop/${id}`} className="group">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="mt-1 text-sm font-medium text-gray-900">{price}</p>
      </div>
    </Link>
  );
}