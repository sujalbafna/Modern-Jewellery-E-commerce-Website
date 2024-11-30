import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[90vh] bg-[#FDF8F6]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80"
          alt="Model wearing elegant earrings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full">
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h1 className="text-5xl font-serif text-gray-900 mb-6">
            Elevate Your Elegance
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our curated collection of handcrafted earrings, where timeless beauty meets contemporary design.
          </p>
          <button className="bg-[#B76E79] text-white px-8 py-3 rounded-full w-fit hover:bg-[#A25D68] transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
}