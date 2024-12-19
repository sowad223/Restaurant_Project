// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-red-700 shadow-lg text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm">Learn more about our restaurant.</p>
            <a href="/about" className="text-sm mt-2 block hover:text-gray-300">Read more</a>
          </div>

          {/* Feedback */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Feedback</h3>
            <p className="text-sm">Give us your valuable feedback.</p>
            <a href="/feedback" className="text-sm mt-2 block hover:text-gray-300">Submit feedback</a>
          </div>

          {/* Contact Us */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-sm">Get in touch with our team.</p>
            <a href="/contact" className="text-sm mt-2 block hover:text-gray-300">Contact information</a>
          </div>

          {/* Find Us Near You */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Find Us Near You</h3>
            <p className="text-sm">Locate our nearest restaurant.</p>
            <a href="/locations" className="text-sm mt-2 block hover:text-gray-300">View locations</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center mt-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/youtube-icon.png" alt="YouTube" className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Your Restaurant. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ by Your Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;