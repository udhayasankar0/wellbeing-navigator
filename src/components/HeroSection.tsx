import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent to-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Take Control of Your Health Journey
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Your comprehensive platform for managing chronic conditions with
          personalized care and support.
        </p>
        <div className="space-x-4 mb-16 animate-fade-in">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300">
            Get Started Free
          </button>
          <button className="bg-white text-primary px-8 py-3 rounded-lg border-2 border-primary hover:bg-accent transition-colors duration-300">
            Watch Demo
          </button>
        </div>
        <button
          onClick={scrollToFeatures}
          className="animate-bounce text-gray-600 hover:text-primary transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;