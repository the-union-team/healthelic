export default function AboutHero() {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-white pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="hero-title">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                About HealthElic
              </span>
            </h1>
            <p className="body-large text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Developing intelligent, secure, and compassionate AI systems to make healthcare smarter, safer, and more human.
            </p>
            <p className="body text-gray-600 max-w-xl mx-auto lg:mx-0">
              We're building the future of healthcare through innovative AI that understands, reasons, and acts with clinical precision.
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

            {/* Central About Icon - Healthcare/Company */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-float-slow">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
                {/* Glowing background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                
                {/* Main company/healthcare icon */}
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating mission badge */}
            <div className="absolute top-16 right-16 sm:top-20 sm:right-20 md:top-24 md:right-24 z-15 animate-float">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-purple-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-16 left-16 sm:bottom-20 sm:left-20 md:bottom-24 md:left-24 z-15 animate-float animation-delay-2000">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>

            {/* Team badge */}
            <div className="absolute top-1/3 left-1/6 z-15 animate-float animation-delay-1500">
              <div className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-md rounded-lg shadow-xl border border-purple-300/50 px-3 py-2 sm:px-4 sm:py-2.5 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-bold text-white">Expert Team</span>
                </div>
              </div>
            </div>

            {/* Impact badge */}
            <div className="absolute bottom-1/3 right-1/6 z-15 animate-float animation-delay-3000">
              <div className="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-md rounded-lg shadow-xl border border-blue-300/50 px-3 py-2 sm:px-4 sm:py-2.5 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-bold text-white">Making Impact</span>
                </div>
              </div>
            </div>

            {/* Subtle floating particles */}
            <div className="absolute top-1/3 right-8 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-float animation-delay-3000"></div>
            <div className="absolute bottom-1/3 left-8 w-2.5 h-2.5 bg-purple-400 rounded-full opacity-40 animate-float animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
