import FeatureContent from './FeatureContent';
import FeatureVisual from './FeatureVisual';
import FeatureSection from './FeatureSection';
import { getFeatureDetails } from './FeatureDetails';
import { getFeatureVisual } from './FeatureVisuals';
import type { Feature } from '@/constants/features';

interface FeatureItemProps {
  feature: Feature;
  index: number;
}

export default function FeatureItem({ feature, index }: FeatureItemProps) {
  const isEven = index % 2 === 0;
  const isLeft = isEven; // Even indices: content left, image right

  return (
    <FeatureSection index={index} isLeft={isLeft}>
      {(isVisible) => (
        <section
          id={feature.id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[500px] lg:min-h-[600px] ${
              isLeft ? '' : 'lg:grid-flow-dense'
            }`}>
              {/* Content Side */}
              <div className={`${isLeft ? '' : 'lg:col-start-2'} h-full flex items-center justify-center`}>
                <div className="w-full">
                  <FeatureContent
                    title={feature.title}
                    description={feature.description}
                    details={getFeatureDetails(feature.id)}
                    isVisible={isVisible}
                    isLeft={isLeft}
                  />
                </div>
              </div>

              {/* Visual Side */}
              <div className={`relative ${isLeft ? '' : 'lg:col-start-1 lg:row-start-1'} h-[400px] sm:h-[500px] lg:h-full flex items-center justify-center`}>
                <FeatureVisual
                  visual={getFeatureVisual(feature.id)}
                  isVisible={isVisible}
                  isLeft={isLeft}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </FeatureSection>
  );
}




