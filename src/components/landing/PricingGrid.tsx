"use client";

import React from "react";
import { Check } from "lucide-react";
import {
  HoverScale,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/Animations";

type Plan = {
  id: string;
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "$9/mo",
    features: ["Chat widget", "1 inbox", "Email support"],
    cta: "Get started",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29/mo",
    features: ["Multi-agent", "Unlimited inboxes", "Priority support"],
    cta: "Start trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Contact",
    features: ["SLA", "Custom integrations", "Dedicated support"],
    cta: "Contact sales",
  },
];

export default function PricingGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <StaggerContainer>
        {plans.map((plan) => (
          <StaggerItem key={plan.id}>
            <HoverScale>
              <div
                className={`bg-white rounded-2xl p-6 shadow-md border ${
                  plan.popular ? "border-indigo-300" : "border-transparent"
                }`}
                role="region"
                aria-label={`${plan.name} plan`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
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
                    className={`w-full ${
                      plan.popular
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    } px-4 py-2 rounded-lg font-semibold`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </HoverScale>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
