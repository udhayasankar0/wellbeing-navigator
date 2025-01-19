import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Basic health tracking",
      "Medication management",
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
    popular: true,
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
              className={`relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                plan.popular ? "border-2 border-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold text-primary mb-6">
                {plan.price}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-primary mr-2 flex-shrink-0" size={20} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-accent text-primary hover:bg-accent/80"
                }`}
              >
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