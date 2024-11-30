import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Aurélie</h3>
            <p className="text-gray-400">
              Handcrafted jewelry for the modern woman.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/shop" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Customer Care</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/shipping" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="/returns" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#B76E79] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#B76E79] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#B76E79] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Aurélie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}