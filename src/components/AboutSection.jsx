const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/about-image.jpg" // You'll need to add this image
                  alt="FYNEÁ Craftsmanship"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute top-0 left-0 -mt-4 -ml-4 w-full h-full border-2 border-pink-200 rounded-lg"></div>
              <div className="absolute bottom-0 right-0 mb-4 mr-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-pink-600 font-serif text-lg">Since 2024</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-gray-900">
                Crafting Elegant Atmospheres
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At FYNEÁ, we believe that every space deserves to be transformed into a sanctuary of elegance and tranquility. Our journey began with a simple vision: to create premium room fragrances that not only enhance your space but elevate your daily experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each FYNEÁ fragrance is carefully crafted using the finest ingredients, blending traditional artisanal methods with modern innovation. Our commitment to quality and sustainability ensures that every product not only smells divine but also contributes to a better world.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-pink-50 rounded-lg">
                  <h4 className="text-xl font-serif font-semibold text-pink-600 mb-2">Artisanal</h4>
                  <p className="text-gray-600">Handcrafted with care and precision</p>
                </div>
                <div className="text-center p-6 bg-pink-50 rounded-lg">
                  <h4 className="text-xl font-serif font-semibold text-pink-600 mb-2">Premium</h4>
                  <p className="text-gray-600">Finest quality ingredients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600">Every product meets our high standards of excellence</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8 4-8-4m16 0l-8 4m8 4l-8 4m8-4l-8 4m8-4v10M4 7l8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">Sustainable</h4>
              <p className="text-gray-600">Eco-friendly practices and packaging</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">Customer Satisfaction</h4>
              <p className="text-gray-600">Dedicated to exceeding expectations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 