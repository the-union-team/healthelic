export default function FeaturesHero() {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-white pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-8 lg:pt-16">
          {/* Left Side - Text Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center lg:text-left relative z-10">
            <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-[1.2] sm:leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Medicus Features
              </span>
              {" "}— Intelligence That{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Understands, Reasons, and Acts
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Discover what makes Medicus the most advanced{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                agentic health intelligence system
              </span>{" "}
              ever built.
            </p>

            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From clinical reasoning to personalized care pathways, explore the powerful capabilities that transform how healthcare professionals deliver patient care.
            </p>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Central Feature Icon - Brain/AI Intelligence */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-float-slow">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Feature Icons Floating Around */}
            {/* Clinical Reasoning Icon */}
            <div className="absolute top-16 right-16 sm:top-20 sm:right-20 md:top-24 md:right-24 z-15 animate-float animation-delay-1000">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-purple-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-700 text-center">
                  Clinical Reasoning
                </div>
              </div>
            </div>

            {/* Evidence-Based Icon */}
            <div className="absolute bottom-24 left-12 sm:bottom-28 sm:left-16 md:bottom-32 md:left-20 z-15 animate-float animation-delay-2000">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-700 text-center">
                  Evidence-Based
                </div>
              </div>
            </div>

            {/* AI Action Plans Icon */}
            <div className="absolute top-1/3 right-1/5 z-15 animate-float animation-delay-3000">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-pink-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-700 text-center">
                  AI Actions
                </div>
              </div>
            </div>

            {/* Privacy & Compliance Icon */}
            <div className="absolute bottom-1/4 right-1/6 z-15 animate-float animation-delay-1500">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-emerald-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-700 text-center">
                  HIPAA Secure
                </div>
              </div>
            </div>

            {/* Continuous Learning Icon */}
            <div className="absolute top-1/2 left-1/6 z-15 animate-float animation-delay-2500">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-indigo-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-700 text-center">
                  Learning
                </div>
              </div>
            </div>

            {/* Personalized Context Icon */}
            <div className="absolute bottom-16 right-8 sm:bottom-20 sm:right-12 md:bottom-24 md:right-16 z-15 animate-float animation-delay-1800">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-cyan-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-semibold text-gray-700 text-center">
                  Personalized
                </div>
              </div>
            </div>

            {/* Subtle floating particles */}
            <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40 animate-float animation-delay-3000"></div>
            <div className="absolute bottom-1/3 left-8 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-float animation-delay-2000"></div>
            <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-40 animate-float animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

