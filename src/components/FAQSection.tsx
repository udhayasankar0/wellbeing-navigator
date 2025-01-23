import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the personalized health monitoring feature work?",
    answer:
      "The personalized health monitoring feature allows users to log vital health metrics such as blood glucose levels, blood pressure, heart rate, and activity levels. The AI-driven system analyzes this data in real-time, offering immediate feedback, highlighting potential health risks, and tracking improvements or declines over time.",
  },
  {
    question: "What kind of support does the medication management feature provide?",
    answer:
      "The medication management feature enables users to input their medication schedules, dosages, and refill dates. The system sends automated reminders through push notifications or SMS for medication intake and prescription refills. It also has potential integration with pharmacy systems for seamless prescription management.",
  },
  {
    question: "How does the AI-driven lifestyle modification support benefit users?",
    answer:
      "The AI-driven lifestyle modification support uses personalized data to provide tailored recommendations for diet, exercise, stress management, and sleep improvement. Users can set health-related goals and track their progress through visual dashboards. The AI also conducts comprehensive assessments to offer evidence-based advice.",
  },
  {
    question: "What community engagement features are available on the platform?",
    answer:
      "The platform includes a social feature where users can connect with friends and family to share health achievements and participate in challenges. There are also community health challenges to promote motivation and accountability, along with peer support groups for sharing experiences and tips.",
  },
  {
    question: "What functionalities does the AI chatbot and virtual health assistant offer?",
    answer:
      "The AI chatbot provides instant responses to common health queries, helps schedule appointments, and gives medication information. The virtual health assistant guides users through their care plans, explains dietary recommendations, provides exercise tutorials, and tracks progress to keep users motivated.",
  },
  {
    question: "What kind of support is available?",
    answer:
      "We offer 24/7 customer support through chat and email. Pro and Premium users also get access to priority support and direct communication with healthcare professionals.",
  },
];

const FAQSection = () => {
  const navigate = useNavigate();

  return (
    <section id="faq" className="py-20 bg-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our platform
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left px-6 py-4 text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() => navigate("/congratulations")}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 transform"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;