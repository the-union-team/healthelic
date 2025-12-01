export default function NaturalLanguageVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-3xl"></div>
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-3 mb-2">
                <p className="text-sm text-gray-700 italic">&quot;What&apos;s your impression for this patient with chest pain and ECG changes?&quot;</p>
              </div>
              <div className="text-xs text-gray-500">Physician Query</div>
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border-l-4 border-purple-500">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-1 rounded">Impression</span>
              </div>
              <div className="h-2 bg-purple-200 rounded w-full"></div>
              <div className="h-2 bg-purple-100 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




