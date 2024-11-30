import React from 'react';
import { Link } from 'react-router-dom';

interface CollectionCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

export function CollectionCard({ id, name, description, image }: CollectionCardProps) {
  return (
    <Link to={`/collections/${id}`} className="block h-full group">
      <div className="relative h-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-sm font-medium text-white">{name}</h3>
            <p className="text-xs text-white/80">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}