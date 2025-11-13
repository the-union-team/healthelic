import HeroSection from '@/components/sections/HeroSection';
import PartnersSection from '@/components/sections/PartnersSection';
import OverviewSection from '@/components/sections/OverviewSection';
import InsightsSection from '@/components/sections/InsightsSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import ApproachSection from '@/components/sections/ApproachSection';
import TestimonialSliderSection from '@/components/sections/TestimonialSliderSection';
import MotionTestimonialSection from '@/components/sections/MotionTestimonialSection';
import TrustTransparencySection from '@/components/sections/TrustTransparencySection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <PartnersSection />
        <OverviewSection />
        <InsightsSection />
        <ComparisonSection />
        <TestimonialSection />
        <ApproachSection />
        {/* <TestimonialSliderSection /> */}
        <MotionTestimonialSection />
        <TrustTransparencySection />
      </main>
      
      <Footer />
    </div>
  );
}
