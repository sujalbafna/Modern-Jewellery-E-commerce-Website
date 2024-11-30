import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif text-gray-900">Aurélie</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/collections">Collections</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}