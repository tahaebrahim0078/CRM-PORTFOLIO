"use client";

import { FaStar } from "react-icons/fa6";

export default function KeyMetricsList() {
  const list = [
    { label: "First Response Time", value: "2.5m", change: "faster 12%" },
    { label: "Resolution Rate", value: "94%", change: "increase 8%" },
    {
      label: "Satisfaction",
      value: "4.8/5",
      change: (
        <span className="flex items-center gap-1 text-yellow-500 font-medium text-sm">
          <FaStar /> 4.5%
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="font-bold text-gray-900 mb-6">Key Metrics</h3>
      <div className="space-y-4">
        {list.map((metric, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
          >
            <div>
              <p className="text-xs text-gray-600">{metric.label}</p>
              <p className="font-bold text-gray-900">{metric.value}</p>
            </div>
            <p className="text-green-600 font-medium text-sm">
              {metric.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
