'use client';

import Footer from '@/components/layout/Footer';
import PricingHero from '@/components/sections/pricing/PricingHero';
import PricingHeroSection from '@/components/sections/pricing/PricingHeroSection';
import PricingCard from '@/components/sections/pricing/PricingCard';
import Button from '@/components/ui/Button';

export default function PricingPage() {
  const pricingPlans = [
    {
      title: 'Free Beta Access',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Access to core reasoning engine',
        'Join the feedback community',
        'Early access to new features',
        'Community support',
      ],
      cta: {
        label: 'Get Started Free',
        href: '#signup',
        variant: 'primary' as const,
      },
      highlight: true,
      badge: 'Most Popular',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        <PricingHero />
        
        {/* Hero Section with Monitor */}
        <PricingHeroSection />

        {/* Pricing Section */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="section-title text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  For Individuals
                </span>
              </h2>
              <p className="body text-gray-700 max-w-2xl mx-auto">
                Start your journey with HealthElic today. No credit card required.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  cta={plan.cta}
                  highlight={plan.highlight}
                  badge={plan.badge}
                />
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10 max-w-4xl mx-auto hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="subsection-title text-gray-900 mb-4">
                    Questions about pricing?
                  </h3>
                  <p className="body text-gray-700 mb-6">
                    Our team is here to help you find the right plan for your needs. Contact us for more information about enterprise plans and custom solutions.
                  </p>
                  <Button
                    href="/contact"
                    variant="primary"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Contact Sales
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="section-title text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="body text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our pricing and plans
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  question: 'What is included in the Free Beta Access?',
                  answer: 'The Free Beta Access includes access to our core reasoning engine and the opportunity to join our feedback community. You\'ll also get early access to new features as they\'re released.',
                },
                {
                  question: 'Do I need a credit card to sign up?',
                  answer: 'No, you don\'t need a credit card to sign up for the Free Beta Access. Simply create an account and start using HealthElic right away.',
                },
                {
                  question: 'How long will the beta access be available?',
                  answer: 'We\'re committed to providing free beta access to help build and improve HealthElic with our community. We\'ll provide advance notice before any changes to the program.',
                },
                {
                  question: 'Can I upgrade to a paid plan later?',
                  answer: 'Yes! As we release additional features and plans, you\'ll be able to upgrade seamlessly. Beta users will receive special pricing and early access to new plans.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="card-title text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {faq.question}
                      </h3>
                      <p className="body-small text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
