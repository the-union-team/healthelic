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
      className={`bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col items-start">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}

