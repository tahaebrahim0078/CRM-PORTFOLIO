"use client";

import Link from "next/link";
import { RiChatSmileAiLine } from "react-icons/ri";
import NavMobile from "@/components/common/NavMobile";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 bg-white/40 backdrop-blur-lg border-b border-gray-200"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2  rounded-lg"
            aria-label="ChatFlow Home"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigoCustom to-purpleCustom rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg" aria-hidden="true">
                <RiChatSmileAiLine />
              </span>
            </div>
            <span className="font-bold text-xl text-gray-900">ChatFlow</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-gray-700 hover:text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1"
            >
              Features
            </Link>
            <Link
              href="/aboutus"
              className="text-gray-700 hover:text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1"
            >
              About Us
            </Link>
            <Link
              href="/contactus"
              className="text-gray-700 hover:text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1"
            >
              Contact Us
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1"
            >
              Pricing
            </Link>
          </div>
          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://crm-dashboard-orcin.vercel.app/"
              className="bg-gradient-to-br from-indigoCustom to-purpleCustom text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-label="Start Free Trial"
            >
              Start Free Trial
            </Link>
          </div>
          {/* Mobile */}
          <NavMobile />
        </div>
      </div>
    </nav>
  );
}
