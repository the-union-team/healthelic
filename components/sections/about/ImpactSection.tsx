'use client';

import Button from '@/components/ui/Button';

export default function ImpactSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="label text-gray-600">Impact</span>
            </div>
            <h2 className="section-title text-gray-900">
              Making a Difference
            </h2>
            <p className="body-large text-gray-700 max-w-xl mx-auto lg:mx-0">
              See how HealthElic is transforming healthcare delivery and improving patient outcomes across the globe.
            </p>
            <p className="body text-gray-600 max-w-xl mx-auto lg:mx-0">
              Our AI-powered solutions are helping physicians make better decisions, reducing documentation time, and improving patient care quality.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button
                href="#case-studies"
                variant="primary"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 transition-all duration-300"
              >
                View Impact
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Side - Enhanced Visual Display */}
          <div className="relative">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative bg-gray-900 rounded-lg p-2 shadow-2xl hover:shadow-3xl transition-all duration-300">
              {/* Monitor Frame */}
              <div className="bg-gray-800 rounded-t-lg p-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Screen Content */}
              <div className="bg-white rounded-b-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-700">Impact Metrics</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 border-l-4 border-emerald-500 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-emerald-600 font-medium">Time Saved</div>
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">60%</div>
                      <div className="text-xs text-gray-600">Reduction in documentation time</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-blue-600 font-medium">Accuracy</div>
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">98.5%</div>
                      <div className="text-xs text-gray-600">Clinical decision accuracy</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-purple-600 font-medium">Physicians</div>
                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">2,450+</div>
                      <div className="text-xs text-gray-600">Active users worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
