export default function ResourcesHero() {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-white pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="hero-title">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Reports & Resources
              </span>
            </h1>
            <p className="body-large text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Helping C-suite teams develop a deeper understanding of workforce trends and how tech can support their goals.
            </p>
            <p className="body text-gray-600 max-w-xl mx-auto lg:mx-0">
              Access tutorials, case studies, clinical validations, and insights to master Medicus and stay informed about healthcare AI.
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

            {/* Central Resources Icon - Book/Document */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-float-slow">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
                {/* Glowing background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                
                {/* Main resources icon */}
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating resource type badges */}
            <div className="absolute top-16 right-16 sm:top-20 sm:right-20 md:top-24 md:right-24 z-15 animate-float">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-purple-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-16 left-16 sm:bottom-20 sm:left-20 md:bottom-24 md:left-24 z-15 animate-float animation-delay-2000">
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 p-3 sm:p-4 group hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            </div>

            {/* Blog badge */}
            <div className="absolute top-1/3 left-1/6 z-15 animate-float animation-delay-1500">
              <div className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-md rounded-lg shadow-xl border border-purple-300/50 px-3 py-2 sm:px-4 sm:py-2.5 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-bold text-white">Blogs</span>
                </div>
              </div>
            </div>

            {/* Case Studies badge */}
            <div className="absolute bottom-1/3 right-1/6 z-15 animate-float animation-delay-3000">
              <div className="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-md rounded-lg shadow-xl border border-blue-300/50 px-3 py-2 sm:px-4 sm:py-2.5 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-bold text-white">Case Studies</span>
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
