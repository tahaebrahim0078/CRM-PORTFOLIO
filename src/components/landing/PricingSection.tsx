import Link from "next/link";
import PricingGrid from "./PricingGrid";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600">
            Flexible pricing options to fit businesses of all sizes
          </p>
        </div>

        {/* Pricing Cards */}
        <PricingGrid />

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <Link
            href="/contact"
            className="text-purple-600 font-bold hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1"
          >
            Questions? Contact our sales team →
          </Link>
        </div>
      </div>
    </section>
  );
}
