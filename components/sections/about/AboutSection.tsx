'use client';

import { useEffect, useRef, useState } from 'react';

interface AboutSectionProps {
  section: {
    id: string;
    title: string;
    description: string;
    details?: string[];
    cta?: {
      label: string;
      href: string;
    };
    icon: JSX.Element;
    visual: JSX.Element;
  };
  index: number;
}

export default function AboutSection({ section, index }: AboutSectionProps) {
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
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 translate-y-8';

  const visualAnimationClass = isVisible
    ? 'opacity-100 translate-x-0 scale-100'
    : 'opacity-0 translate-y-8 scale-95';

  return (
    <section
      id={section.id}
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
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mb-4 shadow-lg">
                {section.icon}
              </div>

              <h2 className="subsection-title">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {section.title}
                </span>
              </h2>

              <p className="body text-gray-700 max-w-2xl">
                {section.description}
              </p>

              {section.details && section.details.length > 0 && (
                <ul className="space-y-3 text-gray-700">
                  {section.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm sm:text-base leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.cta && (
                <div className="pt-4">
                  <a
                    href={section.cta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {section.cta.label}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Visual Side */}
          <div
            className={`relative h-full flex items-center justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'} transition-all duration-1000 ease-out delay-200 ${visualAnimationClass}`}
          >
            {section.visual}
          </div>
        </div>
      </div>
    </section>
  );
}


