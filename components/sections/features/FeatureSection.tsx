'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FeatureSectionProps {
  children: (isVisible: boolean) => ReactNode;
  index: number;
  isLeft: boolean;
}

export default function FeatureSection({ children, index: _index, isLeft: _isLeft }: FeatureSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={sectionRef}>
      {children(isVisible)}
    </div>
  );
}


