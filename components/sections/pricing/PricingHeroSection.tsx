'use client';

import Button from '@/components/ui/Button';

export default function PricingHeroSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="label text-gray-600">Pricing</span>
            </div>
            <h2 className="section-title text-gray-900">
              Flexible Pricing
            </h2>
            <p className="body-large text-gray-700 max-w-xl mx-auto lg:mx-0">
              Workflow automation powered by AI agents with flexible pricing tailored to your needs.
            </p>
            <p className="body text-gray-600 max-w-xl mx-auto lg:mx-0">
              From free beta access to enterprise solutions, we have a plan that fits your practice.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button
                href="#quote"
                variant="primary"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 transition-all duration-300"
              >
                Get a quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Side - Enhanced Monitor Display */}
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
                    <span className="text-sm font-semibold text-gray-700">Pricing Dashboard</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Data Table */}
                <div className="p-4 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Plan</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Price</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { plan: 'Free Beta', price: '$0', status: 'Active', color: 'green' },
                          { plan: 'Professional', price: '$99/mo', status: 'Available', color: 'blue' },
                          { plan: 'Enterprise', price: 'Custom', status: 'Available', color: 'purple' },
                        ].map((row, idx) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="py-2 px-3 text-gray-900 font-medium">{row.plan}</td>
                            <td className="py-2 px-3">
                              <span className="font-semibold text-purple-600">{row.price}</span>
                            </td>
                            <td className="py-2 px-3">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                row.status === 'Active' 
                                  ? 'bg-green-100 text-green-700' 
                                  : row.color === 'blue'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-purple-100 text-purple-700'
                              }`}>
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Bottom Actions */}
                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-200">
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm font-medium hover:bg-gray-200 transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-colors">
                      Get Started
                    </button>
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
