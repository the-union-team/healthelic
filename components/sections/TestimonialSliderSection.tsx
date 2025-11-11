'use client';

import { useState } from 'react';

interface Testimonial {
    name: string;
    title: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Jou-Ju Lu, MD, FACP, FCCP',
        title: 'Medical Director',
        quote: '"As a Medical Director and health administrator, I believe this Physician AI will not be optional — it will be essential. It will improve outcomes, reduce costs, and support clinicians. What makes it especially powerful is how seamlessly it fits into natural conversations, adapting to both physicians and patients, guiding users efficiently toward a diagnosis and suggesting evidence-based treatments. Rarely have I seen technology so well-conceived and so transformative. For healthcare systems, it will be strategically necessary."',
    },
    {
        name: 'George Le',
        title: 'NP',
        quote: '"Medicus finished my progress note and my differential—while I got coffee." Fifteen years in practice, a decade building and battle-testing AI from the wards to the cloud; I\'ve used Gemini, GPT-4 plug-ins, even coded my own. Most tools flatten when the ground gets uneven. Medicus finally handled clinical messiness: broad differentials ranked by likelihood, nuanced by what matters for the actual patient—comorbidities, social realities, even out-of-pocket costs. For the first time, my documentation and decision-making felt truly supported, not replaced. This is the difference between practicing medicine and practicing checklists. Glued to UpToDate? That\'s the past.',
    },
];

export default function TestimonialSliderSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const getVisibleTestimonials = () => {
        const result = [];
        for (let i = -1; i <= 1; i++) {
            let index = currentIndex + i;
            if (index < 0) index = testimonials.length + index;
            if (index >= testimonials.length) index = index - testimonials.length;
            result.push({ testimonial: testimonials[index], position: i });
        }
        return result;
    };

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        What Medical Experts Say <br />About{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Healthelic
                        </span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-start mb-6">
                        {getVisibleTestimonials().map(({ testimonial, position }, idx) => {
                            const isActive = position === 0;

                            return (
                                <div
                                    key={idx}
                                    className={`
                                        transition-all duration-500 ease-in-out
                                        ${isActive
                                            ? 'opacity-100 z-10'
                                            : 'opacity-20 blur-[2px]'
                                        }
                                    `}
                                >
                                    <div className="flex flex-col items-center text-center px-4">
                                        {/* Profile Image */}
                                        <div className="mb-5">
                                            <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full mx-auto overflow-hidden border-2 border-gray-200">
                                                <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 flex items-center justify-center">
                                                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                                        <svg
                                                            className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 text-white"
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
                                        <div className="mb-3">
                                            <h3 className={`
                                                font-bold mb-1
                                                ${isActive
                                                    ? 'text-gray-900 text-base sm:text-lg'
                                                    : 'text-gray-300 text-sm sm:text-base'
                                                }
                                            `}>
                                                {testimonial.name}
                                            </h3>
                                            <p className={`
                                                ${isActive
                                                    ? 'text-gray-600 text-sm'
                                                    : 'text-gray-300 text-xs'
                                                }
                                            `}>
                                                {testimonial.title}
                                            </p>
                                        </div>

                                        {/* Testimonial Quote */}
                                        <p className={`
                                            leading-relaxed
                                            ${isActive
                                                ? 'text-gray-700 text-sm sm:text-base'
                                                : 'text-gray-300 text-xs sm:text-sm'
                                            }
                                        `}>
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center items-center gap-3">
                        <button
                            onClick={goToPrevious}
                            className="text-blue-600 hover:text-blue-700 transition-colors duration-300 p-2"
                            aria-label="Previous testimonial"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            className="text-blue-600 hover:text-blue-700 transition-colors duration-300 p-2"
                            aria-label="Next testimonial"
                        >
                            <svg
                                className="w-6 h-6"
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
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

