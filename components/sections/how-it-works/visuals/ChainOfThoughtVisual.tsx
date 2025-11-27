export default function ChainOfThoughtVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl"></div>
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-700">Chain-of-Thought</span>
            <button className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold rounded-lg shadow-sm">
              Activate
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500">
              <div className="text-xs font-semibold text-purple-700 mb-1">Step 1: Analysis</div>
              <div className="h-2 bg-purple-200 rounded w-full"></div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3 border-l-4 border-indigo-500">
              <div className="text-xs font-semibold text-indigo-700 mb-1">Step 2: Reasoning</div>
              <div className="h-2 bg-indigo-200 rounded w-full"></div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
              <div className="text-xs font-semibold text-blue-700 mb-1">Step 3: Conclusion</div>
              <div className="h-2 bg-blue-200 rounded w-full"></div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Guideline-based reasoning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


