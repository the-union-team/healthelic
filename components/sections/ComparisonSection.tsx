"use client";

interface ComparisonRow {
  feature: string;
  conventionalAI: string;
  medicus: string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Core Function",
    conventionalAI: "Retrieves and summarizes information",
    medicus:
      "Interprets, reasons, and delivers context-aware, evidence-based recommendations",
  },
  {
    feature: "User Experience",
    conventionalAI: "Feels like chatting with a search engine",
    medicus:
      "Feels like collaborating with a trusted medical assistant who knows your case",
  },
  {
    feature: "Intelligence Model",
    conventionalAI: "Static, prompt-based replies",
    medicus:
      "Dynamic, agentic reasoning with adaptive learning and context retention",
  },
  {
    feature: "Personalization",
    conventionalAI: "Generic, guideline-only output",
    medicus:
      "Tailored to user profile, medical history, and conversation context",
  },
  {
    feature: "Integration",
    conventionalAI: "Siloed, standalone systems",
    medicus:
      "Seamlessly connects with EHRs, telehealth, and clinical workflows",
  },
  {
    feature: "Actionability",
    conventionalAI: "Ends at information",
    medicus:
      "Automates next steps — documentation, scheduling, follow-ups, or escalation",
  },
  {
    feature: "Trust & Oversight",
    conventionalAI: "Limited transparency",
    medicus:
      "Physician-guided validation and dual-AI fact-checking to eliminate hallucinations",
  },
  {
    feature: "Compliance",
    conventionalAI: "Basic privacy settings",
    medicus: "Full HIPAA alignment and enterprise-grade governance",
  },
];

export default function ComparisonSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="section-title text-gray-900 mb-6">
            Why Medicus Outperforms{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Conventional AI Tools
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700 body">
            <p>
              Most AI in healthcare was built to{" "}
              <span className="font-semibold">search and summarize</span>.
            </p>
            <p>
              Medicus was built to{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                understand, reason, and act
              </span>
              .
            </p>
          </div>
        </div>

        {/* Comparison Table - Desktop View */}
        <div className="hidden lg:block overflow-x-auto mb-12">
          <div className="min-w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-6 font-bold text-gray-900 text-lg bg-white">
                    Feature
                  </th>
                  <th className="text-left py-4 px-6 font-bold text-gray-700 text-lg bg-gray-100">
                    Conventional AI Tools
                  </th>
                  <th className="text-left py-4 px-6 font-bold text-lg bg-gradient-to-r from-purple-50 to-blue-50">
                    <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      Medicus by Healthelic
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="py-5 px-6 font-semibold text-gray-900 text-base">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 text-gray-700 text-base">
                      {row.conventionalAI}
                    </td>
                    <td className="py-5 px-6 text-gray-900 text-base font-medium">
                      {row.medicus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Cards - Mobile/Tablet View */}
        <div className="lg:hidden space-y-6 mb-12">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 text-base">
                  {row.feature}
                </h3>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Conventional AI Tools
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {row.conventionalAI}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2">
                    <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      Medicus by Healthelic
                    </span>
                  </div>
                  <p className="text-gray-900 text-sm font-medium leading-relaxed">
                    {row.medicus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement with Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12 lg:mt-16">
          {/* Left Side - Text Content */}
          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium italic text-left">
              Medicus bridges the gap between{" "}
              <span className="font-semibold">AI precision</span> and{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                human compassion
              </span>{" "}
              — empowering both patients and physicians to make smarter, faster,
              and safer decisions.
            </p>
          </div>

          {/* Right Side - Video */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-gray-900 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <video
              className="w-full h-auto rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/vid/Healthelic-Banner-Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
