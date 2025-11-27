'use client';

import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/about/AboutHero';
import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import TeamSection from '@/components/sections/about/TeamSection';
import ImpactSection from '@/components/sections/about/ImpactSection';
import AboutSection from '@/components/sections/about/AboutSection';
import { aboutSections } from '@/constants/about';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <AboutHero />

        {/* Hero Section with Monitor */}
        <AboutHeroSection />

        {/* About Sections */}
        {aboutSections.slice(0, 2).map((section, index) => (
          <AboutSection key={section.id} section={section} index={index} />
        ))}

        {/* Team Section */}
        <TeamSection />

        {/* About Sections Continued */}
        {aboutSections.slice(2, 4).map((section, index) => (
          <AboutSection key={section.id} section={section} index={index + 2} />
        ))}

        {/* Impact Section */}
        <ImpactSection />

        {/* Remaining About Sections */}
        {aboutSections.slice(4).map((section, index) => (
          <AboutSection key={section.id} section={section} index={index + 4} />
        ))}
      </main>

      <Footer />
    </div>
  );
}

