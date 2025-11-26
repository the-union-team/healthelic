'use client';

export default function PricingHeroSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Pricing</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Go Pricing
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl">
              Workflow automation powered by AI agents with flexible pricing tailored to your needs.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="#quote"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a quote
              </a>
            </div>
          </div>

          {/* Right Side - Monitor Display */}
          <div className="relative">
            <div className="relative bg-gray-900 rounded-lg p-2 shadow-2xl">
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
                <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700">Knowledge Hub</span>
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
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">ID</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Plan</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Price</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Features</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: '001', plan: 'Free Beta', price: '$0', features: 'Core Access', status: 'Active' },
                          { id: '002', plan: 'Professional', price: '$99/mo', features: 'Full Suite', status: 'Available' },
                          { id: '003', plan: 'Enterprise', price: 'Custom', features: 'Advanced', status: 'Available' },
                          { id: '004', plan: 'Starter', price: '$49/mo', features: 'Basic', status: 'Available' },
                          { id: '005', plan: 'Premium', price: '$199/mo', features: 'Premium', status: 'Available' },
                        ].map((row, idx) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="py-2 px-3 text-gray-600 font-mono text-xs">{row.id}</td>
                            <td className="py-2 px-3 text-gray-900 font-medium">{row.plan}</td>
                            <td className="py-2 px-3 text-gray-700">{row.price}</td>
                            <td className="py-2 px-3">
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{row.features}</span>
                            </td>
                            <td className="py-2 px-3">
                              <span className={`px-2 py-1 rounded text-xs ${
                                row.status === 'Active' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-gray-100 text-gray-700'
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
                      Sort and Filter
                    </button>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded text-sm font-medium hover:bg-purple-700 transition-colors">
                      New entry
                    </button>
                  </div>
                </div>

                {/* Side Panel */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gray-50 border-l border-gray-200 p-3">
                  <div className="space-y-2">
                    <button className="w-full px-3 py-2 bg-purple-600 text-white rounded text-xs font-medium text-center">
                      Build
                    </button>
                    <button className="w-full px-3 py-2 bg-gray-200 text-gray-700 rounded text-xs font-medium text-center hover:bg-gray-300">
                      Review
                    </button>
                    <button className="w-full px-3 py-2 bg-gray-200 text-gray-700 rounded text-xs font-medium text-center hover:bg-gray-300">
                      Automate
                    </button>
                  </div>
                  <div className="mt-4 space-y-2">
                    <button className="w-full px-3 py-2 bg-gray-900 text-white rounded text-xs font-medium text-center">
                      Start
                    </button>
                    <button className="w-full px-3 py-2 bg-gray-200 text-gray-700 rounded text-xs font-medium text-center hover:bg-gray-300">
                      Export
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

