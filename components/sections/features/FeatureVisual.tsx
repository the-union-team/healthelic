import { JSX } from 'react';

interface FeatureVisualProps {
  visual: JSX.Element;
  isVisible: boolean;
  isLeft: boolean;
}

export default function FeatureVisual({
  visual,
  isVisible,
  isLeft,
}: FeatureVisualProps) {
  return (
    <div className={`relative h-full w-full transition-all duration-1000 ease-out delay-200 ${
      isVisible ? 'opacity-100 translate-x-0 scale-100' : isLeft ? 'opacity-0 translate-x-8 scale-95' : 'opacity-0 -translate-x-8 scale-95'
    }`}>
      {visual}
    </div>
  );
}

