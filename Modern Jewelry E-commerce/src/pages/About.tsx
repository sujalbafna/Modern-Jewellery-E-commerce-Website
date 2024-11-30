import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif text-gray-900 mb-8 text-center">About Us</h1>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                Welcome to Aurélie, your destination for exquisite handcrafted jewelry. We take pride in offering unique pieces that blend traditional craftsmanship with contemporary design.
              </p>

              <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6">How to Purchase</h2>
              <div className="bg-[#FDF8F6] p-6 rounded-lg mb-8">
                <ol className="list-decimal list-inside space-y-4">
                  <li>Browse our collections and find your perfect piece</li>
                  <li>Take a screenshot or save the image of your desired jewelry</li>
                  <li>Click the Contact button or visit our WhatsApp</li>
                  <li>Send us the image along with your inquiry</li>
                  <li>We'll provide pricing and payment details via WhatsApp</li>
                  <li>Complete your purchase securely through our supported payment methods</li>
                </ol>
              </div>

              <h2 className="text-2xl font-serif text-gray-900 mt-12 mb-6">Our Commitment</h2>
              <p className="text-gray-600 mb-6">
                Each piece is carefully crafted to ensure the highest quality and attention to detail. We believe in creating jewelry that not only looks beautiful but also tells a story.
              </p>

              <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600">
                  For inquiries and purchases, reach out to us on WhatsApp:
                </p>
                <a
                  href="https://wa.me/917249260870"
                  className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-full mt-4 hover:bg-[#128C7E] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}