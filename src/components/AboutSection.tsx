const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-primary">YourWellbeing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're on a mission to transform <span className="text-primary">chronic disease management</span> through
            technology and compassion.
          </p>
          <p className="text-gray-600 mb-8">
            Founded by <span className="text-primary">healthcare professionals</span> and <span className="text-primary">technology experts</span>, YourWellbeing
            combines cutting-edge <span className="text-primary">AI technology</span> with human-centered care to provide
            comprehensive support for individuals managing chronic conditions.
          </p>
          <a
            href="https://www.linkedin.com/in/udhayasankar1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;