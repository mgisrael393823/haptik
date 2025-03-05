
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Hero } from '../components/hero/Hero';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';
import OptimizedHowItWorks from '../components/how-it-works/OptimizedHowItWorks';
import { BottomNav } from '../components/navigation/BottomNav';
import { Banner } from '@/components/ui/banner';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { GlowDialog } from '@/components/ui/glow-dialog';
import { OptimizedSpotlight } from '@/components/ui/optimized-spotlight';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { FeaturesSectionWithHoverEffects } from '@/components/Features';
import Pricing from '@/components/Pricing';
import { Waves } from '@/components/ui/waves';
import PreviewSearch from '@/components/PreviewSearch';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { GradientBlobBackground } from '@/components/ui/gradient-blob-background';

/**
 * Main landing page component with performance optimizations
 */
const Index = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showGlowDialog, setShowGlowDialog] = useState(false);
  const isMobile = useIsMobile();

  // Initialize local storage and dialog state
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    setShowGlowDialog(!hasVisited);
    if (!hasVisited) {
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);
  const handleTryNowClick = () => {
    setShowGlowDialog(true);
  };
  return <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
      <Header />
      {showBanner && <div className="relative">
          <Banner variant="purple" size="lg" action={<Button variant="secondary" size="sm" className={cn("flex text-xs sm:text-sm items-center whitespace-nowrap", isMobile ? "px-2 py-1.5 min-w-[7rem] min-h-[2rem]" : "px-3 py-2 sm:px-5 sm:py-2.5 min-w-[8rem] sm:min-w-[9rem] min-h-[2.25rem] sm:min-h-[2.5rem]", "bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold", "border-2 border-amber-300", "transition-all duration-200", "touch-manipulation", "shadow-[0_2px_10px_rgba(0,0,0,0.15)]")} onClick={handleTryNowClick}>
                {isMobile ? "Try Now" : "Get Early Access"}
              </Button>} layout="complex" isClosable onClose={() => setShowBanner(false)} className="animate-in fade-in slide-in-from-top duration-500 relative overflow-hidden min-h-[3.25rem] sm:min-h-[3.5rem] my-0 py-0">
            <div className="flex items-center justify-left gap-3 sm:gap-4 relative z-10">
              <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300 animate-pulse" />
              <AnimatedShinyText className={cn("text-sm sm:text-base font-bold inline-block", "text-white relative z-10 rounded", "px-1 tracking-wide")} shimmerWidth={200}>
                Join the AI-powered revolution in property management!
              </AnimatedShinyText>
            </div>
          </Banner>
        </div>}

      <main className="flex-1 pb-16 sm:pb-0 w-full overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <OptimizedSpotlight className="from-purple-500/20 via-violet-500/20 to-blue-500/20" size={400} />
          <Hero />
        </div>

        <div className="space-y-0 w-full">
          {/* How It Works Section - Using optimized component */}
          <section id="how-it-works" className="relative overflow-hidden border-t border-b border-gray-100 w-full">
            <OptimizedSpotlight className="from-blue-500/20 via-cyan-500/20 to-teal-500/20" size={350} />
            <div className="relative z-10">
              <OptimizedHowItWorks />
            </div>
          </section>
          
          {/* Search Section - With new GradientBlobBackground */}
          <section id="find-creators" className="relative py-10 sm:py-16 lg:py-20 overflow-hidden w-full border-t border-b border-gray-100">
            <GradientBlobBackground className="min-h-[600px] md:min-h-[700px] py-10">
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-10 px-4 sm:px-6 lg:px-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-jakarta tracking-tight">
                    Find Your Perfect Creator
                  </h2>
                  <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 font-inter">
                    Connect with skilled professionals who can showcase your property in its best light
                  </p>
                </div>
                <PreviewSearch />
              </div>
            </GradientBlobBackground>
          </section>
          
          {/* Professional Content Creation Services */}
          <section className="py-10 sm:py-16 lg:py-20 border-t border-b border-gray-100 w-full bg-white">
            <FeaturesSectionWithHoverEffects />
          </section>

          {/* Pricing Section */}
          <Pricing />

          {/* Final CTA Section */}
          <div className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-[#F6F6F7] w-full">
            <OptimizedSpotlight className="from-purple-500/20 via-pink-500/20 to-red-500/20" size={350} />
            <div className="relative z-10 max-w-7xl mx-auto">
              <CallToActionSection />
            </div>
          </div>
        </div>

        <Footer />
      </main>
      <BottomNav />
      <GlowDialog open={showGlowDialog} onOpenChange={setShowGlowDialog} />
    </div>;
};
export default Index;
