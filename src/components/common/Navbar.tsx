"use client";

import Link from "next/link";
import NavMobile from "@/components/common/NavMobile";
import Image from "next/image";
import logo from "../../../public/ConnectorIcon.png";
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
            className="flex items-center justify-center  gap-2  rounded-lg"
            aria-label="Connector Home"
          >
            <div className="w-10 h-10 relative">
              <Image
                src={logo}
                alt="Connector Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <span className="font-bold text-xl text-gray-900">Connector</span>
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
              href="https://valahala-dashboard.vercel.app/"
              className="bg-linear-to-br from-indigoCustom to-purpleCustom text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-purple-600"
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
