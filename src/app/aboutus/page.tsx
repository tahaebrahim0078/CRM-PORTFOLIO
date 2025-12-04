import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us | ChatFlow CRM",
  description:
    "Learn about ChatFlow CRM, our mission, team, and values. We're building the future of customer communication.",
  openGraph: {
    title: "About Us | ChatFlow CRM",
    description: "Learn about ChatFlow CRM, our mission, team, and values.",
    type: "website",
  },
};
const leader = [
  {
    name: "Taha Ibrahim",
    position: "Developer & CEO",
    image:
      "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764790784/WhatsApp_Image_2025-12-03_at_21.32.32_63aeea05_copy_huvosh.jpg",
  },
  {
    name: "Amr Magdy",
    position: "Developer & CEO",
    image:
      "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764790784/WhatsApp_Image_2025-12-03_at_21.32.32_a1dd7a56_copy_bl94my.jpg",
  },
  {
    name: "Ahmed Atya",
    position: "Developer & CEO",
    image:
      "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764790784/WhatsApp_Image_2025-12-03_at_21.32.32_9b5a4592_copy_mfk2gc.jpg",
  },
];
export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-linear-to-br from-purple-50 to-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About ChatFlow CRM
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re on a mission to revolutionize customer communication
              through intelligent, multi-agent chat solutions.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  At ChatFlow CRM, we believe that exceptional customer service
                  shouldn&apos;t be complicated. We&apos;re building tools that
                  empower businesses of all sizes to deliver world-class support
                  through intelligent, multi-agent chat systems.
                </p>
                <p className="text-lg text-gray-600">
                  Our platform combines ease of integration, powerful analytics,
                  and intelligent agent management to create a seamless customer
                  communication experience.
                </p>
              </div>
              <div className="bg-linear-to-br from-purple-100 to-blue-100 rounded-2xl p-12 h-72 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold text-purpleCustom  mb-2">
                    +500K
                  </p>
                  <p className="text-gray-700">Conversations Powered Daily</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We continuously push boundaries to deliver cutting-edge
                  solutions that help our customers stay ahead of the curve.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Simplicity
                </h3>
                <p className="text-gray-600">
                  Complex problems deserve simple solutions. We design with our
                  users in mind, removing friction at every step.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Reliability
                </h3>
                <p className="text-gray-600">
                  Our customers trust us with their critical communications. We
                  maintain 99.9% uptime and exceptional support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Built by Experts
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Our team brings together decades of experience in customer
              service, AI, and enterprise software.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {leader.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="96px" 
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-linear-to-br from-indigoCustom to-purpleCustom text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">2025</p>
                <p className="text-purple-100">Founded</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">5K+</p>
                <p className="text-purple-100">Active Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-purple-100">Team Members</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">99.9%</p>
                <p className="text-purple-100">Uptime SLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join us on our journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Experience the future of customer communication with ChatFlow CRM.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://crm-dashboard-orcin.vercel.app/"
                className="bg-linear-to-br from-indigoCustom to-purpleCustom text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Start Free Trial
              </Link>
              <Link
                href="/"
                className="border-2 border-indigoCustom text-indigoCustom px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Back Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
