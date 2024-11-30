import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Studs',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Hoops',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Danglers',
    image: 'https://images.unsplash.com/photo-1633810542706-90e5ff7557be?auto=format&fit=crop&q=80',
  },
];

export function CategoryCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-medium text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/collections"
            className="inline-block bg-[#B76E79] text-white px-8 py-3 rounded-full hover:bg-[#A25D68] transition-colors"
          >
            View All Collections (50+)
          </a>
        </div>
      </div>
    </section>
  );
}