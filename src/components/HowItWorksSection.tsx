
import React from 'react';
import { Search, Users, FileCheck, Calendar } from 'lucide-react';
import { ShimmerButton } from './ui/shimmer-button';
import { GlowingEffect } from './ui/glowing-effect';
import { MovingBorder } from './ui/moving-border';

const HowItWorksSection = () => {
  const steps = [{
    icon: <Search className="w-5 h-5" />,
    title: "Search & Filter",
    description: "Find your perfect creator match"
  }, {
    icon: <Users className="w-5 h-5" />,
    title: "Review & Compare",
    description: "Browse portfolios and reviews"
  }, {
    icon: <Calendar className="w-5 h-5" />,
    title: "Book & Pay",
    description: "Schedule securely through platform"
  }, {
    icon: <FileCheck className="w-5 h-5" />,
    title: "Get Content",
    description: "Receive and approve deliverables"
  }];

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white/50 backdrop-blur-sm
        [background-image:linear-gradient(to_right,rgba(176,108,234,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(176,108,234,0.1)_1px,transparent_1px)]
        [background-size:6rem_4rem]
        [mask-image:radial-gradient(ellipse_at_center,white,transparent)]
        before:absolute before:inset-0
        before:bg-[radial-gradient(circle_at_center,#4F46E5,transparent)]
        before:opacity-30
        after:absolute after:h-full after:w-full
        after:[background:linear-gradient(to_right,#4F46E5,#EC4899)]
        after:opacity-10 after:animate-aurora">
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            How It Works
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Your journey to amazing content in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group h-full">
              <div className="relative p-[1px] rounded-2xl overflow-hidden h-full">
                <GlowingEffect blur={20} spread={30} borderWidth={1} className="opacity-40" glow />
                <MovingBorder rx="16px" ry="16px" duration={3000}>
                  <div className="h-16 w-16 opacity-100 bg-[radial-gradient(#8B5CF6_40%,transparent_60%)]" />
                </MovingBorder>
                <div className="h-full flex flex-col items-center p-4 rounded-2xl bg-white/95 backdrop-blur-sm relative z-20">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 mb-3 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-primary">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 sm:mt-8">
          <ShimmerButton className="h-10 text-sm font-medium px-4 sm:px-6">
            Find Your Creator
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
