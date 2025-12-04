"use client";

import KeyMetricsCards from "../analytics/KeyMetricsCards";
import ChatVolumeChart from "../analytics/ChatVolumeChart";
import SatisfactionChart from "../analytics/SatisfactionChart";
import ResponseTimePie from "../analytics/ResponseTimePie";
import TopIssues from "../analytics/TopIssues";
import KeyMetricsList from "../analytics/KeyMetricsList";

// Split: charts and lists moved to dedicated components in ./analytics/

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

        {/* Key Metrics (split into component) */}
        <KeyMetricsCards />

        {/* Charts Grid */}
    
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <ChatVolumeChart />
          <SatisfactionChart />
        </div>

        {/* Bottom Charts */}
        <div className="grid md:grid-cols-3 gap-8">
          <ResponseTimePie />
          <TopIssues />
          <KeyMetricsList />
        </div>
      </div>
    </section>
  );
}
