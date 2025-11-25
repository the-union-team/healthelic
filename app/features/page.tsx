'use client';
import Footer from '@/components/layout/Footer';
import FeaturesHero from '@/components/sections/features/FeaturesHero';
import FeatureItem from '@/components/sections/features/FeatureItem';
import { features } from '@/constants/features';
import MotionTestimonialSection from '@/components/sections/MotionTestimonialSection';
export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <FeaturesHero />

        {/* Individual Feature Sections */}
        {features.map((feature, index) => (
          <FeatureItem key={feature.id} feature={feature} index={index} />
        ))}
        <MotionTestimonialSection />    
      </main>
      
      <Footer />
    </div>
  );
}
