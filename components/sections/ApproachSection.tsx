'use client';

import { useState } from 'react';

interface Pillar {
    title: string;
    description: string;
    tagline: string;
}

const pillars: Pillar[] = [
    {
        title: 'AI for Patients',
        description: 'Personal health companions that simplify symptom tracking, health education, and decision-making.',
        tagline: 'Empower health decisions',
    },
    {
        title: 'AI for Providers',
        description: 'Clinical copilots that write notes, guide reasoning, and eliminate administrative burden — giving physicians time to care.',
        tagline: 'Amplify clinical impact',
    },
    {
        title: 'AI for Enterprises',
        description: 'Secure orchestration of AI systems across networks, with built-in compliance, auditability, and data governance.',
        tagline: 'Scale with confidence',
    },
];

export default function ApproachSection() {
    const [activePillar, setActivePillar] = useState(0);

    return (
        <section className="bg-gray-50 py-10 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8 lg:mb-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                        Our Approach — Building an{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Ecosystem of Intelligent Care
                        </span>
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Healthelic is more than a product — it&apos;s a full ecosystem of AI agents designed to transform healthcare at every level.
                    </p>
                </div>

                {/* Pillar Selection Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8 lg:mb-10">
                    {pillars.map((pillar, index) => {
                        const isActive = activePillar === index;
                        return (
                            <button
                                key={index}
                                onClick={() => setActivePillar(index)}
                                className={`
                                    rounded-lg p-4 text-left transition-all duration-300 shadow-sm
                                    ${isActive
                                        ? 'bg-gray-900 text-white shadow-md'
                                        : 'bg-white text-gray-900 hover:shadow-md'
                                    }
                                `}
                            >
                                <div className={`text-[10px] sm:text-xs mb-1 ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {pillar.tagline}
                                </div>
                                <div className={`text-sm sm:text-base font-bold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                    {pillar.title}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Main Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start mb-8">
                    {/* Left Side - Text Content */}
                    <div className="space-y-3">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            {pillars[activePillar].description}
                        </h3>
                        <a
                            href="#learn-more"
                            className="inline-flex items-center gap-1.5 text-gray-900 text-sm font-medium hover:text-purple-600 transition-colors group"
                        >
                            Learn more
                            <svg
                                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
                        </a>
                    </div>

                    {/* Right Side - Image Placeholder with Gradient Border */}
                    <div className="relative">
                        <div className="relative rounded-lg overflow-hidden">
                            {/* Gradient Border on Top and Left */}
                            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
                                {/* Top gradient border */}
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500"></div>
                                {/* Left gradient border */}
                                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-400 via-purple-500 to-blue-500"></div>
                            </div>
                            {/* Image Container - Placeholder Image */}
                            <div className="w-full h-[180px] sm:h-[280px] lg:h-[300px] rounded-lg ml-[3px] mt-[3px] overflow-hidden bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 relative">
                                {/* Simulated Image Content */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-100 to-gray-200"></div>
                                </div>
                                {/* Placeholder Pattern */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-6">
                                        {/* Simulated person/workspace silhouette */}
                                        <div className="relative mx-auto mb-4">
                                            {/* Head */}
                                            <div className="w-16 h-16 mx-auto bg-gray-300 rounded-full mb-2"></div>
                                            {/* Body */}
                                            <div className="w-20 h-24 mx-auto bg-gray-400 rounded-t-lg"></div>
                                            {/* Desk/Computer */}
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-16 bg-gray-500 rounded"></div>
                                        </div>
                                        <div className="text-xs text-gray-500 font-medium">
                                            {pillars[activePillar].title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Concluding Statement */}
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Every Healthelic solution is designed to make healthcare more{' '}
                        <span className="font-semibold">connected</span>, more{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                            compassionate
                        </span>
                        , and more{' '}
                        <span className="font-semibold">intelligent</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}

