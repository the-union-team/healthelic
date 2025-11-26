'use client';

import Footer from '@/components/layout/Footer';
import PricingHero from '@/components/sections/pricing/PricingHero';
import PricingHeroSection from '@/components/sections/pricing/PricingHeroSection';
import PricingCard from '@/components/sections/pricing/PricingCard';

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
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                For Individuals
              </h2>
              <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
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
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10 max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Questions about pricing?
                </h3>
                <p className="text-gray-700 text-base sm:text-lg mb-6">
                  Our team is here to help you find the right plan for your needs. Contact us for more information about enterprise plans and custom solutions.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Sales
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
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
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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

