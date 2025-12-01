import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DashboardPreview from "@/components/landing/DashboardPreview";
import AnalyticsSection from "@/components/landing/AnalyticsSection";
import PricingSection from "@/components/landing/PricingSection";

export const metadata = {
  title: "Home - ChatFlow",
  description: "Smart Chat Solution for Every Business",
  openGraph: {
    title: "ChatFlow - SaaS CRM Dashboard Platform",
    description: "Smart Chat Solution for Every Business",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <AnalyticsSection />
      <PricingSection />
    </>
  );
}
