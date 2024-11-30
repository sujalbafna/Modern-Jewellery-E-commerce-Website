import React from 'react';

export function Newsletter() {
  return (
    <section className="bg-[#FDF8F6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-serif text-gray-900 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to receive updates about new collections, special offers, and styling tips.
        </p>
        
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B76E79] focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-[#B76E79] text-white px-6 py-2 rounded-full hover:bg-[#A25D68] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}