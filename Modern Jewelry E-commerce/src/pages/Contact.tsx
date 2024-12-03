import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsappIcon } from '../components/icons/WhatsappIcon';

export function Contact() {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/10101234567';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-4xl font-serif text-gray-900 mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-8">
              Get in touch with us on WhatsApp for inquiries, orders, and customer support.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#128C7E] transition-colors"
            >
              <WhatsappIcon className="w-6 h-6" />
              <span>Chat with Us on WhatsApp</span>
            </button>
            
            <p className="mt-8 text-sm text-gray-500">
              Available Monday to Saturday, 10:00 AM - 7:00 PM IST
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}