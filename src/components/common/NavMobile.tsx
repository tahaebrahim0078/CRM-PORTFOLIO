"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded p-2"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 bg-white border-b border-gray-200 rounded-b-2xl h-80 shadow-lg z-40 pb-4 space-y-2"
          role="menu"
        >
          <Link
            href="/#features"
            className="block text-gray-700 hover:text-gray-900 font-medium py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-6"
            onClick={closeMenu}
            role="menuitem"
          >
            Features
          </Link>
          <Link
            href="/aboutus"
            className="block text-gray-700 hover:text-gray-900 font-medium py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-6"
            onClick={closeMenu}
            role="menuitem"
          >
            About Us
          </Link>
          <Link
            href="/contactus"
            className="block text-gray-700 hover:text-gray-900 font-medium py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-6"
            onClick={closeMenu}
            role="menuitem"
          >
            Contact Us
          </Link>
          <Link
            href="/pricing"
            className="block text-gray-700 hover:text-gray-900 font-medium py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-6"
            onClick={closeMenu}
            role="menuitem"
          >
            Pricing
          </Link>

          <div className="px-6 pt-2">
            <Link
              href="https://valahala-dashboard.vercel.app/"
              className="block bg-gradient-to-br from-indigoCustom to-purpleCustom text-white px-6 py-3 rounded-lg font-medium text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
              onClick={closeMenu}
              role="menuitem"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
