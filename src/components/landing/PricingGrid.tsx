"use client";

import { Check } from "lucide-react";
import {
  HoverScale,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/Animations";

type Plan = {
  id: string;
  name: string;
  subTitle?: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    id: "basic",
    name: "Starter",
    subTitle: "Perfect for small teams",
    price: "$29/mo",
    features: [
      "Chat widget",
      "Up to 3 agents",
      "1,000 conversations/month",
      "Email support",
      "Basic analytics",
    ],
    cta: "Get started",
  },
  {
    id: "pro",
    name: "Professional",
    subTitle: "Great for growing businesses",

    price: "$99/mo",
    features: [
      "Up to 10 agents",
      "10,000 conversations/month",
      "Advanced analytics",
      "Priority support",
      "Customizable chat widget ",
      "AI chatbot included",
    ],
    cta: "Start trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subTitle: "For large organizations",

    price: "$299/mo",
    features: [
      "Unlimited agents",
      "Unlimited conversations",
      "Custom analytics",
      "24/7 dedicated support",
      "Custom integrations",
    ],
    cta: "Contact sales",
  },
];

export default function PricingGrid() {
  return (
    <StaggerContainer>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <StaggerItem key={plan.id}>
            <HoverScale>
              <div
                className={`bg-white rounded-2xl   p-6 shadow-md border ${
                  plan.popular ? "border-indigo-300" : "border-transparent"
                }`}
                role="region"
                aria-label={`${plan.name} plan`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                {plan.subTitle && (
                  <p className="text-sm text-gray-500">{plan.subTitle}</p>
                )}
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button
                    className={`w-full cursor-pointer ${
                      plan.popular
                        ? "bg-gradient-to-br from-indigoCustom to-purpleCustom text-white"
                        : "bg-[var(--color-footer)] text-white"
                    } px-4 py-2 rounded-lg font-semibold`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </HoverScale>
          </StaggerItem>
        ))}
      </div>
    </StaggerContainer>
  );
}
