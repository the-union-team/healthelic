'use client';

import Footer from '@/components/layout/Footer';
import ResourcesHero from '@/components/sections/resources/ResourcesHero';
import ResourceCard from '@/components/sections/resources/ResourceCard';
import SpotlightSection from '@/components/sections/resources/SpotlightSection';
import FeaturedResources from '@/components/sections/resources/FeaturedResources';
import Button from '@/components/ui/Button';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Learn',
      description: 'Tutorials, explainer videos, and practical guides to mastering Medicus.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      href: '#learn',
    },
    {
      title: 'Blogs',
      description: 'Insights from our medical and AI teams on digital health, data ethics, and clinical transformation.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      href: '#blogs',
    },
    {
      title: 'Case Studies',
      description: 'Real-world results from physicians and clinics using Medicus to improve outcomes.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      href: '#case-studies',
    },
    {
      title: 'Clinical Validation',
      description: 'Peer-reviewed studies demonstrating Medicus\' accuracy, reliability, and reasoning fidelity.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: '#clinical-validation',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        <ResourcesHero />

        {/* Resources Grid */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="section-title text-gray-900 mb-4">
                Explore Resources
              </h2>
              <p className="body text-gray-600 max-w-2xl mx-auto">
                Discover comprehensive guides, insights, and tools to help you get the most out of HealthElic
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {resources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  index={index}
                  href={resource.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Spotlight Section */}
        <SpotlightSection />

        {/* Featured Resources */}
        <FeaturedResources />

        {/* Enhanced Newsletter Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl shadow-lg border border-purple-200 p-8 lg:p-12 hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Content */}
                  <div className="text-center md:text-left">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="section-title text-gray-900 mb-4">
                      Stay Updated
                    </h2>
                    <p className="body text-gray-700 mb-6">
                      Subscribe to our newsletter to receive the latest resources, updates, and insights directly in your inbox.
                    </p>
                  </div>

                  {/* Right Side - Form */}
                  <div className="relative">
                    {/* Animated background */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                    </div>
                    <div className="relative z-10 space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                      />
                      <Button
                        href="#subscribe"
                        variant="primary"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Subscribe
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                  </div>
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
