import { FadeIn } from "@/components/common/Animations";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is your typical response time?",
    answer:
      "We aim to respond to all inquiries within 24 hours during business hours (Monday-Friday, 9am-6pm EST).",
  },
  {
    question: "How can I schedule a demo?",
    answer:
      "You can request a demo through the contact form above, and our sales team will reach out to schedule a time that works best for you.",
  },
  {
    question: "Do you offer enterprise support?",
    answer:
      "Yes! We offer dedicated support for enterprise customers. Contact our sales team to learn more about custom support options.",
  },
  {
    question: "Can I get help with integration?",
    answer:
      "Absolutely! Our technical team can assist with API integration, webhooks, and custom implementations. Reach out to support@chatflow.com.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <FadeIn key={index} delay={0.1 * (index + 1)}>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
