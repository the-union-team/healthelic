export default function ContextAwareVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-3xl"></div>
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700">Patient Context</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <div className="text-xs text-blue-600 font-medium mb-1">Age</div>
              <div className="text-sm font-semibold text-gray-800">45 years</div>
            </div>
            <div className="bg-cyan-50 rounded-lg p-3 border border-cyan-200">
              <div className="text-xs text-cyan-600 font-medium mb-1">History</div>
              <div className="text-sm font-semibold text-gray-800">Hypertension</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <div className="text-xs text-purple-600 font-medium mb-1">Labs</div>
              <div className="text-sm font-semibold text-gray-800">Normal</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
              <div className="text-xs text-indigo-600 font-medium mb-1">Encounter</div>
              <div className="text-sm font-semibold text-gray-800">Emergency</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 mb-2">Tailored Response Based On:</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Context-Aware</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Personalized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

