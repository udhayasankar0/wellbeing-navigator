import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI Health Assistant work?",
    answer:
      "Our AI Health Assistant uses advanced machine learning to analyze your health data, provide personalized recommendations, and alert you to potential health concerns. It learns from your patterns and adapts to provide better support over time.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "Yes, we take data security very seriously. All your health data is encrypted and stored securely following HIPAA compliance standards. We never share your personal information without your explicit consent.",
  },
  {
    question: "Can I use the platform with my existing medical devices?",
    answer:
      "Yes, our platform is compatible with most modern medical devices and can integrate with various health monitoring equipment. Check our compatibility list for specific devices.",
  },
  {
    question: "What kind of support is available?",
    answer:
      "We offer 24/7 customer support through chat and email. Pro and Premium users also get access to priority support and direct communication with healthcare professionals.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our platform
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;