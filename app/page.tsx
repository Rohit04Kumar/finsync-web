'use client';

import React from 'react';
import {
  AmbientGlow,
  Header,
  HeroSection,
  GoogleDriveSafetySection,
  CloudSyncShowcaseSection,
  FeaturesSection,
  DeveloperSection,
  Footer,
} from './components';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <AmbientGlow />
      <Header />
      <HeroSection />
      <GoogleDriveSafetySection />
      <CloudSyncShowcaseSection />
      <FeaturesSection />
      <DeveloperSection />
      <Footer />
    </div>
  );
}
