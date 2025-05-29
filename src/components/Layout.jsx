import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-serif font-bold text-pink-600">FYNEÁ</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                About
              </Link>
              <Link
                to="/product"
                className={`text-sm font-medium transition-colors ${
                  isActive('/product') ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                Product
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/') ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/about') ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/product"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/product') ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Product
                </Link>
                <Link
                  to="/contact"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/contact') ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-50 to-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-serif font-bold text-pink-600">FYNEÁ</span>
              <p className="text-gray-600 mt-2">Elevate your space with elegant fragrances</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} FYNEÁ. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 