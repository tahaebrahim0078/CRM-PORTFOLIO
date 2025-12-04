"use client";

import {
  BarChart,
  Bar,
  Cell,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const satisfactionData = [
  { name: "Excellent", value: 45 },
  { name: "Good", value: 30 },
  { name: "Neutral", value: 15 },
  { name: "Poor", value: 10 },
];

const COLORS = [
  "var(--color-greenCustom)",
  "var(--color-blueCustom)",
  "var(--color-yellowCustom)",
  "var(--color-redCustom)",
];

export default function SatisfactionChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="font-bold text-gray-900 mb-6">Customer Satisfaction</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={satisfactionData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <Tooltip />
          <Bar dataKey="value">
            {satisfactionData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
