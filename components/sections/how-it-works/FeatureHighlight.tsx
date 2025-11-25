'use client';

import { useEffect, useRef, useState } from 'react';

interface FeatureHighlightProps {
  feature: {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
    color: string;
    visual: JSX.Element;
  };
  index: number;
}

export default function FeatureHighlight({ feature, index }: FeatureHighlightProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-blue-500',
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      gradient: 'from-emerald-500 to-green-500',
    },
    cyan: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-600',
      border: 'border-cyan-200',
      gradient: 'from-cyan-500 to-blue-500',
    },
  };

  const colors = colorClasses[feature.color] || colorClasses.purple;

  return (
    <section
      id={feature.id}
      ref={sectionRef}
      className={`py-16 lg:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} mb-6 shadow-lg`}>
              {feature.icon}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {feature.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              {feature.description}
            </p>
          </div>

          {/* Visual */}
          <div
            className={`transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
            }`}
          >
            {feature.visual}
          </div>
        </div>
      </div>
    </section>
  );
}

