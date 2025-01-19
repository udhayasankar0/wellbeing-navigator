import { Brain, Activity, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Health Assistant",
    description:
      "24/7 intelligent support for managing your health with personalized recommendations.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Track your vital signs and symptoms with advanced monitoring technology.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Connect with others on similar health journeys for support and shared experiences.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the tools that make managing your health easier and more
            effective.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;