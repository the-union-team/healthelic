'use client';

import Footer from '@/components/layout/Footer';
import HowItWorksHero from '@/components/sections/how-it-works/HowItWorksHero';
import StepSection from '@/components/sections/how-it-works/StepSection';
import FeatureHighlight from '@/components/sections/how-it-works/FeatureHighlight';
import { steps, featureHighlights } from '@/constants/how-it-works';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HowItWorksHero />

        {/* Step-by-Step Process */}
        {steps.map((step, index) => (
          <StepSection key={step.id} step={step} index={index} />
        ))}

        {/* Key Features Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Key Features
                </span>
              </h2>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Advanced capabilities that make HealthElic the trusted AI assistant for physicians
              </p>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        {featureHighlights.map((feature, index) => (
          <FeatureHighlight key={feature.id} feature={feature} index={index} />
        ))}

        {/* Summary Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12 border border-purple-100 shadow-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                The Key is Flexibility
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                Regardless of how the physician frames the query, the AI understands context (data + physician&apos;s role) and selects format accordingly. The style is trained to mimic how an attending physician or specialist would speak: structured but conversational, clinically precise, with reasoning.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

