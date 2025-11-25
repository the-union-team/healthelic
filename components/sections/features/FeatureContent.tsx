import { JSX } from 'react';

interface FeatureContentProps {
  title: string;
  description: string;
  details: JSX.Element | null;
  isVisible: boolean;
  isLeft: boolean;
}

export default function FeatureContent({
  title,
  description,
  details,
  isVisible,
  isLeft,
}: FeatureContentProps) {
  return (
    <div className={`transition-all duration-1000 ease-out delay-100 w-full ${
      isVisible ? 'opacity-100 translate-x-0' : isLeft ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
    }`}>
      <div className="space-y-5 lg:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
          {description}
        </p>

        {details && (
          <div>
            {details}
          </div>
        )}
      </div>
    </div>
  );
}

