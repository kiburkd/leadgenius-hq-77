import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does LeadGenius use AI to generate leads?",
    answer: "LeadGenius leverages advanced machine learning algorithms to analyze vast amounts of data, identifying patterns and potential leads that match your ideal customer profile. Our AI continuously learns from successful conversions to improve targeting accuracy."
  },
  {
    question: "What integrations does LeadGenius support?",
    answer: "LeadGenius integrates seamlessly with popular CRM platforms, email marketing tools, and sales automation software. Key integrations include Salesforce, HubSpot, Mailchimp, and Zapier, allowing you to maintain your existing workflow."
  },
  {
    question: "Is my data secure with LeadGenius?",
    answer: "Yes, we take data security seriously. LeadGenius employs enterprise-grade encryption, regular security audits, and complies with GDPR and CCPA regulations. Your data is stored in secure, SOC 2 compliant data centers."
  },
  {
    question: "Can I export leads to my CRM?",
    answer: "Absolutely! LeadGenius provides one-click export functionality to all major CRM platforms. You can also set up automatic syncing to keep your lead database up to date across all your tools."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 customer support through chat, email, and phone. Enterprise customers get dedicated account managers and priority support. Our knowledge base and video tutorials are available to all users."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-800 font-medium">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about LeadGenius
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;