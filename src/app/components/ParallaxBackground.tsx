"use client";

import React, { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
}

export default function ParallaxBackground({ children, intensity = 0.1 }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use o centro da tela como referência
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (e.clientX - centerX) / centerX;
      const y = (e.clientY - centerY) / centerY;

      const container = containerRef.current;
      if (!container) return;
      const elements = container.querySelectorAll('.parallax-element');
      elements.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        const translateX = x * speed * intensity * 100;
        const translateY = y * speed * intensity * 100;
        el.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {children}
    </div>
  );
} 