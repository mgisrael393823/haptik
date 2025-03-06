
import { useState } from "react";
import { ChevronDown, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { colorVariants, ColorVariant } from "./PricingCardColors";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: number;
  interval: string;
  description: string;
  features: string[];
  cta: string;
  color?: ColorVariant;
  highlighted?: boolean;
  showPopularTag?: boolean;
  valueProposition?: string;
  subscription?: any;
  isLoading?: boolean;
  isCurrentPlan?: boolean;
}

export const PricingCard = ({
  title,
  price,
  interval,
  description,
  features,
  cta,
  color = "blue",
  highlighted = false,
  showPopularTag = false,
  valueProposition,
  subscription,
  isLoading = false,
  isCurrentPlan = false
}: PricingCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  const colorStyles = colorVariants[color];
  
  // Handle subscription action
  const handleAction = () => {
    console.log(`Subscription action for ${title}`);
    // Add subscription logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: title === "Professional" ? 0 : title === "Basic" ? 0.1 : 0.2 }}
      className={cn(
        "relative rounded-2xl flex flex-col h-full",
        "border bg-white/90 backdrop-blur-sm",
        highlighted ? "border-2 shadow-xl" : "border border-slate-200/70",
        highlighted ? colorStyles.border : "border-slate-200/70",
        isMobile ? "p-5" : "p-6",
        "transition-all duration-300 hover:shadow-lg",
        "shadow-[0_2px_10px_rgba(0,0,0,0.08)]",
        highlighted && "hover:-translate-y-1"
      )}
    >
      {/* Popular tag with animated effect */}
      {showPopularTag && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <div className={cn(
            "py-1 px-4 rounded-full text-white text-xs font-medium shadow-[0_2px_10px_rgba(0,0,0,0.15)]",
            "bg-gradient-to-r from-brand-purple-medium to-brand-purple",
            "animate-pulse-subtle"
          )}>
            <span className="flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Most Popular
            </span>
          </div>
        </div>
      )}
      
      {/* Header section with improved typography */}
      <div className="mb-4">
        <h3 className={cn(
          "text-xl font-bold font-jakarta",
          colorStyles.accent
        )}>
          {title}
        </h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-4xl font-bold tracking-tight font-jakarta text-brand-purple-dark">${price}</span>
          <span className="ml-1 text-sm text-slate-500 font-inter">/{interval}</span>
        </div>
        <p className="mt-2 text-sm text-slate-600 font-inter">{description}</p>
        
        {valueProposition && (
          <p className={cn(
            "mt-2 text-xs font-medium font-inter",
            colorStyles.accent
          )}>
            {valueProposition}
          </p>
        )}
      </div>
      
      {/* Action button with gradient and improved hover effect */}
      <button
        onClick={handleAction}
        className={cn(
          "mt-2 w-full px-4 py-3 rounded-xl text-white font-medium font-inter",
          "transition-all duration-300",
          isCurrentPlan ? "bg-green-500 cursor-default" : `bg-gradient-to-r ${colorStyles.highlight}`,
          !isCurrentPlan && "hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0"
        )}
      >
        {isCurrentPlan ? "Current Plan" : cta}
      </button>
      
      {/* Features preview with improved styling */}
      <div className="mt-6 space-y-3 flex-grow">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-medium text-slate-700 font-inter">
            {isExpanded ? "What's included:" : "Top features:"}
          </h4>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-slate-500 flex items-center focus:outline-none font-inter hover:text-brand-purple transition-colors touch-manipulation"
          >
            {isExpanded ? "Less" : "See all"}
            <ChevronDown className={cn(
              "ml-1 h-3 w-3 transition-transform",
              isExpanded && "rotate-180"
            )} />
          </button>
        </div>
        
        <div className="space-y-2.5">
          {(isExpanded ? features : features.slice(0, 4)).map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "flex items-start",
                feature.includes("plus:") && "font-medium"
              )}
            >
              <span className={cn(
                "mr-2 rounded-full p-0.5 flex-shrink-0 mt-0.5",
                colorStyles.bg
              )}>
                <Check className={cn(
                  "h-3 w-3",
                  colorStyles.accent
                )} />
              </span>
              <span className="text-sm text-slate-700 font-inter">
                {feature.replace("plus:", "")}
              </span>
            </div>
          ))}
        </div>
        
        {!isExpanded && features.length > 4 && (
          <p className="text-xs text-slate-500 font-inter">
            +{features.length - 4} more features
          </p>
        )}
      </div>
      
      {/* Guarantee badge with improved design - Only for paid plans */}
      {price > 0 && (
        <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center font-inter">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          7-day money-back guarantee
        </div>
      )}
    </motion.div>
  );
};
