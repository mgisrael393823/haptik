
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Step } from './types';

interface MobileStepItemSimpleProps {
  step: Step;
  index: number;
  isCompleted: boolean;
  isActive: boolean;
  onClick: () => void;
}

const MobileStepItemSimple: React.FC<MobileStepItemSimpleProps> = ({ 
  step, 
  index, 
  isCompleted,
  isActive,
  onClick
}) => {
  // Get the border color by extracting from gradient (for non-active state)
  const getBorderColor = () => {
    // Extract the primary color from gradient for border
    const color = step.gradientFrom || '#8B5CF6';
    return color + '33'; // Add 33 for ~20% opacity
  };

  // Get the subtle background tint based on the step's theme color
  const getBackgroundTint = () => {
    // Extract the primary color and make it extremely subtle (3% opacity)
    const color = step.gradientFrom || '#8B5CF6';
    return color + '08'; // Add 08 for ~3% opacity
  };

  return (
    <div 
      onClick={onClick}
      className={cn(
        "relative p-3.5 transition-all",
        "flex flex-col h-full min-h-[120px] touch-manipulation",
        "duration-200 cursor-pointer animate-fade-in",
        `animation-delay-${index * 100}`,
        "active:scale-[0.98]"
      )}
      style={{
        // Dynamic styling for each card
        borderColor: isActive ? step.gradientFrom : getBorderColor(),
        borderWidth: isActive ? '2px' : '1px',
        borderLeftWidth: isActive ? '3px' : '1px',
        borderStyle: 'solid',
        borderRadius: '12px',
        backgroundColor: getBackgroundTint(),
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
      }}
    >
      {/* Circle Number Badge with gradient */}
      <div className="absolute -top-2 -left-1">
        <div className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center",
          "text-xs font-medium shadow-sm ring-1 ring-white",
          step.gradientClass || step.numberClass
        )}>
          {index + 1}
          
          {/* Completed checkmark */}
          {isCompleted && (
            <div className="absolute -right-1 -top-1 bg-white rounded-full p-0.5 shadow-sm">
              <Check className="w-2.5 h-2.5 text-green-500" />
            </div>
          )}
        </div>
      </div>
      
      {/* Icon and Title in row */}
      <div className="flex items-center justify-between mt-2 mb-2.5">
        <h4 className="text-sm font-bold text-gray-900 pr-1 line-clamp-2">
          {step.title}
        </h4>
        
        <div className={cn(
          "rounded-full p-1.5 ml-1",
          step.gradientClass || step.iconClass
        )}>
          {React.cloneElement(step.icon as React.ReactElement, {
            className: "w-4 h-4"
          })}
        </div>
      </div>
      
      {/* Description */}
      <p className="text-xs leading-relaxed text-gray-600 mt-auto line-clamp-3">
        {step.description}
      </p>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full animate-pulse" style={{
          background: `linear-gradient(${step.gradientDirection || '45deg'}, ${step.gradientFrom || '#8B5CF6'}, ${step.gradientTo || '#6366F1'})`
        }}></div>
      )}
    </div>
  );
};

export default MobileStepItemSimple;
