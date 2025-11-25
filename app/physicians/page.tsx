'use client';

import Footer from '@/components/layout/Footer';
import PhysiciansHero from '@/components/sections/physicians/PhysiciansHero';
import FeatureCard from '@/components/sections/physicians/FeatureCard';

export default function PhysiciansPage() {
  const features = [
    {
      title: 'Summarize Complex Patient Data Instantly',
      description: 'Transform lengthy patient records, lab results, and medical history into concise, actionable summaries. Save hours of review time while maintaining clinical accuracy.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Prepare Documentation and Visit Notes',
      description: 'Generate comprehensive visit notes and clinical documentation that follow your preferred format. Ensure consistency and completeness while reducing administrative burden.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Generate Evidence-Based Recommendations',
      description: 'Receive clinical recommendations backed by peer-reviewed research and medical guidelines. Every suggestion includes transparent citations and reasoning.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Enhance Communication with Patients and Staff',
      description: 'Improve patient communication with clear, empathetic explanations. Streamline team coordination with concise handoffs and shared clinical insights.',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        <PhysiciansHero />

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12 border border-purple-100 shadow-xl text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of physicians who are already using Medicus to enhance their clinical workflow and improve patient care.
              </p>
              <a
                href="#beta-signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Join the Medicus Beta for Physicians
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

