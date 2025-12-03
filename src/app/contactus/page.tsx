import Navbar from "@/components/common/Navbar";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <ContactHeader />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-12">
            <ContactInfo />
            <ContactForm formspreeId="YOUR_FORM_ID" />
          </div>
        </div>

        <ContactFAQ />
      </div>
    </>
  );
}
