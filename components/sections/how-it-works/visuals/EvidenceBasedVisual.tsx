export default function EvidenceBasedVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl"></div>
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-emerald-100">
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700">Verified Evidence</span>
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="h-2 bg-emerald-200 rounded w-3/4 mb-1"></div>
                    <div className="h-2 bg-emerald-100 rounded w-1/2"></div>
                  </div>
                  <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
                  <span className="px-2 py-0.5 bg-white rounded">DOI: 10.xxxx</span>
                  <span className="px-2 py-0.5 bg-white rounded">PMID: xxxxxx</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-emerald-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Hallucination-free verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

