import React from 'react';
import { Link } from 'react-router-dom';

function Herder() {
  const currentPath = window.location.pathname;
  const isActive = (path) => currentPath === path;
  
  return (
    <header className="text-black shadow-md rounded-2xl bg-gray-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">MINI PROJECT</h1>
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link
                to="/"
                className={`${isActive('/') ? 'border-b-4 border-black-500 font-bold' : 'hover:text-gray-600'} `}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={`${isActive('/About') ? 'border-b-4 border-black-500 font-bold' : 'hover:text-gray-600'} `}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/ApiData"
                className={`${isActive('/ApiData') ? 'border-b-4 border-black-500 font-bold' : 'hover:text-gray-600'} `}
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

export default Herder;
