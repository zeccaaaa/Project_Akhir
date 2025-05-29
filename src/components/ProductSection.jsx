const products = [
  {
    id: 1,
    name: 'Lavender Dreams',
    description: 'A soothing blend of lavender and vanilla',
    price: '$29.99',
    image: '/product1.jpg',
  },
  {
    id: 2,
    name: 'Rose Garden',
    description: 'Fresh rose petals with a hint of jasmine',
    price: '$34.99',
    image: '/product2.jpg',
  },
  {
    id: 3,
    name: 'Ocean Breeze',
    description: 'Fresh and clean scent with marine notes',
    price: '$29.99',
    image: '/product3.jpg',
  },
  {
    id: 4,
    name: 'Citrus Burst',
    description: 'Energizing blend of citrus fruits',
    price: '$32.99',
    image: '/product4.jpg',
  },
  {
    id: 5,
    name: 'Vanilla Comfort',
    description: 'Warm and cozy vanilla fragrance',
    price: '$27.99',
    image: '/product5.jpg',
  },
  {
    id: 6,
    name: 'Fresh Linen',
    description: 'Clean and fresh linen scent',
    price: '$29.99',
    image: '/product6.jpg',
  },
];

const ProductSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Collection
            </h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Discover our premium range of room fragrances, each carefully crafted to create the perfect atmosphere for your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className="relative aspect-w-4 aspect-h-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-serif font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-gray-600">{product.description}</p>
                  <p className="mt-2 text-pink-600 font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-8">
              Why Choose FYNEÁ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-pink-50 rounded-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-serif font-semibold text-gray-900 mb-2">Premium Quality</h4>
                <p className="text-gray-600">Made with the finest ingredients for long-lasting fragrance</p>
              </div>
              
              <div className="p-6 bg-pink-50 rounded-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-serif font-semibold text-gray-900 mb-2">Elegant Design</h4>
                <p className="text-gray-600">Beautiful packaging that complements your decor</p>
              </div>
              
              <div className="p-6 bg-pink-50 rounded-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="text-lg font-serif font-semibold text-gray-900 mb-2">Eco-Friendly</h4>
                <p className="text-gray-600">Sustainable packaging and natural ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection; 