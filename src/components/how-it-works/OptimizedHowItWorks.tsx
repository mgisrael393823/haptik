
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionHeaderSimple from './SectionHeaderSimple';
import MobileStepsGridSimple from './MobileStepsGridSimple';
import DesktopStepsGridSimple from './DesktopStepsGridSimple';

const OptimizedHowItWorks: React.FC = () => {
  const isMobile = useIsMobile();
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  // Load saved progress
  useEffect(() => {
    const savedProgress = localStorage.getItem('howItWorksProgress');
    if (savedProgress) {
      setCompletedSteps(JSON.parse(savedProgress));
    }
  }, []);

  // Add intersection observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('how-it-works-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Handle step interaction
  const handleStepInteraction = (index: number) => {
    setActiveStep(index);
  };

  return (
    <div id="how-it-works-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-white via-purple-50/20 to-white">
      <div className={`max-w-6xl mx-auto relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12 lg:mb-16">
          <SectionHeaderSimple 
            title="How It Works" 
            subtitle="Your journey to amazing content in four simple steps"
          />
        </div>
        
        {/* Mobile 2x2 Grid Layout */}
        <MobileStepsGridSimple 
          completedSteps={completedSteps} 
          activeStep={activeStep}
          onStepInteraction={handleStepInteraction}
        />
        
        {/* Desktop grid layout with connecting lines */}
        <DesktopStepsGridSimple 
          completedSteps={completedSteps} 
          activeStep={activeStep}
          onStepInteraction={handleStepInteraction}
        />
      </div>
    </div>
  );
};

export default OptimizedHowItWorks;
