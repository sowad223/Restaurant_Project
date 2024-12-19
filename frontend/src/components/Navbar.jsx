// Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#800000] to-[#4B0000] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left section: Restaurant Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">BFC Racket</h1>
          </div>

          {/* Middle section: Navigation links */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <a
              href="#"
              className="text-lg font-semibold text-white mr-8 hover:text-gray-300 transition duration-300"
            >
              Menu
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Takeaway
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Dine-in
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Delivery
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Custom Order
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Right section: Login/Signup and Cart button */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-4">
              <button className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300">
                Login / Signup
              </button>
              <button className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden m-8 flex flex-col items-center space-y-4">
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Menu
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Takeaway
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Dine-in
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Delivery
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            >
              Custom Order
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
