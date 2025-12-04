"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const responseTimes = [
  { name: "<1 min", value: 1200 },
  { name: "1-2 min", value: 900 },
  { name: "2-5 min", value: 800 },
  { name: ">5 min", value: 500 },
];

const COLORS = [
  "var(--color-greenCustom)",
  "var(--color-blueCustom)",
  "var(--color-yellowCustom)",
  "var(--color-redCustom)",
];

export default function ResponseTimePie() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="font-bold text-gray-900 mb-6">
        Response Time Distribution
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={responseTimes}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
          >
            {responseTimes.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
