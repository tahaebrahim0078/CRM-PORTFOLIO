import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/common/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Connector - SaaS CRM Dashboard Platform",
    template: "%s | Connector",
  },
  description:
    "Connector is a powerful SaaS CRM dashboard platform with multi-agent support, real-time analytics, and advanced chat integration for businesses of all sizes.",
  keywords: [
    "CRM",
    "chat",
    "dashboard",
    "SaaS",
    "customer support",
    "multi-agent",
    "analytics",
  ],
  authors: [{ name: "Connector" }],
  creator: "Connector",
  publisher: "Connector",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://connectorcrm.com",
    title: "Connector - SaaS CRM Dashboard Platform",
    description:
      "Connector is a powerful SaaS CRM dashboard platform with multi-agent support, real-time analytics, and advanced chat integration.",
    images: [
      {
        url: "https://connectorcrm.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Connector - SaaS CRM Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connector - SaaS CRM Dashboard Platform",
    description:
      "Connector is a powerful SaaS CRM dashboard platform with multi-agent support, real-time analytics, and advanced chat integration.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://Connector.app" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
        role="application"
      >
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
