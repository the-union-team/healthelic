'use client';

import { useEffect, useRef, useState } from 'react';

interface SpotlightItem {
  title: string;
  description: string;
  category: string;
  date?: string;
  href: string;
}

export default function SpotlightSection() {
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

  const spotlightItems: SpotlightItem[] = [
    {
      title: 'The Future of AI in Clinical Decision Making',
      description: 'Explore how AI is transforming healthcare delivery and improving patient outcomes through advanced reasoning and evidence-based recommendations.',
      category: 'Blog',
      date: 'March 2024',
      href: '#',
    },
    {
      title: 'Medicus Clinical Validation Study',
      description: 'Peer-reviewed research demonstrating Medicus\' accuracy and reliability in real-world clinical scenarios across multiple specialties.',
      category: 'Clinical Validation',
      date: 'February 2024',
      href: '#',
    },
    {
      title: 'Case Study: Reducing Documentation Time by 60%',
      description: 'Learn how a large hospital system implemented Medicus to streamline clinical documentation and improve physician satisfaction.',
      category: 'Case Study',
      date: 'January 2024',
      href: '#',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Spotlight
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {spotlightItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`group bg-white rounded-xl border-2 border-gray-200 p-6 lg:p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                  {item.date && (
                    <span className="ml-2 text-xs text-gray-500">{item.date}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

