'use client';

import Footer from '@/components/layout/Footer';
import PhysiciansHero from '@/components/sections/physicians/PhysiciansHero';
import FeatureCard from '@/components/sections/physicians/FeatureCard';
import Button from '@/components/ui/Button';

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
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="section-title text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Powerful Features for Physicians
                </span>
              </h2>
              <p className="body text-gray-600 max-w-2xl mx-auto">
                Discover how Medicus can transform your clinical workflow and enhance patient care
              </p>
            </div>
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

        {/* Enhanced CTA Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl shadow-lg border border-purple-200 p-8 lg:p-12 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                </div>

                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="section-title text-gray-900 mb-4">
                    Ready to Transform Your Practice?
                  </h2>
                  <p className="body text-gray-700 mb-8 max-w-2xl mx-auto">
                    Join thousands of physicians who are already using Medicus to enhance their clinical workflow and improve patient care.
                  </p>
                  <Button
                    href="#beta-signup"
                    variant="primary"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Join the Medicus Beta for Physicians
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
