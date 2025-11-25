import { JSX } from 'react';

export function getFeatureVisual(featureId: string): JSX.Element {
  const visuals: Record<string, JSX.Element> = {
    'medicus-features': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 rounded-3xl"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-white via-purple-50 to-blue-50 rounded-full shadow-2xl border-4 border-purple-200 flex items-center justify-center">
              <svg className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    ),
    'clinical-reasoning': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl"></div>
        <div className="relative z-10 w-full h-full p-6 sm:p-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 h-full flex flex-col border border-purple-100">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-1/2"></div>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-3 flex-1">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-gray-600">Analysis</span>
                </div>
                <div className="h-3 bg-purple-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-purple-100 rounded w-5/6"></div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-gray-600">Interpretation</span>
                </div>
                <div className="h-3 bg-blue-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-blue-100 rounded w-4/6"></div>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border-l-4 border-indigo-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-gray-600">Recommendation</span>
                </div>
                <div className="h-3 bg-indigo-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-indigo-100 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'personalized-context': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 rounded-3xl"></div>
        <div className="relative z-10 w-full h-full p-6 sm:p-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 h-full border border-cyan-100">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border-2 border-cyan-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Patient Profile</span>
                  </div>
                  <div className="text-xs text-cyan-600 font-medium">Active</div>
                </div>
                <div className="h-2 bg-cyan-200 rounded w-full mb-2"></div>
                <div className="h-2 bg-cyan-100 rounded w-3/4"></div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Medical History</span>
                  </div>
                  <div className="text-xs text-blue-600 font-medium">Synced</div>
                </div>
                <div className="h-2 bg-blue-200 rounded w-full mb-2"></div>
                <div className="h-2 bg-blue-100 rounded w-5/6"></div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Care Pathway</span>
                  </div>
                  <div className="text-xs text-purple-600 font-medium">Updated</div>
                </div>
                <div className="h-2 bg-purple-200 rounded w-full mb-2"></div>
                <div className="h-2 bg-purple-100 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'evidence-based': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl"></div>
        <div className="relative z-10 w-full h-full p-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Research Citations</h3>
            </div>
            <div className="space-y-4 flex-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="h-3 bg-blue-200 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-blue-100 rounded w-1/2"></div>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="px-2 py-1 bg-white rounded">DOI: 10.xxxx/xxxx</span>
                    <span className="px-2 py-1 bg-white rounded">PMID: xxxxxx</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    'ai-action-plans': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl"></div>
        <div className="relative z-10 w-full h-full p-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Action Plan</h3>
            </div>
            <div className="space-y-3 flex-1">
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-4 border-l-4 border-pink-500 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-700">Schedule Follow-up</span>
                </div>
                <div className="w-6 h-6 bg-pink-200 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-lg p-4 border-l-4 border-rose-500 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-700">Generate Summary</span>
                </div>
                <div className="w-6 h-6 bg-rose-200 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-4 border-l-4 border-pink-500 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-700">Send Reminders</span>
                </div>
                <div className="w-6 h-6 bg-pink-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'privacy-compliance': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-white via-emerald-50 to-green-50 rounded-full shadow-2xl border-4 border-emerald-200 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-emerald-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">HIPAA</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    'continuous-learning': (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl"></div>
        <div className="relative z-10 w-full h-full p-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Learning Progress</h3>
            </div>
            <div className="space-y-4 flex-1">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">Accuracy</span>
                  <span className="text-sm font-bold text-gray-900">95%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">Context Depth</span>
                  <span className="text-sm font-bold text-gray-900">88%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">Reasoning Quality</span>
                  <span className="text-sm font-bold text-gray-900">92%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return visuals[featureId] || (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl">
      <div className="text-gray-400 text-lg">Visual</div>
    </div>
  );
}

