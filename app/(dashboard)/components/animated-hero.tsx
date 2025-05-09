"use client";

import { useEffect, useRef } from 'react';

// Spotlight effect component
function SpotlightEffect() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = div.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      
      div.style.setProperty('--x', `${x}px`);
      div.style.setProperty('--y', `${y}px`);
    };

    div.addEventListener('mousemove', handleMouseMove);
    return () => div.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        background: 'radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(255, 165, 0, 0.15), transparent 40%)',
      }}
    />
  );
}

// Floating gradient background
function FloatingGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-orange-100/30 via-transparent to-orange-100/30 animate-float" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-100/30 via-transparent to-orange-100/30 animate-float-delayed" />
    </div>
  );
}

export function AnimatedHero() {
  return (
    <>
      <FloatingGradient />
      <SpotlightEffect />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </>
  );
} 