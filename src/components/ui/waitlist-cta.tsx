
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "./shimmer-button";
import { AvatarPlaceholder } from "./avatar-placeholder";
import { cn } from "@/lib/utils";

interface WaitlistCTAProps {
  className?: string;
  onSubmit?: (email: string) => void;
}

export function WaitlistCTA({ className, onSubmit }: WaitlistCTAProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    onSubmit?.(email);
    setIsSubmitting(false);
  };

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "w-full h-[48px]",
              "inline-flex items-center",
              "px-4",
              "text-base leading-none",
              "bg-[#F0F0F5]",
              "border border-gray-200/20",
              "rounded-lg",
              "text-gray-800 placeholder:text-gray-500 placeholder:text-base",
              "transition-all duration-200 ease-in-out",
              "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20",
              "disabled:opacity-50",
              "flex-1",
              "m-0"
            )}
            style={{
              padding: "0 16px",
            }}
            disabled={isSubmitting}
            required
          />

          <ShimmerButton
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "h-[48px] m-0",
              "px-6",
              "text-base leading-none",
              "inline-flex items-center justify-center gap-3",
              "flex-shrink-0",
              "w-full md:w-auto min-w-[160px]",
              "rounded-lg",
              "bg-blue-600 hover:bg-blue-700",
              "transition-all duration-200 ease-in-out"
            )}
          >
            <span className="flex-1 text-center">Get Early Access</span>
            <ArrowRight 
              className="w-5 h-5 text-white/90 flex-shrink-0" 
              aria-hidden="true"
            />
          </ShimmerButton>
        </div>
      </form>

      <div className="flex justify-center items-center mt-3 text-[14px] text-[#6B7280] font-normal">
        <p className="flex items-center">
          <span className="flex -space-x-1.5 mr-2" aria-hidden="true">
            <AvatarPlaceholder initials="JT" />
            <AvatarPlaceholder initials="MK" />
            <AvatarPlaceholder 
              initials="AS" 
              className="hidden sm:flex"
            />
          </span>
          <span>2,165+ people joined</span>
          <span className="mx-4 w-1 h-1 rounded-full bg-gray-400 inline-block relative top-[0.5px]" aria-hidden="true" />
          <span>Queue: 1-2 days</span>
        </p>
      </div>
    </div>
  );
}
