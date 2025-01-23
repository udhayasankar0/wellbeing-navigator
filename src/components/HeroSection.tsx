import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
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
        <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Take Control of Your{" "}
          <span className="text-primary">Health Journey</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Your comprehensive platform for managing <span className="text-primary">chronic conditions</span> with
          <span className="text-primary"> personalized care</span> and <span className="text-primary">support</span>.
        </p>
        <div className="space-x-4 mb-16 animate-fade-in">
          <button 
            onClick={() => navigate("/congratulations")}
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 hover:scale-105 transform"
          >
            Get Started Free
          </button>
          <a
            href="https://www.linkedin.com/in/udhayasankar1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg border-2 border-primary hover:bg-accent transition-colors duration-300 hover:scale-105 transform"
          >
            Learn More About Us
          </a>
        </div>
        <button
          onClick={scrollToFeatures}
          className="animate-bounce text-gray-600 hover:text-primary transition-colors duration-300"
          aria-label="Scroll to features"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;