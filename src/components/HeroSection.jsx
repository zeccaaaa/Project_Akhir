import { Link } from "react-router-dom";

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
              Transform Your Space with{" "}
              <span className="text-pink-600">FYNÉA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Rasakan nuansa mewah dan ketenangan dengan koleksi wewangian
              ruangan premium dari FYNÉA. Dirancang khusus untuk menciptakan
              atmosfer yang elegan, nyaman, dan memikat di setiap ruang tempat
              Anda berada.
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
          <div className="w-full md:w-1/2 relative flex justify-center ml-10">
            <div className="relative z-10">
              <img
                src="home.jpg" // You'll need to add this image
                alt="FYNEÁ Premium Room Fragrance"
                className="rounded-lg shadow-2xl w-[500px] h-[500px] object-cover z-10"
              />
            </div>
            <div className="absolute right-2 bottom-2 z-0 w-[340px] h-[430px] border-2 border-pink-200 rounded-lg"></div>
            <div className="absolute right-4 bottom-4 z-0 w-[340px] h-[430px] border-2 border-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;