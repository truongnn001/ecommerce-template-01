import { Metadata } from 'next';
import HeroSlider from '@/components/home/HeroSlider/HeroSlider';
import CategoryGrid from '@/components/home/CategoryGrid/CategoryGrid';
import BrandShowcase from '@/components/home/BrandShowcase/BrandShowcase';
import BestSellers from '@/components/home/BestSellers/BestSellers';
import Testimonials from '@/components/home/Testimonials/Testimonials';
import EducationResources from '@/components/home/EducationResources/EducationResources';
import ValueProps from '@/components/home/ValueProps/ValueProps';
import FadeInSection from '@/components/ui/FadeInSection/FadeInSection';

export const metadata: Metadata = {
  title: 'Universal Companies - Professional Spa & Salon Supplies',
  description:
    'Shop professional spa, salon, and beauty supplies. Trusted by professionals for over 40 years. Free shipping on orders $749+. Earn CEUs with free courses.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Value Propositions */}
      <FadeInSection delay={100}>
        <ValueProps />
      </FadeInSection>

      {/* Category Grid */}
      <FadeInSection delay={200}>
        <CategoryGrid />
      </FadeInSection>

      {/* Best Sellers */}
      <FadeInSection delay={300}>
        <BestSellers />
      </FadeInSection>

      {/* Brand Showcase */}
      <FadeInSection delay={100}>
        <BrandShowcase />
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection delay={200}>
        <Testimonials />
      </FadeInSection>

      {/* Education Resources */}
      <FadeInSection delay={300}>
        <EducationResources />
      </FadeInSection>
    </div>
  );
}
