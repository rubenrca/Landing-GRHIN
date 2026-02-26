"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "stagger";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
}: ScrollRevealProps) {
  const { ref, isRevealed } = useScrollReveal();

  const baseClass = variant === "stagger" ? "scroll-reveal-stagger" : "scroll-reveal";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isRevealed ? "revealed" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
