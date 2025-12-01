"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { RiChatSmileAiLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
              href="/login"
              className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1"
              aria-label="Sign In"
            >
              <LogIn className="w-4 h-4" aria-hidden="true" />
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-br from-indigoCustom to-purpleCustom text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-label="Start Free Trial"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
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
        </div>

        {/* Mobile Navigation */}
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
              href="/#dashboard"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2"
              onClick={closeMenu}
              role="menuitem"
            >
              Dashboard
            </Link>
            <Link
              href="/#analytics"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2"
              onClick={closeMenu}
              role="menuitem"
            >
              Analytics
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
              href="/login"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2"
              onClick={closeMenu}
              role="menuitem"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="block bg-gradient-to-br from-indigoCustom to-purpleCustom text-white px-6 py-2 rounded-lg font-medium text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
              onClick={closeMenu}
              role="menuitem"
            >
              Start Free Trial
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
