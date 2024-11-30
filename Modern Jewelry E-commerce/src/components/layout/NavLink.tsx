import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? 'text-[#B76E79]'
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
    </Link>
  );
}