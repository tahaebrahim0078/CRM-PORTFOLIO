"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function NavMopile() {
  const [isOpen, setIsOpen] = useState(false);
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded p-2"
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
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden pb-4 space-y-2"
          role="menu"
        >
          <Link
            href="/#features"
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2"
            onClick={closeMenu}
            role="menuitem"
          >
            Features
          </Link>
          <Link
            href="/aboutus"
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2"
            onClick={closeMenu}
            role="menuitem"
          >
            About Us
          </Link>
          <Link
            href="/contactus"
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2"
            onClick={closeMenu}
            role="menuitem"
          >
            Contact Us
          </Link>
          <Link
            href="/pricing"
            className="block text-gray-700 hover:text-gray-900 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2"
            onClick={closeMenu}
            role="menuitem"
          >
            Pricing
          </Link>

          <Link
            href="https://crm-dashboard-orcin.vercel.app/"
            className="block bg-linear-to-br from-indigoCustom to-purpleCustom text-white px-6 py-2 rounded-lg font-medium text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
            onClick={closeMenu}
            role="menuitem"
          >
            Start Free Trial
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default NavMopile;
