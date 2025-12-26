"use client";

import Link from "next/link";
import { FadeIn } from "@/components/common/Animations";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Dashboard", href: "/#dashboard" },
      { label: "Analytics", href: "/#analytics" },
    ],
    company: [
      { label: "About Us", href: "/aboutus" },
      { label: "Contact", href: "/contactus" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
    support: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Status Page", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:Chat@connector.app", label: "Email" },
  ];

  return (
    <FadeIn>
      <footer className="bg-gray-900 text-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <Link href="/" className="block mb-4">
                <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Connector
                </h2>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Powerful SaaS CRM dashboard with multi-agent support and
                real-time analytics.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-indigo-400" />
                  <p>123 Business St, EGYPT, Cairo</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-indigo-400" />
                  <a
                    href="tel:+201067815244"
                    className="hover:text-indigo-400 transition"
                  >
                    +20 01067815244
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-indigo-400" />
                  <a
                    href="mailto:Chat@connector.app"
                    className="hover:text-indigo-400 transition"
                  >
                    Chat@connector.app
                  </a>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-white mb-4 capitalize text-sm">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-indigo-400 transition text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            {/* Social Links */}
            <div className="flex items-center justify-between flex-wrap gap-6 mb-6">
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Newsletter Signup */}
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg  bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                <button className="px-6 py-2 rounded-lg cursor-pointer bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-gray-800 text-xs text-gray-500">
              <p>&copy; {currentYear} Connector. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-indigo-400 transition">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-indigo-400 transition">
                  Terms
                </Link>
                <Link href="#" className="hover:text-indigo-400 transition">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
}
