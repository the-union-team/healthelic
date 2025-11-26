'use client';

import { useEffect, useRef, useState } from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  index: number;
  href?: string;
}

export default function ResourceCard({ title, description, icon, index, href = '#' }: ResourceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <a
      href={href}
      ref={cardRef}
      className={`block bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-500 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base flex-grow">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all">
          <span>Explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

