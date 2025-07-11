'use client';

import { useState } from 'react';
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/section/About";
import BrandLogos from "@/components/section/Brand";
import HowItWorksDriver from "@/components/section/Contact";
import Hero from "@/components/section/Hero";
import SubscriptionComponent from "@/components/section/Pricing";
import Loader from "@/components/ui/Loader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && <Loader onComplete={() => setShowLoader(false)} />}

      {!showLoader && (
        <div className="font-[family-name:var(--font-geist-sans)]">
          <Navbar />
          <Hero />
          <About />
          <SubscriptionComponent />
          <HowItWorksDriver />
          <BrandLogos />
          <Footer />
        </div>
      )}
    </>
  );
}
