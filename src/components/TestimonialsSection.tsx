import { User } from "lucide-react";

const testimonials = [
  {
    quote:
      "This platform has completely transformed how I manage my diabetes. The AI assistant is incredibly helpful!",
    name: "Sarah Johnson",
    role: "Type 1 Diabetes Patient",
  },
  {
    quote:
      "The real-time monitoring has given me peace of mind. I can now track my health metrics effortlessly.",
    name: "Michael Chen",
    role: "Heart Patient",
  },
  {
    quote:
      "The community support feature helped me connect with others who understand my journey. It's been invaluable.",
    name: "Priya Patel",
    role: "Chronic Pain Manager",
  },
  {
    quote:
      "As a healthcare provider, I've seen remarkable improvements in my patients who use this platform.",
    name: "Dr. James Wilson",
    role: "Cardiologist",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from people who've transformed their health journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-accent rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;