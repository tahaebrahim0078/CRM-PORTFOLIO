"use client";

export default function KeyMetricsCards() {
  const keyMetrics = [
    { label: "First Response Time", value: "2.5m", trend: "↑ 12%" },
    { label: "Resolution Rate", value: "94%", trend: "↑ 8%" },
    { label: "Customer Satisfaction", value: "4.8/5", trend: "↑ 4.5%" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {keyMetrics.map((metric, index) => (
        <div
          key={index}
          className="bg-linear-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200"
        >
          <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
          <div className="flex items-end gap-3">
            <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
            <p className="text-green-600 font-medium text-sm mb-1">
              {metric.trend}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
