'use client';

import { useEffect, useRef, useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  index: number;
}

export default function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
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
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-purple-300 transition-all duration-500 group relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/50 transition-all duration-300 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-start">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="card-title text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <p className="body-small text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}
