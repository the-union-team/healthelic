export default function HowItWorksHero() {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-white pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-8 lg:pt-16">
          {/* Left Side - Text Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center lg:text-left relative z-10">
            <h1 className="hero-title">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                How HealthElic Works
              </span>
            </h1>

            <p className="body-large text-gray-700 max-w-xl mx-auto lg:mx-0 font-medium">
              Our AI platform for physicians is trained and designed to respond in a custom, context‑appropriate, natural conversational style, so that a physician can just ask for help{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                "like a real situation."
              </span>
            </p>

            <p className="body text-gray-600 max-w-xl mx-auto lg:mx-0">
              Experience intelligent healthcare assistance that understands context, provides evidence-based insights, and adapts to your clinical workflow seamlessly.
            </p>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Central Icon - Conversation/AI */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-float-slow">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-white via-purple-50 to-blue-50 rounded-full shadow-2xl border-2 border-purple-100 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Feature Icons Floating Around */}
            {/* Natural Language Icon */}
            <div className="absolute top-16 right-16 sm:top-20 sm:right-20 md:top-24 md:right-24 z-15 animate-float animation-delay-1000">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-purple-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-700 text-center">Natural Language</div>
              </div>
            </div>

            {/* Context Aware Icon */}
            <div className="absolute bottom-24 left-12 sm:bottom-28 sm:left-16 md:bottom-32 md:left-20 z-15 animate-float animation-delay-2000">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-700 text-center">Context Aware</div>
              </div>
            </div>

            {/* Evidence Based Icon */}
            <div className="absolute top-1/3 right-1/5 z-15 animate-float animation-delay-3000">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-emerald-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-700 text-center">Evidence Based</div>
              </div>
            </div>

            {/* Adaptive Format Icon */}
            <div className="absolute bottom-1/4 right-1/6 z-15 animate-float animation-delay-1500">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-cyan-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-700 text-center">Adaptive</div>
              </div>
            </div>

            {/* Subtle floating particles */}
            <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40 animate-float animation-delay-3000"></div>
            <div className="absolute bottom-1/3 left-8 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-float animation-delay-2000"></div>
            <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-float animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


