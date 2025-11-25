'use client';

import { useState } from 'react';

interface Testimonial {
    name: string;
    title: string;
    quote: string;
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Dr. David Truong, MD',
        title: 'Chief Medical Officer, Healthelic',
        quote: 'HealthElic has transformed how we approach healthcare technology. The AI workforce understands the full context of our business, making it feel like we have a team of expert physicians working alongside us 24/7. The precision and depth of knowledge is truly remarkable.',
    },
    {
        name: 'Sarah Chen, PhD',
        title: 'Director of AI Research, HealthTech Innovations',
        quote: 'Working with HealthElic\'s AI employees has been a game-changer. They don\'t just respond—they reason, learn, and adapt to our specific needs. The full business context integration means every interaction is informed and relevant.',
    },
    {
        name: 'Michael Rodriguez, MD',
        title: 'Clinical Director, Advanced Care Systems',
        quote: 'The seamless integration of HealthElic\'s AI workforce into our daily operations has improved our efficiency dramatically. Having access to intelligent agents that understand our entire business context makes decision-making faster and more accurate.',
    },
];

export default function MotionTestimonialSection() {
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        Why HealthElic Offers the Best AI Employees
                        
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        World&apos;s first AI workforce at your fingertips. Powered by the full context of your business.
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div className="relative">
                    {/* Testimonials Container */}
                    <div className="relative mb-8">
                        <div className="flex items-center justify-center gap-4 lg:gap-6 min-h-[400px] lg:min-h-[500px]">
                            {getVisibleTestimonials().map(({ testimonial, position }, idx) => {
                                const isActive = position === 0;

                                return (
                                    <div
                                        key={idx}
                                        className={`
                                            flex-shrink-0
                                            transition-all duration-700 ease-in-out
                                            ${isActive
                                                ? 'opacity-100 blur-0 scale-100 z-10 w-full max-w-md lg:max-w-lg'
                                                : 'opacity-40 blur-md scale-90 z-0 w-0 lg:w-72 hidden lg:block pointer-events-none'
                                            }
                                        `}
                                    >
                                        <div className={`
                                            bg-white rounded-xl lg:rounded-2xl shadow-xl p-6 lg:p-8
                                            ${isActive ? 'border border-gray-100' : ''}
                                            h-full
                                        `}>
                                            {/* Profile Picture */}
                                            <div className="flex justify-center mb-5 lg:mb-6">
                                                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-cyan-400 p-0.5">
                                                    <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                                        <svg
                                                            className="w-12 h-12 lg:w-14 lg:h-14 text-gray-400"
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

                                            {/* Name and Title */}
                                            <div className="text-center mb-4 lg:mb-5">
                                                <h3 className="font-bold text-gray-900 text-base lg:text-lg mb-1">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-gray-600 text-sm lg:text-base">
                                                    {testimonial.title}
                                                </p>
                                            </div>

                                            {/* Testimonial Quote */}
                                            <p className="text-gray-700 text-sm lg:text-base leading-relaxed text-center">
                                                {testimonial.quote}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center items-center gap-3">
                        <button
                            onClick={goToPrevious}
                            className="text-cyan-500 hover:text-cyan-600 transition-all duration-300 p-2 rounded-full hover:bg-cyan-50 active:scale-95"
                            aria-label="Previous testimonial"
                        >
                            <svg
                                className="w-6 h-6 lg:w-7 lg:h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            className="text-cyan-500 hover:text-cyan-600 transition-all duration-300 p-2 rounded-full hover:bg-cyan-50 active:scale-95"
                            aria-label="Next testimonial"
                        >
                            <svg
                                className="w-6 h-6 lg:w-7 lg:h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
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

