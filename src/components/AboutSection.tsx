const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About YourWellbeing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're on a mission to transform chronic disease management through
            technology and compassion.
          </p>
          <p className="text-gray-600 mb-8">
            Founded by healthcare professionals and technology experts, YourWellbeing
            combines cutting-edge AI technology with human-centered care to provide
            comprehensive support for individuals managing chronic conditions.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;