import Button from '@/components/ui/Button';

export default function HeroSection() {
    return (
        <section className="min-h-[calc(100vh-8rem)] bg-white pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center lg:text-left">
                        <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-[1.2] sm:leading-tight">
                            Healthelic – Where Healthcare Meets <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">AI Innovation</span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Where AI Meets TLC — <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Technology, Learning, and Compassion</span>
                        </p>

                        <div className="flex justify-center lg:justify-start pt-2">
                            <Button href="#beta" variant="primary" className="px-3.5 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base bg-blue-600 hover:bg-blue-700 text-white border-0 flex items-center gap-1.5 hover:shadow-blue-500/50 group">
                                Physician? Join Our Beta Program
                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

                        {/* Floating decorative elements */}
                        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 z-10 animate-float">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl rotate-12 shadow-lg shadow-purple-500/30 flex items-center justify-center">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                        </div>

                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-20">
                            <button className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-[0_0_25px_rgba(147,51,234,0.6)] hover:shadow-[0_0_35px_rgba(147,51,234,0.9)] hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 flex items-center gap-1.5 sm:gap-2 group backdrop-blur-sm border border-white/20">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="transition-all duration-300">Onboarding...</span>
                            </button>
                        </div>

                        {/* Main illustration container with enhanced styling */}
                        <div className="relative w-full h-full flex items-center justify-center z-10">
                            <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-[28rem] flex items-center justify-center">
                                {/* Glowing background circle */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                                
                                <div className="relative z-10">
                                    <div className="relative w-40 h-52 sm:w-44 sm:h-56 md:w-48 md:h-64 lg:w-56 lg:h-72 xl:w-64 xl:h-80 flex items-end justify-center pb-6 sm:pb-7 md:pb-8 animate-float-slow">
                                        {/* Enhanced robot character */}
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
                                            
                                            {/* Central AI indicator with enhanced glow */}
                                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.9)] animate-pulse">
                                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3 md:h-3 bg-white rounded-full"></div>
                                                <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75"></div>
                                            </div>
                                            
                                            {/* Decorative antenna */}
                                            <div className="absolute top-2 sm:top-3 right-1 sm:right-2 w-4 h-6 sm:w-5 sm:h-8 bg-gradient-to-b from-purple-200 to-blue-200 rounded-full rotate-12 shadow-md"></div>
                                        </div>
                                        
                                        {/* Enhanced base platform */}
                                        <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-14 h-3 sm:w-16 sm:h-3.5 md:w-18 md:h-4 lg:w-22 lg:h-4.5 bg-gradient-to-r from-purple-100 via-white to-blue-100 rounded-full shadow-lg border border-purple-100"></div>
                                        <div className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 -translate-x-1/2 w-10 h-3 sm:w-12 sm:h-3.5 md:w-14 md:h-4 lg:w-16 lg:h-4.5 bg-gradient-to-r from-purple-50 via-white to-blue-50 rounded-full shadow-md"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating data visualization elements */}
                        <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 z-20 animate-float">
                            <div className="relative">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-purple-100 flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                                    <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-600 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                                    </svg>
                                </div>
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-purple-400 rounded-xl blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        {/* Stats cards floating around */}
                        <div className="absolute top-16 right-16 sm:top-20 sm:right-20 md:top-24 md:right-24 z-15 animate-float animation-delay-1000">
                            <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-purple-100 p-2 sm:p-2.5 md:p-3 group hover:scale-105 transition-all duration-300">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs sm:text-sm font-bold text-gray-900">99.9%</div>
                                        <div className="text-[10px] sm:text-xs text-gray-600">Accuracy</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-24 left-12 sm:bottom-28 sm:left-16 md:bottom-32 md:left-20 z-15 animate-float animation-delay-2000">
                            <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-blue-100 p-2 sm:p-2.5 md:p-3 group hover:scale-105 transition-all duration-300">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs sm:text-sm font-bold text-gray-900">10x</div>
                                        <div className="text-[10px] sm:text-xs text-gray-600">Faster</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Connection lines/beams */}
                        <div className="absolute top-1/2 left-1/4 w-px h-32 bg-gradient-to-b from-purple-400/50 via-blue-400/50 to-transparent opacity-40 animate-pulse"></div>
                        <div className="absolute top-1/3 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent opacity-40 animate-pulse animation-delay-2000"></div>

                        {/* More floating icons */}
                        <div className="absolute top-1/4 right-1/3 z-10 animate-float animation-delay-3000">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-200/50 flex items-center justify-center shadow-lg">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                        </div>

                        <div className="absolute bottom-1/4 left-1/4 z-10 animate-float animation-delay-1000">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-blue-200/50 flex items-center justify-center shadow-lg">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                        </div>

                        {/* Circular progress indicator */}
                        <div className="absolute top-12 right-1/3 z-10 animate-float animation-delay-4000">
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                <svg className="transform -rotate-90 w-full h-full">
                                    <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-200" />
                                    <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="251" strokeDashoffset="125" className="text-purple-600 animate-spin-slow" strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Grid pattern overlay */}
                        <div className="absolute inset-0 opacity-5 z-0" style={{
                            backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}></div>

                        {/* Additional floating particles */}
                        <div className="absolute top-1/2 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float animation-delay-1000"></div>
                        <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60 animate-float animation-delay-3000"></div>
                        <div className="absolute bottom-1/3 left-8 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-float animation-delay-2000"></div>
                        <div className="absolute top-1/5 right-12 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50 animate-float animation-delay-1500"></div>
                        <div className="absolute bottom-1/5 left-12 w-2 h-2 bg-blue-300 rounded-full opacity-50 animate-float animation-delay-2500"></div>
                        <div className="absolute top-2/3 right-16 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-50 animate-float animation-delay-3500"></div>

                        {/* Tech badge */}
                        <div className="absolute bottom-20 right-1/4 z-15 animate-float animation-delay-3000">
                            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-purple-200/50 shadow-lg">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] sm:text-xs font-semibold text-gray-700">AI Powered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

