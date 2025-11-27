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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Blog':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'Clinical Validation':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
    }
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Spotlight
              </span>
            </h2>
            <p className="body text-gray-600 max-w-2xl mx-auto">
              Featured content highlighting the latest insights and breakthroughs in healthcare AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {spotlightItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`group bg-white rounded-xl border-2 border-gray-200 p-6 lg:p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/50 transition-all duration-300 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold group-hover:bg-purple-200 transition-colors">
                        {item.category}
                      </span>
                      {item.date && (
                        <span className="ml-2 text-xs text-gray-500">{item.date}</span>
                      )}
                    </div>
                  </div>
                <h3 className="card-title text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="body-small text-gray-700 mb-4">
                  {item.description}
                </p>
                  <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
