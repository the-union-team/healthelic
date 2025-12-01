'use client';

export default function TestimonialSection() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 lg:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        The Minds Behind{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Healthelic
                        </span>
                    </h2>
                </div>

                {/* Testimonial Content - Matching Image Design */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 items-start">
                        {/* Left Side - Testimonial Text */}
                        <div className="space-y-4 col-span-2">
                            {/* Main Testimonial Text */}
                            <div className="space-y-4 leading-none">
                                <p className="text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-normal">
                                    A <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">visionary physician-technologist</span>, Dr. Truong leads a diverse team of expert physicians — each distinguished in their own specialty — uniting <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">clinical mastery</span> with <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">advanced AI reasoning</span> to create technology that feels <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">human, safe, and precise</span>.
                                </p>
                                
                                {/* Quote */}
                                <div className="space-y-3">
                                    <p className="text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-normal">
                                        We&apos;re not replacing doctors — we&apos;re <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">amplifying their impact</span> through <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">intelligence that listens, learns, and supports</span>.
                                    </p>
                                    {/* Attribution */}
                                    <div className="text-sm sm:text-base text-gray-600 font-medium">
                                        — Dr. David Truong, MD
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Attribution */}
                        <div className="flex flex-col items-start justify-items-end self-end-safe space-y-4 pt-8 lg:pt-0 col-span-1 mb-10">
                            {/* Company Logo/Name */}
                            <div className="flex items-center gap-3">
                                {/* Abstract Icon/Logo */}
                                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                                    <svg
                                        className="w-full h-full text-gray-900"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        {/* Abstract star/snowflake shape */}
                                        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                                        <circle cx="12" cy="10" r="2" />
                                    </svg>
                                </div>
                                <div className="text-lg sm:text-xl font-normal bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                    Healthelic
                                </div>
                            </div>

                            {/* Person's Information */}
                            <div className="flex items-center gap-4">
                                {/* Profile Picture with Colored Border */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[1.5px] border-cyan-500 p-[1.5px]">
                                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                            {/* Placeholder for Dr. David's photo - replace with image when available */}
                                            {/* <img 
                                                src="/images/dr-david-truong.jpg" 
                                                alt="Dr. David Truong, MD"
                                                className="w-full h-full object-cover rounded-full"
                                            /> */}
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                                <svg
                                                    className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
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
                                        </div>
                                    </div>
                                </div>

                                {/* Name and Title */}
                                <div className="flex flex-col">
                                    <div className="text-base sm:text-lg font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                        Dr. David Truong, MD
                                    </div>
                                    <div className="text-sm sm:text-base text-gray-900 mt-0.5">
                                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Chief Medical Officer</span>, Healthelic
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); 
}

