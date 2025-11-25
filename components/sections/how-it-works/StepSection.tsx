'use client';

import { useEffect, useRef, useState } from 'react';

interface StepSectionProps {
  step: {
    id: string;
    number: number;
    title: string;
    description: string;
    details: string[];
    icon: JSX.Element;
    visual: JSX.Element;
  };
  index: number;
}

export default function StepSection({ step, index }: StepSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const contentAnimationClass = isVisible
    ? isEven
      ? 'opacity-100 translate-x-0'
      : 'opacity-100 translate-x-0'
    : 'opacity-0 translate-y-8';

  const visualAnimationClass = isVisible
    ? isEven
      ? 'opacity-100 translate-x-0 scale-100'
      : 'opacity-100 translate-x-0 scale-100'
    : 'opacity-0 translate-y-8 scale-95';

  return (
    <section
      id={step.id}
      ref={sectionRef}
      className={`py-16 lg:py-24 ${isEven ? 'bg-white' : 'bg-gray-50'} transition-all duration-1000 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[400px] lg:min-h-[500px]`}>
          {/* Content Side */}
          <div
            className={`flex flex-col justify-center h-full ${isEven ? 'lg:order-1' : 'lg:order-2'} transition-all duration-1000 ease-out delay-100 ${contentAnimationClass}`}
          >
            <div className="space-y-5 lg:space-y-6">
              {/* Step Number Badge */}
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl lg:text-2xl">{step.number}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent"></div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {step.title}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                {step.description}
              </p>

              {step.details.length > 0 && (
                <ul className="space-y-3 text-gray-700">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm sm:text-base leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Visual Side */}
          <div
            className={`relative h-full flex items-center justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'} transition-all duration-1000 ease-out delay-200 ${visualAnimationClass}`}
          >
            {step.visual}
          </div>
        </div>
      </div>
    </section>
  );
}

