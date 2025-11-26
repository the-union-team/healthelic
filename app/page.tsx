import Footer from '@/components/layout/Footer';
import ApproachSection from '@/components/sections/ApproachSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import HeroSection from '@/components/sections/HeroSection';
import InsightsSection from '@/components/sections/InsightsSection';
import MotionTestimonialSection from '@/components/sections/MotionTestimonialSection';
import OverviewSection from '@/components/sections/OverviewSection';
import PartnersSection from '@/components/sections/PartnersSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import TrustTransparencySection from '@/components/sections/TrustTransparencySection';

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
       
        <MotionTestimonialSection />
        <TrustTransparencySection />
      </main>
      
      <Footer />
    </div>
  );
}
