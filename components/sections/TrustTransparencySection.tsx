'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface Feature {
    id: string;
    title: string;
}

const features: Feature[] = [
    {
        id: 'dual-verification',
        title: 'Dual-AI Verification. Every fact is checked twice — first by Healthelic\'s clinical reasoning engine, then by a secondary verification AI that confirms the source exists in PubMed, CrossRef, or guideline databases.',
    },
    {
        id: 'direct-source',
        title: 'Direct Source Access. Physicians can view or download the original peer-reviewed reference directly from the source — not an AI summary.',
    },
    {
        id: 'real-evidence',
        title: 'Real Evidence Only. Each claim includes citation metadata (DOI, PMID, publication year, and guideline version) so you know exactly where the insight comes from.',
    },
    {
        id: 'transparent-output',
        title: 'Transparent Output. If a reference cannot be verified, Healthelic clearly labels it as "unverified" — never fabricated or implied.',
    },
    {
        id: 'continuous-updating',
        title: 'Continuous Updating. The platform refreshes evidence automatically, ensuring that every recommendation reflects current, validated clinical standards.',
    },
];

export default function TrustTransparencySection() {
    const [expandedFeature, setExpandedFeature] = useState<string>('dual-verification');

    const toggleFeature = (featureId: string) => {
        setExpandedFeature(expandedFeature === featureId ? '' : featureId);
    };

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        Trust, Transparency, and Evidence
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        How Healthelic Prevents AI Hallucination and Ensures Accuracy
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
                    {/* Left Side - Features List */}
                    <div className="space-y-4">
                        {features.map((feature) => {
                            const isExpanded = expandedFeature === feature.id;
                            return (
                                <div
                                    key={feature.id}
                                    className={`
                                        transition-all duration-300 rounded-lg
                                        ${isExpanded
                                            ? 'bg-gray-50 border-l-4 border-blue-600 shadow-sm'
                                            : 'hover:bg-gray-50 border-l-4 border-transparent'
                                        }
                                    `}
                                >
                                    <button
                                        onClick={() => toggleFeature(feature.id)}
                                        className="w-full text-left p-4 lg:p-5 flex items-start justify-between gap-4"
                                    >
                                        <h3 className="font-semibold text-gray-900 text-sm lg:text-base flex-1">
                                            {feature.title}
                                        </h3>
                                        <svg
                                            className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                                                isExpanded ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side - UI Graphic */}
                    <div className="relative lg:sticky lg:top-8">
                        <div className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-gray-50 rounded-2xl p-6 lg:p-8 shadow-xl">
                            {/* UI Container */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                                {/* UI Header */}
                                <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
                                    <h3 className="text-lg font-semibold text-gray-900">Evidence Verification</h3>
                                    <p className="text-sm text-gray-600">Clinical Reference Check</p>
                                </div>

                                {/* UI Content */}
                                <div className="p-4 lg:p-6 space-y-4">
                                    {/* Source Cards */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">H</span>
                                                </div>
                                                <span className="text-xs font-semibold text-gray-700">Source</span>
                                            </div>
                                            <p className="text-xs text-gray-600">PubMed</p>
                                        </div>
                                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                                            <div className="flex items-center gap-2 mb-2">
                                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-xs font-semibold text-gray-700">Status</span>
                                            </div>
                                            <p className="text-xs text-gray-600">Verified</p>
                                        </div>
                                    </div>

                                    {/* Citation Metadata */}
                                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Citation Details</h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-600">DOI:</span>
                                                <span className="text-gray-900 font-mono">10.1234/example</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-600">PMID:</span>
                                                <span className="text-gray-900 font-mono">12345678</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-600">Year:</span>
                                                <span className="text-gray-900">2024</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-600">Version:</span>
                                                <span className="text-gray-900">v2.1</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Verification Status */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-sm font-semibold text-gray-900">Dual-AI Verified</span>
                                        </div>
                                        <p className="text-xs text-gray-600">
                                            Both verification systems confirmed source authenticity
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        View Original Source
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="text-center mb-8">
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-2">
                        Healthelic doesn&apos;t just generate answers — it proves them.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                        Every recommendation links directly to verified sources, creating the most trustworthy AI companion in modern medicine.
                    </p>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        href="#try-free"
                        variant="primary"
                        className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Try Healthelic for free
                    </Button>
                    <Button
                        href="#contact-sales"
                        variant="outline"
                        className="w-full sm:w-auto px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                        Contact sales
                    </Button>
                </div>
            </div>
        </section>
    );
}

