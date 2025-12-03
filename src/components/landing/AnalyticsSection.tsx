"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaStar } from "react-icons/fa6";

const chatTrends = [
  { date: "Mon", volume: 2400 },
  { date: "Tue", volume: 3100 },
  { date: "Wed", volume: 2800 },
  { date: "Thu", volume: 3500 },
  { date: "Fri", volume: 3200 },
  { date: "Sat", volume: 2900 },
  { date: "Sun", volume: 2400 },
];

const satisfactionData = [
  { name: "Excellent", value: 45 },
  { name: "Good", value: 30 },
  { name: "Neutral", value: 15 },
  { name: "Poor", value: 10 },
];

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

const keyMetrics = [
  { label: "First Response Time", value: "2.5m", trend: "↑ 12%" },
  { label: "Resolution Rate", value: "94%", trend: "↑ 8%" },
  { label: "Customer Satisfaction", value: "4.8/5", trend: "↑ 4.5%" },
];

const issues = [
  { name: "Billing Issues", percentage: 34 },
  { name: "Technical Support", percentage: 28 },
  { name: "Account Settings", percentage: 22 },
  { name: "Billing Questions", percentage: 16 },
];

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-Time Analytics & Insights
          </h2>
          <p className="text-gray-600">
            Make data-driven decisions with comprehensive reporting and
            analytics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200"
            >
              <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
              <div className="flex items-end gap-3">
                <p className="text-3xl font-bold text-gray-900">
                  {metric.value}
                </p>
                <p className="text-green-600 font-medium text-sm mb-1">
                  {metric.trend}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Chat Volume Trends */}
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

          {/* Customer Satisfaction */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-6">
              Customer Satisfaction
            </h3>

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
        </div>

        {/* Bottom Charts */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Response Time Distribution */}
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
                  {satisfactionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Issues */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-6">Top Issues</h3>
            <div className="space-y-4">
              {issues.map((issue, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-medium text-gray-700">
                      {issue.name}
                    </p>
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

          {/* Key Metrics List */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-6">Key Metrics</h3>
            <div className="space-y-4">
              {[
                {
                  label: "First Response Time",
                  value: "2.5m",
                  change: "faster 12%",
                },
                {
                  label: "Resolution Rate",
                  value: "94%",
                  change: "increase 8%",
                },
                {
                  label: "Satisfaction",
                  value: "4.8/5",
                  change: (
                    <span className="flex items-center gap-1 text-yellow-500 font-medium text-sm">
                      <FaStar /> 4.5%
                    </span>
                  ),
                },
              ].map((metric, i) => (
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
        </div>
      </div>
    </section>
  );
}
