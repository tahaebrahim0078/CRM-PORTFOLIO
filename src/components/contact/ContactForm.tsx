"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { FadeIn, HoverScale } from "@/components/common/Animations";

interface ContactFormProps {
  onSubmit?: (data: {
    name: string;
    email: string;
    company: string;
    message: string;
  }) => Promise<void>;
  formspreeId?: string;
}

export default function ContactForm({
  onSubmit,
  formspreeId = "YOUR_FORM_ID",
}: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    isSubmitting: false,
    isSubmitted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, isSubmitting: true }));

    try {
      const formData = {
        name: formState.name,
        email: formState.email,
        company: formState.company,
        message: formState.message,
      };

      if (onSubmit) {
        await onSubmit(formData);
      } else {
        const response = await fetch(`https://formspree.io/f/xwpgbpnw`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }
      }

      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
        isSubmitting: false,
        isSubmitted: true,
      });

      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSubmitted: false }));
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  return (
    <div className="md:col-span-2">
      <FadeIn direction="right" delay={0.2}>
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Send us a Message
          </h2>

          {formState.isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 font-semibold">
                ✓ Thank you! Your message has been sent successfully. We&apos;ll
                get back to you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                placeholder="Tell us how we can help..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none bg-white"
              />
            </div>

            {/* Submit Button */}
            <HoverScale>
              <button
                type="submit"
                disabled={formState.isSubmitting}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {formState.isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </HoverScale>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            We respect your privacy. Your information will never be shared.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
