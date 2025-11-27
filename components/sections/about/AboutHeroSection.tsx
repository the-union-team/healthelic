'use client';

import Button from '@/components/ui/Button';

export default function AboutHeroSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="label text-gray-600">About</span>
            </div>
            <h2 className="section-title text-gray-900">
              Our Story
            </h2>
            <p className="body-large text-gray-700 max-w-xl mx-auto lg:mx-0">
              Building the future of healthcare through intelligent AI that understands, reasons, and acts with clinical precision.
            </p>
            <p className="body text-gray-600 max-w-xl mx-auto lg:mx-0">
              We combine decades of clinical expertise with cutting-edge AI technology to create solutions that truly make a difference in patient care.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button
                href="#mission"
                variant="primary"
                className="inline-flex items-center gap-2"
              >
                Learn More
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
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
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
                {/* Application Window Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-700">HealthElic Dashboard</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 bg-white">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200 hover:shadow-md transition-all duration-300">
                      <div className="text-xs text-purple-600 font-medium mb-1">Active Users</div>
                      <div className="text-2xl font-bold text-gray-900">2,450+</div>
                      <div className="text-xs text-purple-500 mt-1">↑ 12% this month</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200 hover:shadow-md transition-all duration-300">
                      <div className="text-xs text-blue-600 font-medium mb-1">Queries Processed</div>
                      <div className="text-2xl font-bold text-gray-900">1.2M+</div>
                      <div className="text-xs text-blue-500 mt-1">↑ 8% this month</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-3 border-l-4 border-purple-500 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-gray-700">Clinical Accuracy</span>
                        <span className="text-xs text-purple-600 font-bold">98.5%</span>
                      </div>
                      <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse" style={{ width: '98.5%' }}></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 border-l-4 border-blue-500 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-gray-700">User Satisfaction</span>
                        <span className="text-xs text-blue-600 font-bold">96%</span>
                      </div>
                      <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse animation-delay-2000" style={{ width: '96%' }}></div>
                      </div>
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
