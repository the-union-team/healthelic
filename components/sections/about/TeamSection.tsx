'use client';

import Button from '@/components/ui/Button';

export default function TeamSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Enhanced Visual Display */}
          <div className="relative order-2 lg:order-1">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
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
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-700">Team Overview</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="space-y-3">
                    {[
                      { role: 'Clinical Experts', count: '25+', bgClass: 'bg-gradient-to-br from-purple-50 to-purple-100', borderClass: 'border-purple-200', iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600', textColor: 'text-purple-600', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                      { role: 'AI Engineers', count: '40+', bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100', borderClass: 'border-blue-200', iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600', textColor: 'text-blue-600', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
                      { role: 'Researchers', count: '18+', bgClass: 'bg-gradient-to-br from-cyan-50 to-cyan-100', borderClass: 'border-cyan-200', iconBg: 'bg-gradient-to-br from-cyan-500 to-cyan-600', textColor: 'text-cyan-600', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
                      { role: 'Product Team', count: '15+', bgClass: 'bg-gradient-to-br from-indigo-50 to-indigo-100', borderClass: 'border-indigo-200', iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-600', textColor: 'text-indigo-600', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
                    ].map((item, idx) => (
                      <div key={idx} className={`${item.bgClass} rounded-lg p-3 border ${item.borderClass} hover:shadow-md transition-all duration-300 group`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 ${item.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                              </svg>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{item.role}</span>
                          </div>
                          <span className={`text-lg font-bold ${item.textColor}`}>{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="label text-gray-600">Team</span>
            </div>
            <h2 className="section-title text-gray-900">
              Our Team
            </h2>
            <p className="body-large text-gray-700 max-w-xl mx-auto lg:mx-0">
              A diverse team of clinicians, engineers, and researchers working together to transform healthcare through AI.
            </p>
            <p className="body text-gray-600 max-w-xl mx-auto lg:mx-0">
              From world-class physicians to innovative AI engineers, our team brings together the best minds in healthcare and technology.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button
                href="#careers"
                variant="primary"
                className="inline-flex items-center gap-2"
              >
                Join Our Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
