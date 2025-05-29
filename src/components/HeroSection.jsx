import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 to-white min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          {/* Add decorative floral patterns here */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Transform Your Space with <span className="text-pink-600">FYNÉA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our collection of premium room fragrances, crafted to create an atmosphere of elegance and tranquility in your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/product"
                className="px-8 py-3 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition-colors text-center"
              >
                Explore Collection
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 border-2 border-pink-600 text-pink-600 font-medium rounded-full hover:bg-pink-50 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img
                src="/hero-product.jpg" // You'll need to add this image
                alt="FYNEÁ Premium Room Fragrance"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-full h-full border-2 border-pink-200 rounded-lg"></div>
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-full h-full border-2 border-gold-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 