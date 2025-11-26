'use client';

import Footer from '@/components/layout/Footer';
import ResourcesHero from '@/components/sections/resources/ResourcesHero';
import ResourceCard from '@/components/sections/resources/ResourceCard';
import SpotlightSection from '@/components/sections/resources/SpotlightSection';
import FeaturedResources from '@/components/sections/resources/FeaturedResources';

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

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12 border border-purple-100 shadow-xl text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Subscribe to our newsletter to receive the latest resources, updates, and insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
