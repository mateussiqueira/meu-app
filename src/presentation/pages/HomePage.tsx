import React from 'react';
import BenefitsSection from '../components/BenefitsSection';
import BusinessSection from '../components/BusinessSection';
import CTASection from '../components/CTASection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import PricingSection from '../components/PricingSection';
import TestimonialSection from '../components/TestimonialSection';

const HomePage = () => {
  return (
    <div className="Frame w-full bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <BusinessSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;