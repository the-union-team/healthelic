'use client';

import { useEffect, useRef, useState } from 'react';

interface FeaturedResource {
  title: string;
  description: string;
  type: 'video' | 'article' | 'study' | 'guide';
  duration?: string;
  href: string;
}

export default function FeaturedResources() {
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

  const featuredResources: FeaturedResource[] = [
    {
      title: 'Getting Started with Medicus: A Complete Guide',
      description: 'Learn the fundamentals of using Medicus in your daily practice, from basic queries to advanced features.',
      type: 'guide',
      duration: '15 min read',
      href: '#',
    },
    {
      title: 'Understanding Clinical Reasoning in AI',
      description: 'A deep dive into how Medicus processes medical information and provides evidence-based recommendations.',
      type: 'video',
      duration: '12 min',
      href: '#',
    },
    {
      title: 'Data Ethics in Healthcare AI',
      description: 'Exploring the ethical considerations and best practices for implementing AI in clinical settings.',
      type: 'article',
      duration: '8 min read',
      href: '#',
    },
    {
      title: 'Medicus Accuracy Validation Report',
      description: 'Comprehensive analysis of Medicus performance across various medical specialties and use cases.',
      type: 'study',
      duration: '25 min read',
      href: '#',
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'article':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'study':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200', iconBg: 'bg-red-500' };
      case 'article':
        return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', iconBg: 'bg-blue-500' };
      case 'study':
        return { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', iconBg: 'bg-emerald-500' };
      default:
        return { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', iconBg: 'bg-purple-500' };
    }
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Featured Resources
              </span>
            </h2>
            <p className="body text-gray-700 max-w-2xl mx-auto">
              Handpicked content to help you master Medicus and stay informed about the latest in healthcare AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredResources.map((resource, index) => {
              const colors = getTypeColor(resource.type);
              return (
                <a
                  key={index}
                  href={resource.href}
                  className={`group bg-white rounded-xl border-2 border-gray-200 p-6 lg:p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/50 transition-all duration-300 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 ${colors.iconBg} rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {getTypeIcon(resource.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                          </span>
                          {resource.duration && (
                            <span className="text-xs text-gray-500">{resource.duration}</span>
                          )}
                        </div>
                    <h3 className="card-title text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="body-small text-gray-700 mb-4">
                      {resource.description}
                    </p>
                        <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all">
                          <span>Read More</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
