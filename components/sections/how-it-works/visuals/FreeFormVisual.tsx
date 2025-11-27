export default function FreeFormVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-3xl"></div>
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-cyan-100">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-500">
            <div className="text-xs font-semibold text-cyan-700 mb-2">Free-Form Query</div>
            <div className="space-y-2">
              <div className="h-3 bg-cyan-200 rounded w-full"></div>
              <div className="h-3 bg-cyan-100 rounded w-5/6"></div>
              <div className="h-3 bg-cyan-100 rounded w-4/6"></div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>AI Interprets Intent</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="text-xs font-semibold text-blue-700 mb-2">Structured Response</div>
            <div className="space-y-2">
              <div className="h-2 bg-blue-200 rounded w-full"></div>
              <div className="h-2 bg-blue-100 rounded w-3/4"></div>
              <div className="h-2 bg-blue-100 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


