"use client";

const issues = [
  { name: "Billing Issues", percentage: 34 },
  { name: "Technical Support", percentage: 28 },
  { name: "Account Settings", percentage: 22 },
  { name: "Billing Questions", percentage: 16 },
];

const COLORS = [
  "var(--color-greenCustom)",
  "var(--color-blueCustom)",
  "var(--color-yellowCustom)",
  "var(--color-redCustom)",
];

export default function TopIssues() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="font-bold text-gray-900 mb-6">Top Issues</h3>
      <div className="space-y-4">
        {issues.map((issue, i) => (
          <div key={i}>
            <div className="flex justify-between mb-2">
              <p className="text-sm font-medium text-gray-700">{issue.name}</p>
              <p className="text-sm font-bold text-gray-900">
                {issue.percentage}%
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={` h-2 rounded-full`}
                style={{
                  width: `${issue.percentage}%`,
                  backgroundColor: COLORS[i % COLORS.length],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
