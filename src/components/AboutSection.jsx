const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Story FYNÉA
            </h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="pengharum ruangan.jpg" 
                  alt="FYNEÁ Craftsmanship"
                  className="rounded-md shadow-lg "
                />
              </div>
              <div className="absolute top-0 left-0 -mt-4 -ml-4 w-full h-full border-2 border-pink-200 rounded-lg"></div>
                <div className="p-4 ">
                  <p className="text-pink-600 font-serif text-lg">Since 2000</p>
                </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-gray-900">
                Menciptakan Suasana Elegan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At FYNÉA, kami percaya bahwa setiap ruang layak diubah menjadi tempat yang elegan dan tenang. Perjalanan kami dimulai dengan visi sederhana: menciptakan wewangian ruangan premium yang tidak hanya memperindah ruang Anda tetapi juga meningkatkan pengalaman harian Anda.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Setiap wewangian FYNÉA dibuat dengan teliti menggunakan bahan-bahan terbaik, menggabungkan metode tradisional dengan inovasi modern. Komitmen kami terhadap kualitas dan keberlanjutan memastikan bahwa setiap produk tidak hanya harum memikat tetapi juga berkontribusi pada dunia yang lebih baik.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-pink-50 rounded-lg">
                  <h4 className="text-xl font-serif font-semibold text-pink-600 mb-2">Tradisional</h4>
                  <p className="text-gray-600">Dibuat dengan tangan secara teliti dan presisi</p>
                </div>
                <div className="text-center p-6 bg-pink-50 rounded-lg">
                  <h4 className="text-xl font-serif font-semibold text-pink-600 mb-2">Premium</h4>
                  <p className="text-gray-600">Bahan baku berkualitas terbaik</p>
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
              <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">Kualitas Terjamin</h4>
              <p className="text-gray-600">Setiap produk memenuhi standar kualitas tinggi kami</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8 4-8-4m16 0l-8 4m8 4l-8 4m8-4l-8 4m8-4v10M4 7l8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">Berkelanjutan</h4>
              <p className="text-gray-600">Praktik ramah lingkungan dan kemasan yang ramah lingkungan</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-semibold text-gray-900 mb-2">Kepuasan Pelanggan</h4>
              <p className="text-gray-600">Komitmen untuk melampaui ekspektasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 