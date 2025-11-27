export default function ContactHero() {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-white pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="hero-title">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                CONNECT PAGE
              </span>
            </h1>
            <p className="body-large text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Get in touch with us. We're here to help and answer any questions you may have about Healthelic.
            </p>
            <p className="body text-gray-600 max-w-xl mx-auto lg:mx-0">
              Whether you're a physician, partner, or media representative, we'd love to hear from you.
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

            {/* Central Contact Icon - Communication/Connection */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-float-slow">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
                {/* Glowing background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                
                {/* Main communication icon */}
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating contact method icons */}
            <div className="absolute top-16 right-16 sm:top-20 sm:right-20 md:top-24 md:right-24 z-15 animate-float">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-purple-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-16 left-16 sm:bottom-20 sm:left-20 md:bottom-24 md:left-24 z-15 animate-float animation-delay-2000">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>

            {/* Partnership badge */}
            <div className="absolute top-1/3 left-1/6 z-15 animate-float animation-delay-1500">
              <div className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-md rounded-lg shadow-xl border border-purple-300/50 px-3 py-2 sm:px-4 sm:py-2.5 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-bold text-white">Partnerships</span>
                </div>
              </div>
            </div>

            {/* Media badge */}
            <div className="absolute bottom-1/3 right-1/6 z-15 animate-float animation-delay-3000">
              <div className="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-md rounded-lg shadow-xl border border-blue-300/50 px-3 py-2 sm:px-4 sm:py-2.5 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-bold text-white">Media</span>
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

