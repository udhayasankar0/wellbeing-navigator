import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Basic health tracking",
      "Community access",
      "Emergency alerts",
      "Mobile app access",
    ],
  },
  {
    name: "Pro",
    price: "₹799/mo",
    features: [
      "Everything in Basic",
      "AI Health Assistant",
      "24/7 Support",
      "Detailed analytics",
      "Family member access",
    ],
  },
  {
    name: "Premium",
    price: "₹1299/mo",
    features: [
      "Everything in Pro",
      "Priority support",
      "Personalized health coach",
      "Custom health plans",
      "Advanced analytics",
      "Multiple family accounts",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold text-primary mb-6">
                {plan.price}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-primary mr-2" size={20} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;