"use client";

import Navbar from "@/components/common/Navbar";
import PricingSection from "@/components/landing/PricingSection";
import { FadeIn } from "@/components/common/Animations";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your business. All plans include a
                14-day free trial.
              </p>
            </FadeIn>
          </div>
        </div>

        <PricingSection />

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Frequently Asked Questions
              </h2>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Can I change plans anytime?
                  </h3>
                  <p className="text-gray-600">
                    Yes! You can upgrade or downgrade your plan at any time.
                    Changes take effect immediately, and we&apos;ll prorate your
                    billing accordingly.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Do you offer discounts for annual billing?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We offer 20% off when you choose annual billing.
                    Contact our sales team to learn more about enterprise
                    discounts.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600">
                    We accept all major credit cards (Visa, Mastercard, American
                    Express), PayPal, and bank transfers for enterprise
                    customers.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Is there a contract required?
                  </h3>
                  <p className="text-gray-600">
                    No contracts required! You can cancel anytime. Enterprise
                    customers can discuss custom terms with our sales team.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
