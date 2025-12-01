import {
  MessageSquare,
  Users,
  TrendingUp,
  Zap,
  Palette,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Easy Chat Integration",
    description:
      "Seamlessly embed our chat widget into any website or application with just a few lines of code.",
  },
  {
    icon: Users,
    title: "Multi-Agent Dashboard",
    description:
      "Manage unlimited agents for your business with real-time collaboration and presence awareness.",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description:
      "Track performance metrics, customer satisfaction, and business metrics with comprehensive reporting.",
  },
  {
    icon: Zap,
    title: "AI-Powered Responses",
    description:
      "Intelligent chatbot with machine learning capabilities to handle common customer queries.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description:
      "Customize colors, themes, branding to match your business identity perfectly.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-level encryption, GDPR compliance, and data protection for peace of mind.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to provide exceptional customer support and
            business growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
