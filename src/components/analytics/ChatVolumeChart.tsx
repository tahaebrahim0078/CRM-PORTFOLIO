"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chatTrends = [
  { date: "Mon", volume: 2400 },
  { date: "Tue", volume: 3100 },
  { date: "Wed", volume: 2800 },
  { date: "Thu", volume: 3500 },
  { date: "Fri", volume: 3200 },
  { date: "Sat", volume: 2900 },
  { date: "Sun", volume: 2400 },
];

export default function ChatVolumeChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="font-bold text-gray-900 mb-6">Chat Volume Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chatTrends}>
          <CartesianGrid strokeDasharray="3 3" stroke="#c5c5c5ff" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="volume"
            stroke="var(--color-start)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
