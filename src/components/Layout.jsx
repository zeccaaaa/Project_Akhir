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
              <span className="text-3xl font-serif font-bold text-pink-600">FYNÉA</span>
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
      <footer className="bg-gray-100 text-gray-700 pt-10 pb-4 mt-16">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
    {/* Logo & Subscribe */}
    <div>
      <h2 className="text-xl font-bold mb-1">FYNÉA</h2>
      <p className="text-gray-500 mb-4">Your Tagline here</p>
      <p className="font-semibold mb-2">Subscribe Now</p>
      <div className="flex items-center border-b border-gray-400 py-1 mb-2">
        <span className="text-sm mr-2">✉️</span>
        <input
          type="email"
          placeholder="Enter your Email"
          className="bg-transparent focus:outline-none w-full"
        />
      </div>
      <button className="bg-black text-white text-xs px-4 py-1 mt-2">Subscribe</button>
    </div>

    {/* Information */}
    <div>
      <h3 className="font-semibold mb-2">Information</h3>
      <ul className="space-y-1">
        <li><a href="#">About FYNÉA</a></li>
        <li><a href="#">More Search</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Events</a></li>
      </ul>
    </div>

    {/* Helpful Links */}
    <div>
      <h3 className="font-semibold mb-2">Helpful Links</h3>
      <ul className="space-y-1">
        <li><a href="#">Services</a></li>
        <li><a href="#">Supports</a></li>
        <li><a href="#">Terms & Condition</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Our Services */}
    <div>
      <h3 className="font-semibold mb-2">Our Services</h3>
      <ul className="space-y-1">
        <li><a href="#">Brands list</a></li>
        <li><a href="#">Order</a></li>
        <li><a href="#">Return & Exchange</a></li>
        <li><a href="#">Fashion list</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>

    {/* Contact Us */}
    <div>
      <h3 className="font-semibold mb-2">Contact Us</h3>
      <p className="flex items-center gap-2"><span>📞</span> +91 9999 999 999</p>
      <p className="flex items-center gap-2"><span>✉️</span> fynea.com</p>
      <div className="flex gap-3 mt-3 text-black">
        <a href="#"><span className="text-xl">🔵</span></a>
        <a href="#"><span className="text-xl">🔴</span></a>
        <a href="#"><span className="text-xl">⚫</span></a>
        <a href="#"><span className="text-xl">🟣</span></a>
      </div>
    </div>
  </div>

  {/* Bottom Footer */}
  <div className="mt-10 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
    2018 © companyLtd. | All Right reserved
    <div className="mt-1 space-x-3">
      <a href="#">FAQ</a>
      <a href="#">Privacy</a>
      <a href="#">Terms & Condition</a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Layout; 