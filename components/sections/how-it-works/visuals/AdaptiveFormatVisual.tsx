export default function AdaptiveFormatVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 rounded-3xl"></div>
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-cyan-100">
        <div className="space-y-4">
          <div className="text-sm font-semibold text-gray-700 mb-3">Output Formats</div>
          <div className="space-y-2">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-3 border-l-4 border-cyan-500">
              <div className="text-xs font-semibold text-cyan-700 mb-1">&quot;Give me a management plan&quot;</div>
              <div className="h-2 bg-cyan-200 rounded w-full"></div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border-l-4 border-blue-500">
              <div className="text-xs font-semibold text-blue-700 mb-1">&quot;Explain this to a patient&quot;</div>
              <div className="h-2 bg-blue-200 rounded w-full"></div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border-l-4 border-purple-500">
              <div className="text-xs font-semibold text-purple-700 mb-1">&quot;Provide a hand-off summary&quot;</div>
              <div className="h-2 bg-purple-200 rounded w-full"></div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Adaptive tone & format</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


