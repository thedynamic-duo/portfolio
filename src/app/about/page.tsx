import React from 'react';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import OurExpertise from '../components/OurExpertise';
import OurStory from '../components/OurStory';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl">Get to know our story</p>
        </div>
      </div>

      <OurStory />
      <WhyWorkWithUs />
      <OurExpertise />
    </div>
  );
} 