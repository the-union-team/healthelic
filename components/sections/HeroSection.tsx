import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-white pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center lg:text-left">
            <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-[1.2] sm:leading-tight">
              Healthelic – Where Healthcare Meets{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                AI Innovation
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Where AI Meets TLC —{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Technology, Learning, and Compassion
              </span>
            </p>

            <div className="flex justify-center lg:justify-start pt-2">
              <Button
                href="#beta"
                variant="primary"
                className="px-3.5 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base bg-blue-600 hover:bg-blue-700 text-white border-0 flex items-center gap-1.5 hover:shadow-blue-500/50 group"
              >
                Physician? Join Our Beta Program
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Clinical Status Badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-20">
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-[0_0_25px_rgba(147,51,234,0.6)] hover:shadow-[0_0_35px_rgba(147,51,234,0.9)] hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 flex items-center gap-1.5 sm:gap-2 group backdrop-blur-sm border border-white/20">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-12"
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
                <span className="transition-all duration-300">
                  Analyzing...
                </span>
              </button>
            </div>

            {/* Main illustration container with enhanced styling */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-[28rem] flex items-center justify-center">
                {/* Glowing background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>

                <div className="relative z-10">
                  <div className="relative w-40 h-52 sm:w-44 sm:h-56 md:w-48 md:h-64 lg:w-56 lg:h-72 xl:w-64 xl:h-80 flex items-end justify-center pb-6 sm:pb-7 md:pb-8 animate-float-slow">
                    {/* Enhanced AI character with healthcare theme */}
                    <div className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 lg:w-40 lg:h-48 xl:w-44 xl:h-52">
                      {/* Main body with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-blue-50 rounded-full shadow-2xl border-2 border-purple-100"></div>

                      {/* Eyes with glow effect */}
                      <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.8)] animate-pulse"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.8)] animate-pulse animation-delay-2000"></div>
                      </div>

                      {/* Mouth */}
                      <div className="absolute bottom-6 sm:bottom-7 md:bottom-8 left-1/2 -translate-x-1/2 w-4 h-0.5 sm:w-5 sm:h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>

                      {/* Central medical cross/plus indicator with enhanced glow */}
                      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.9)] animate-pulse">
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3 md:h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75"></div>
                      </div>

                      {/* Medical cross decorative element */}
                      <div className="absolute top-2 sm:top-3 right-1 sm:right-2 w-4 h-6 sm:w-5 sm:h-8 bg-gradient-to-b from-purple-200 to-blue-200 rounded-full rotate-12 shadow-md flex items-center justify-center">
                        <svg
                          className="w-2 h-3 sm:w-2.5 sm:h-4 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Enhanced base platform */}
                    <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-14 h-3 sm:w-16 sm:h-3.5 md:w-18 md:h-4 lg:w-22 lg:h-4.5 bg-gradient-to-r from-purple-100 via-white to-blue-100 rounded-full shadow-lg border border-purple-100"></div>
                    <div className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 -translate-x-1/2 w-10 h-3 sm:w-12 sm:h-3.5 md:w-14 md:h-4 lg:w-16 lg:h-4.5 bg-gradient-to-r from-purple-50 via-white to-blue-50 rounded-full shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating heart rate monitor / health chart */}
            <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 z-20 animate-float">
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-purple-100 flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-600 group-hover:text-blue-600 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-400 rounded-xl blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Healthcare stats cards floating around */}
            <div className="absolute top-16 right-16 sm:top-20 sm:right-20 md:top-24 md:right-24 z-15 animate-float animation-delay-1000">
              <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-purple-100 p-2 sm:p-2.5 md:p-3 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900">
                      99.9%
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      Clinical Accuracy
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 left-12 sm:bottom-28 sm:left-16 md:bottom-32 md:left-20 z-15 animate-float animation-delay-2000">
              <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-blue-100 p-2 sm:p-2.5 md:p-3 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900">
                      24/7
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      Patient Care
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating particles */}
            <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40 animate-float animation-delay-3000"></div>
            <div className="absolute bottom-1/3 left-8 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-float animation-delay-2000"></div>

            {/* Clinical AI badge */}
            <div className="absolute bottom-20 right-1/4 z-15 animate-float animation-delay-3000">
              <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-purple-200/50 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-700">
                    Clinical AI
                  </span>
                </div>
              </div>
            </div>

            {/* Healthelic Project Name Badge */}
            <div className="absolute top-1/2 left-1/6 z-20 animate-float animation-delay-1500">
              <div className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-md rounded-lg shadow-2xl border border-purple-300/50 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white tracking-wide">
                    Healthelic
                  </span>
                </div>
              </div>
            </div>

            {/* Medical Pill - Medicine Icon */}
            <div className="absolute top-1/4 left-1/4 z-10 animate-float animation-delay-1800">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl border border-rose-200/50 flex items-center justify-center shadow-lg group hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M724.5 615.6L546.6 437.8c-3.4-3.4-3.4-9 0-12.5l143.6-143.6c50.5-50.4 133-50.4 183.5 0 54.2 54.2 54.2 142.9 0 197.1L736.9 615.6c-3.4 3.4-9 3.4-12.4 0z"
                      fill="#bed4f9"
                    ></path>
                    <path
                      d="M238.2 222.1c37.2 0 72.1 14.4 98.2 40.5l149 149.1L289 608 140 458.9c-26.1-26.1-40.5-61-40.5-98.2s14.4-72.1 40.5-98.2 61-40.4 98.2-40.4m0-15c-39.4 0-78.9 15-108.8 44.9-59.8 59.8-59.8 157.7 0 217.6L289 629.2l217.6-217.6L347 252c-29.9-30-69.3-44.9-108.8-44.9z"
                      fill="#fb7474"
                    ></path>
                    <path
                      d="M784.5 222.1c37.2 0 72.1 14.4 98.2 40.5 26.1 26.1 40.5 61 40.5 98.2s-14.4 72.1-40.5 98.2L733.6 608 537.2 411.6l149.1-149c26.1-26.1 61-40.5 98.2-40.5m0-15c-39.4 0-78.9 15-108.8 44.8L516 411.6l217.6 217.6 159.7-159.6c59.9-59.8 59.9-157.8 0-217.6-30-29.9-69.4-44.9-108.8-44.9zM570.6 623.7c6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6-3.1 0-6-1.2-8.2-3.4s-3.4-5.1-3.4-8.2c0-6.4 5.2-11.6 11.6-11.6m0.1-15c-14.7 0-26.6 11.9-26.6 26.6s11.9 26.6 26.6 26.6c14.7 0 26.6-11.9 26.6-26.6 0-14.7-11.9-26.6-26.6-26.6z"
                      fill="#b1afaf"
                    ></path>
                    <path
                      d="M454.8 622.6c6.4 0 11.6 5.2 11.6 11.6s-5.2 11.6-11.6 11.6c-3.1 0-6-1.2-8.2-3.4s-3.4-5.1-3.4-8.2c0-3.1 1.2-6 3.4-8.2s5.1-3.4 8.2-3.4m0-15c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6s26.6-11.9 26.6-26.6c0.1-14.7-11.9-26.6-26.6-26.6zM569.3 757.7c3.1 0 6 1.2 8.2 3.4s3.4 5.1 3.4 8.2c0 3.1-1.2 6-3.4 8.2s-5.1 3.4-8.2 3.4-6-1.2-8.2-3.4-3.4-5.1-3.4-8.2c0-3.1 1.2-6 3.4-8.2 2.2-2.1 5.1-3.4 8.2-3.4m0-15c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6s26.6-11.9 26.6-26.6c0.1-14.6-11.9-26.6-26.6-26.6zM453.5 756.6c3.1 0 6 1.2 8.2 3.4s3.4 5.1 3.4 8.2c0 3.1-1.2 6-3.4 8.2-2.2 2.2-5.1 3.4-8.2 3.4-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6m0-15c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6s26.6-11.9 26.6-26.6-11.9-26.6-26.6-26.6zM622.1 698.8c3.1 0 6 1.2 8.2 3.4s3.4 5.1 3.4 8.2c0 3.1-1.2 6-3.4 8.2s-5.1 3.4-8.2 3.4c-3.1 0-6-1.2-8.2-3.4s-3.4-5.1-3.4-8.2c0-3.1 1.2-6 3.4-8.2s5.1-3.4 8.2-3.4m0-15c-14.7 0-26.6 11.9-26.6 26.6s11.9 26.6 26.6 26.6c14.7 0 26.6-11.9 26.6-26.6 0.1-14.7-11.9-26.6-26.6-26.6zM396.9 693.9c6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6s-11.6-5.2-11.6-11.6c0-3.1 1.2-6 3.4-8.2 2.2-2.1 5.1-3.4 8.2-3.4m0-15c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6s26.6-11.9 26.6-26.6c0-14.6-11.9-26.6-26.6-26.6zM510.2 689.9c6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6s-11.6-5.2-11.6-11.6c0-3.1 1.2-6 3.4-8.2s5.1-3.4 8.2-3.4m0-15c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6s26.6-11.9 26.6-26.6-11.9-26.6-26.6-26.6zM511.5 557.8c6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6-3.1 0-6-1.2-8.2-3.4s-3.4-5.1-3.4-8.2c0-3.1 1.2-6 3.4-8.2 2.2-2.2 5.1-3.4 8.2-3.4m0-15c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6s26.6-11.9 26.6-26.6c0.1-14.7-11.9-26.6-26.6-26.6zM508.9 823.7c6.4 0 11.6 5.2 11.6 11.6 0 3.1-1.2 6-3.4 8.2s-5.1 3.4-8.2 3.4c-6.4 0-11.6-5.2-11.6-11.6 0-3.1 1.2-6 3.4-8.2s5.1-3.4 8.2-3.4m0-15c-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6 14.7 0 26.6-11.9 26.6-26.6 0-14.7-11.9-26.6-26.6-26.6z"
                      fill="#fb7474"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>

            {/* Heart Monitor - Medical Tool */}
            <div className="absolute top-60 right-1/5 z-10 animate-float animation-delay-2200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-cyan-200/50 flex items-center justify-center shadow-lg group hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M143.8 500.4h156.5l58.4-120.3 92.9 363.1L494.7 497h48.9l34 86.1 43.6-181.7 59.5 246.5 38.6-154.1h191.9s40.5-167.7-48.9-244.1c-107.7-92.1-204.5-56.6-298.3 38l-50.1 53.5-45.4-46.7S389.1 190 292.6 204.6c-89.1 13.5-205 120.5-148.8 295.8z"
                      fill="#F9C0C0"
                    ></path>
                    <path
                      d="M513.7 903.1l-4.3-2.5c-0.3-0.2-39.2-22.4-95.8-63.6-52.2-37.9-130.6-100.3-208-181.8-35.2-37-62.3-75.9-80.7-115.5l13.6-6.3c17.7 38.1 43.9 75.7 77.9 111.5 134.9 142 274.5 227.4 297.2 240.8 22.9-13.6 162.5-99 297.2-240.8 36.7-38.7 64.3-79.2 81.9-120.5 15.8-36.8 23.7-74.3 23.5-111.3-0.2-62.8-24.4-124.2-66.4-168.4-35.9-37.8-83.7-58.6-134.7-58.6s-98.9 20.8-134.7 58.6l-66.8 70.4-66.8-70.4c-35.9-37.8-83.7-58.6-134.7-58.6s-98.9 20.8-134.7 58.6c-25.5 26.8-44.8 60.4-55.8 97.1-12.7 42.3-14 86.3-3.9 131l-14.6 3.3c-10.7-47.2-9.3-93.8 4.2-138.6 11.7-39 32.2-74.6 59.3-103.1 38.7-40.8 90.4-63.2 145.6-63.2s106.9 22.5 145.6 63.2l55.9 58.9 55.9-58.9c38.7-40.8 90.4-63.2 145.6-63.2s106.9 22.5 145.6 63.2c44.5 46.9 70.2 112 70.5 178.6 0.1 39.1-8.2 78.6-24.7 117.3-18.4 42.9-46.9 84.9-84.9 124.9-77.4 81.5-155.9 143.9-208 181.8-56.6 41.2-95.5 63.4-95.9 63.6l-4.1 2.5z"
                      fill="#999999"
                    ></path>
                    <path
                      d="M454.1 769.3l-96.6-377.4-54.7 116.5H76.6v-8h221.1l62.1-132.1 92.6 362L491.3 493h54.9l30.4 76.8 44.5-185.6 59.6 246.9 35.4-141.3h235v8H722.3l-41.8 166.8-59.4-246.2-42.6 177.9-37.7-95.3H498z"
                      fill="#CE0202"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>

            {/* Medical Clipboard/Notes - Clinical Documentation */}
            <div className="absolute bottom-1/4 right-1/6 z-10 animate-float animation-delay-2600">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-xl border border-emerald-200/50 flex items-center justify-center shadow-lg group hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M673 366.8c-4.8 3.5-10.5 4.4-16.7 4.4s-10.9 1.3-15.6-2.2c-12.7 6.6-25.8 20.4-25.8 36.4h76.2c0-16-5.4-32-18.1-38.6z"
                      fill="#F9C0C0"
                    ></path>
                    <path
                      d="M652.6 342.1m-17 0a17 17 0 1 0 34 0 17 17 0 1 0-34 0Z"
                      fill="#F9C0C0"
                    ></path>
                    <path
                      d="M742.8 893.2H281.2c-8.8 0-16-7.2-16-16V238.9c0-8.8 7.2-16 16-16h461.7c8.8 0 16 7.2 16 16v638.3c-0.1 8.8-7.2 16-16.1 16zM281.2 230.9c-4.4 0-8 3.6-8 8v638.3c0 4.4 3.6 8 8 8h461.7c4.4 0 8-3.6 8-8V238.9c0-4.4-3.6-8-8-8H281.2z"
                      fill="#CE0202"
                    ></path>
                    <path
                      d="M754.8 958.5H269.2c-40.7 0-73.7-33.1-73.7-73.7V231.3c0-40.7 33.1-73.7 73.7-73.7h137.9c2.4-24.8 13.5-47.8 31.5-65.3 19.8-19.3 46-29.9 73.7-29.9 27.7 0 53.8 10.6 73.7 29.9 18 17.5 29.1 40.5 31.5 65.3h137.4c40.7 0 73.7 33.1 73.7 73.7v653.5c0 40.6-33.1 73.7-73.8 73.7zM269.2 172.6c-32.4 0-58.7 26.3-58.7 58.7v653.5c0 32.4 26.3 58.7 58.7 58.7h485.7c32.4 0 58.7-26.3 58.7-58.7V231.3c0-32.4-26.3-58.7-58.7-58.7H603.2l-0.2-7.3c-0.7-23.6-10.5-45.8-27.5-62.3S536 77.3 512.3 77.3 466.1 86.5 449 103c-17 16.5-26.7 38.6-27.5 62.3l-0.2 7.3H269.2z"
                      fill="#298889"
                    ></path>
                    <path
                      d="M514.5 153.3c-12.6 0-22.8-10.2-22.8-22.8s10.2-22.8 22.8-22.8 22.8 10.2 22.8 22.8-10.3 22.8-22.8 22.8z m0-37.5c-8.1 0-14.8 6.6-14.8 14.8s6.6 14.8 14.8 14.8c8.2 0 14.8-6.6 14.8-14.8s-6.7-14.8-14.8-14.8z"
                      fill="#CE0202"
                    ></path>
                    <path
                      d="M637.2 256H386.3c-8.8 0-16-7.2-16-16v-58.8c0-8.8 7.2-16 16-16h250.9c8.8 0 16 7.2 16 16V240c0 8.8-7.2 16-16 16z m-250.9-82.8c-4.4 0-8 3.6-8 8V240c0 4.4 3.6 8 8 8h250.9c4.4 0 8-3.6 8-8v-58.8c0-4.4-3.6-8-8-8H386.3zM649 362.5c-13.8 0-25.1-11.3-25.1-25.1s11.3-25.1 25.1-25.1 25.1 11.3 25.1 25.1-11.2 25.1-25.1 25.1z m0-42.2c-9.4 0-17.1 7.7-17.1 17.1s7.7 17.1 17.1 17.1 17.1-7.7 17.1-17.1-7.6-17.1-17.1-17.1z"
                      fill="#298889"
                    ></path>
                    <path
                      d="M697.2 409.4h-96.3v-4c0-18.5 10.4-35.1 27-43.3l2.1-1 1.9 1.3c5.1 3.5 11 5.3 17.1 5.3s12.1-1.8 17.1-5.3l1.9-1.3 2.1 1c16.7 8.2 27 24.7 27 43.3v4h0.1z m-88.1-8H689c-1.3-13.1-8.8-24.6-20.4-31.1-5.9 3.5-12.6 5.4-19.6 5.4-6.9 0-13.7-1.9-19.6-5.4-11.5 6.5-19 18-20.3 31.1zM354.4 320.8h103.8v8H354.4zM354.4 395.9h178.8v8H354.4zM354.4 471h60.7v8h-60.7zM354.4 546h338.9v8H354.4zM354.4 621.1h273.8v8H354.4zM354.4 696.2h89.4v8h-89.4zM619.3 812.1h74v8h-74z"
                      fill="#298889"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
