"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type InsightType = "doctors" | "personalized" | "agentic" | "secure";

interface Insight {
  id: InsightType;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const insights: Insight[] = [
  {
    id: "doctors",
    title: "Built by Doctors, Not Just Data Scientists",
    description:
      "Every interaction blends verified clinical evidence with the intuition and empathy of experienced physicians.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: "personalized",
    title: "Understands You, Not Just Your Query",
    description:
      "Medicus personalizes guidance to your unique symptoms, history, and care goals — not one-size-fits-all answers.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: "agentic",
    title: "Agentic by Design",
    description:
      "It goes beyond information to take action — automating follow-ups, scheduling, and note generation, even drafting care summaries.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "secure",
    title: "Secure and Compliant",
    description:
      "HIPAA-grade security and end-to-end encryption protect your privacy and enterprise data integrity.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
];

export default function InsightsSection() {
  const [activeInsight, setActiveInsight] = useState<InsightType>("doctors");

  return (
    <section className="bg-white py-16 lg:py-24 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Main Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="section-title text-gray-900 mb-4">
            Meet Medicus — The Next Generation of{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              AI Health Intelligence
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Medicus Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <p className="body text-gray-700 mb-6">
                While most AI tools in healthcare can summarize data, Medicus
                truly understands it.
              </p>
              <p className="body text-gray-700 mb-8">
                It reasons like a clinician, assists like a colleague, and
                learns continuously — becoming smarter with every interaction.
              </p>
            </div>

            {/* What makes Medicus different */}
            <div>
              <h3 className="subsection-title text-gray-900 mb-6">
                What makes Medicus different
              </h3>

              {/* Insights List */}
              <div className="space-y-3">
                {insights.map((insight) => {
                  const isActive = activeInsight === insight.id;
                  return (
                    <div
                      key={insight.id}
                      onClick={() => setActiveInsight(insight.id)}
                      className={`
                                                cursor-pointer transition-all duration-300 rounded-lg p-4
                                                ${
                                                  isActive
                                                    ? "bg-gray-100 border-l-4 border-purple-600 shadow-sm"
                                                    : "hover:bg-gray-50 border-l-4 border-transparent"
                                                }
                                            `}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`mt-1 flex-shrink-0 ${
                            isActive ? "text-purple-600" : "text-gray-600"
                          }`}
                        >
                          {insight.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {insight.title}
                          </h4>
                          {isActive && (
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {insight.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Closing Statement */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
              Medicus is health intelligence with empathy, accuracy, and heart.
            </p>

            {/* Button */}
            <div className="pt-4">
              <Button
                href="#beta"
                variant="primary"
                className="inline-flex items-center gap-2 group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 transition-all duration-300"
              >
                Join the Beta Program
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="relative lg:sticky lg:top-8">
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl pt-6 pr-6 sm:pt-6 sm:pr-8 shadow-2xl">
              {/* Dashboard Container */}
              <div className="bg-white rounded-r-xl rounded-br-xl shadow-xl overflow-hidden border-t-8 border-r-8 border-blue-600 h-[700px] flex flex-col">
                {/* Dashboard Header */}
                <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    <div className="hidden sm:block w-48 h-8 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Dashboard Content - Changes based on active insight */}
                <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
                  {activeInsight === "doctors" && <ProductAnalyticsDashboard />}
                  {activeInsight === "personalized" && (
                    <WebAnalyticsDashboard />
                  )}
                  {activeInsight === "agentic" && <SessionReplayDashboard />}
                  {activeInsight === "secure" && <ProductAnalyticsDashboard />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Product Analytics Dashboard Component
function ProductAnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-xs text-gray-500 mb-1">Overall Active Users</div>
          <div className="text-2xl font-bold text-gray-900">12.3k</div>
          <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            +5.2%
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-xs text-gray-500 mb-1">Overall New Users</div>
          <div className="text-2xl font-bold text-gray-900">2.4K</div>
          <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            +3.1%
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-xs text-gray-500 mb-1">Avg Session Duration</div>
          <div className="text-2xl font-bold text-gray-900">13m 29s</div>
          <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            +2.8%
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-end justify-between gap-2">
        {Array.from({ length: 20 }).map((_, i) => {
          const height = Math.random() * 100 + 20;
          return (
            <div
              key={i}
              className="flex-1 bg-blue-600 rounded-t"
              style={{ height: `63%` }}
            />
          );
        })}
      </div>

      {/* Data Tables */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-semibold text-gray-900 mb-3">
            Top Pages
          </div>
          <div className="space-y-2">
            {["Home", "Pricing", "Features", "Get Started"].map((page, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-600">{page}</span>
                <span className="font-medium text-gray-900">
                  {["1.32k", "45k", "5k", "558"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-semibold text-gray-900 mb-3">
            Top Countries
          </div>
          <div className="space-y-2">
            {["USA", "India", "Canada", "Argentina"].map((country, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-600">{country}</span>
                <span className="font-medium text-gray-900">
                  {["1.32k", "1.32k", "45k", "5k"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Web Analytics Dashboard Component
function WebAnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Sidebar */}
      <div className="flex gap-6">
        <div className="w-48 space-y-2">
          <div className="text-sm font-semibold text-gray-900 mb-3">
            Web Analytics
          </div>
          {[
            "Traffic by Channel",
            "Traffic by Campaign",
            "Paid Engagement",
            "Conversion",
          ].map((item, i) => (
            <div
              key={i}
              className={`p-2 rounded text-sm ${
                i === 1
                  ? "bg-blue-50 border-l-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex-1">
          {/* Title and Date Range */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Traffic by Campaign
            </h3>
            <div className="flex gap-2">
              {["Day", "7d", "30d", "60d"].map((period, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 text-sm rounded ${
                    i === 2
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[
              {
                label: "Unique Visitors",
                value: "2.75k",
                change: "+5.2%",
                positive: true,
              },
              {
                label: "Bounce Rate",
                value: "76%",
                change: "+5.2%",
                positive: false,
              },
              {
                label: "Purchases",
                value: "3.58k",
                change: "",
                positive: true,
              },
              {
                label: "Avg. Order Value",
                value: "35.1",
                change: "",
                positive: true,
              },
            ].map((kpi, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">{kpi.label}</div>
                <div className="text-xl font-bold text-gray-900">
                  {kpi.value}
                </div>
                {kpi.change && (
                  <div
                    className={`text-xs mt-1 ${
                      kpi.positive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {kpi.change}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-gray-50 rounded-lg p-4 h-32 mb-4 flex items-end justify-between gap-1">
            {Array.from({ length: 15 }).map((_, i) => {
              const height = Math.random() * 100 + 30;
              return (
                <div
                  key={i}
                  className="flex-1 bg-blue-600 rounded-t"
                  style={{ height: `63%` }}
                />
              );
            })}
          </div>

          {/* Performance Table */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-semibold text-gray-900 mb-3">
              Performance by Channel
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="text-left py-2">OVERALL</th>
                    <th className="text-right py-2">VISITORS</th>
                    <th className="text-right py-2">BOUNCE RATE</th>
                  </tr>
                </thead>
                <tbody>
                  {["Loyalty Program", "Free Delivery", "Organic Search"].map(
                    (channel, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-2 text-gray-900">{channel}</td>
                        <td className="text-right py-2 text-gray-900">
                          {["2.75k", "1.3k", "9,352"][i]}
                        </td>
                        <td className="text-right py-2 text-gray-900">
                          {["16%", "23%", "9,352"][i]}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Session Replay Dashboard Component
function SessionReplayDashboard() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Session Replay
          </h3>
          <span className="text-sm text-blue-600">All Event(s)</span>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg">
          Play Session
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Left - Simulated Webpage */}
        <div className="col-span-2 bg-gray-50 rounded-lg p-4">
          <div className="bg-white rounded border p-4">
            <div className="mb-4">
              <div className="flex gap-2 mb-2">
                {["Shipping", "Payment", "Review", "Confirmation"].map(
                  (step, i) => (
                    <div
                      key={i}
                      className={`flex-1 text-center py-2 text-xs rounded ${
                        i === 0
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {i + 1}. {step}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="space-y-3">
              <div className="border rounded p-3">
                <div className="text-sm font-medium mb-2">Enter Promo Code</div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value="HELLOPG"
                    readOnly
                    className="flex-1 border border-red-300 bg-red-50 px-2 py-1 rounded text-sm"
                  />
                  <button className="px-4 py-1 bg-gray-200 text-sm rounded">
                    Submit
                  </button>
                </div>
              </div>
              <div className="border rounded p-3">
                <div className="text-sm font-medium mb-2">Order Summary</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Product</span>
                    <span>$12.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping & Handling</span>
                    <span>$2.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$0.25</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>$14.25</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Playback Controls */}
            <div className="mt-4 flex items-center gap-2 bg-gray-100 rounded p-2">
              <button className="w-6 h-6 bg-gray-300 rounded"></button>
              <button className="w-8 h-8 bg-blue-600 rounded"></button>
              <button className="w-6 h-6 bg-gray-300 rounded"></button>
              <span className="text-xs text-gray-600 ml-2">05:48</span>
            </div>
          </div>
        </div>

        {/* Right - Event Timeline */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-semibold text-gray-900">Events</div>
            <label className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" className="rounded" />
              Live event updates
            </label>
          </div>
          <div className="space-y-2 text-xs">
            <div className="text-gray-500 mb-2">August 9, 2 hours ago</div>
            {[
              "Pause Session",
              "Promo Code Failure",
              "Shipping Details",
              "Checkout!",
              "Add to Cart",
              "View Item Details",
              "Search for Items",
              "Main Landing",
              "Start Session",
            ].map((event, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  i === 0
                    ? "bg-blue-100 text-blue-700"
                    : "bg-white text-gray-700"
                }`}
              >
                <div className="text-gray-500 text-xs mb-1">10:34:42 am</div>
                <div>{event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
