import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  return (
    <header className="text-black shadow-md rounded-2xl bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">MINI PROJECT</h1>
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link
                to="/"
                className={`${isActive('/') ? 'border-b-4 border-black font-bold' : 'hover:text-gray-600'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${isActive('/about') ? 'border-b-4 border-black font-bold' : 'hover:text-gray-600'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/apiData"
                className={`${isActive('/apiData') ? 'border-b-4 border-black font-bold' : 'hover:text-gray-600'}`}
              >
                API Data
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
