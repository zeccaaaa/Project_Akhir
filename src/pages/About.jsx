import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-pink-50 to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center">
            About FYNEÁ
          </h1>
          <div className="w-20 h-1 bg-pink-600 mx-auto mt-4"></div>
        </div>
      </div>
      <AboutSection />
    </div>
  );
};

export default About; 