'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedLineProps {
  direction: 'horizontal' | 'vertical' | 'diagonal';
  className?: string;
  color?: 'neon-green' | 'neon-blue' | 'neon-pink' | 'white';
  thickness?: 'thin' | 'medium' | 'thick';
  length?: 'short' | 'medium' | 'long' | 'full';
  delay?: number;
  duration?: number;
}

export const AnimatedLine: React.FC<AnimatedLineProps> = ({
  direction = 'horizontal',
  className = '',
  color = 'neon-green',
  thickness = 'thin',
  length = 'medium',
  delay = 0,
  duration = 1.5,
}) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const element = lineRef.current;
    const isHorizontal = direction === 'horizontal';
    const isDiagonal = direction === 'diagonal';

    // Set initial state
    gsap.set(element, {
      [isHorizontal ? 'scaleX' : isDiagonal ? 'scale' : 'scaleY']: 0,
      transformOrigin: isHorizontal 
        ? 'left center' 
        : isDiagonal 
        ? 'left top' 
        : 'top center',
    });

    // Create animation
    const animation = gsap.to(element, {
      [isHorizontal ? 'scaleX' : isDiagonal ? 'scale' : 'scaleY']: 1,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      animation.kill();
    };
  }, [direction, delay, duration]);

  const getColorClass = () => {
    switch (color) {
      case 'neon-green': return 'bg-neon-green';
      case 'neon-blue': return 'bg-neon-blue';
      case 'neon-pink': return 'bg-neon-pink';
      default: return 'bg-white';
    }
  };

  const getThicknessClass = () => {
    if (direction === 'horizontal') {
      switch (thickness) {
        case 'thin': return 'h-px';
        case 'medium': return 'h-0.5';
        case 'thick': return 'h-1';
        default: return 'h-px';
      }
    } else {
      switch (thickness) {
        case 'thin': return 'w-px';
        case 'medium': return 'w-0.5';
        case 'thick': return 'w-1';
        default: return 'w-px';
      }
    }
  };

  const getLengthClass = () => {
    if (direction === 'horizontal') {
      switch (length) {
        case 'short': return 'w-16';
        case 'medium': return 'w-32';
        case 'long': return 'w-64';
        case 'full': return 'w-full';
        default: return 'w-32';
      }
    } else {
      switch (length) {
        case 'short': return 'h-16';
        case 'medium': return 'h-32';
        case 'long': return 'h-64';
        case 'full': return 'h-full';
        default: return 'h-32';
      }
    }
  };

  const getDiagonalStyles = () => {
    if (direction === 'diagonal') {
      return {
        width: '100px',
        height: '2px',
        transform: 'rotate(45deg)',
        transformOrigin: 'left center',
      };
    }
    return {};
  };

  return (
    <div
      ref={lineRef}
      className={`
        ${getColorClass()}
        ${direction !== 'diagonal' ? getThicknessClass() : ''}
        ${direction !== 'diagonal' ? getLengthClass() : ''}
        opacity-60
        ${className}
      `}
      style={getDiagonalStyles()}
    />
  );
};

// Section divider with animated lines
interface SectionDividerProps {
  variant?: 'simple' | 'complex' | 'grid';
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'simple',
  className = '',
}) => {
  if (variant === 'simple') {
    return (
      <div className={`flex justify-center py-16 ${className}`}>
        <AnimatedLine 
          direction="horizontal" 
          length="long" 
          color="neon-green" 
          thickness="thin"
        />
      </div>
    );
  }

  if (variant === 'complex') {
    return (
      <div className={`relative py-20 ${className}`}>
        {/* Center horizontal line */}
        <div className="flex justify-center">
          <AnimatedLine 
            direction="horizontal" 
            length="long" 
            color="neon-green" 
            thickness="medium"
          />
        </div>
        
        {/* Side decorative lines */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -left-20 -top-10">
              <AnimatedLine 
                direction="diagonal" 
                color="neon-blue" 
                thickness="thin"
                delay={0.3}
              />
            </div>
            <div className="absolute -right-20 -top-10 rotate-90">
              <AnimatedLine 
                direction="diagonal" 
                color="neon-pink" 
                thickness="thin"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`py-16 ${className}`}>
        <div className="container-custom">
          <div className="grid grid-cols-12 gap-4 h-32">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="flex justify-center">
                <AnimatedLine 
                  direction="vertical" 
                  length="full" 
                  color={index % 3 === 0 ? 'neon-green' : index % 3 === 1 ? 'neon-blue' : 'neon-pink'} 
                  thickness="thin"
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

// Connecting lines between cards
interface ConnectingLinesProps {
  cards: number;
  className?: string;
}

export const ConnectingLines: React.FC<ConnectingLinesProps> = ({
  cards,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll('.connecting-line');
    
    lines.forEach((line, index) => {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, [cards]);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`}>
      {Array.from({ length: cards - 1 }).map((_, index) => (
        <div
          key={index}
          className="connecting-line absolute h-px bg-gradient-to-r from-neon-green/20 to-neon-blue/20"
          style={{
            top: '50%',
            left: `${((index + 1) * 100) / cards}%`,
            width: `${100 / cards}%`,
            transform: 'translateY(-50%)',
          }}
        />
      ))}
    </div>
  );
};

// Circuit-like animated background
export const CircuitBackground: React.FC<{ className?: string }> = ({ 
  className = '' 
}) => {
  const circuitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!circuitRef.current) return;

    const lines = circuitRef.current.querySelectorAll('.circuit-line');
    
    lines.forEach((line, index) => {
      gsap.fromTo(
        line,
        { 
          scale: 0,
          transformOrigin: 'center',
        },
        {
          scale: 1,
          duration: 1.5,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div 
      ref={circuitRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Horizontal lines */}
      <div className="circuit-line absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
      <div className="circuit-line absolute top-3/4 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-neon-blue/30 to-transparent" />
      
      {/* Vertical lines */}
      <div className="circuit-line absolute left-1/4 top-0 w-px h-1/2 bg-gradient-to-b from-transparent via-neon-pink/30 to-transparent" />
      <div className="circuit-line absolute right-1/3 bottom-0 w-px h-2/3 bg-gradient-to-t from-transparent via-neon-green/20 to-transparent" />
      
      {/* Corner accents */}
      <div className="circuit-line absolute top-4 left-4 w-8 h-px bg-neon-green/40" />
      <div className="circuit-line absolute top-4 left-4 w-px h-8 bg-neon-green/40" />
      
      <div className="circuit-line absolute bottom-4 right-4 w-8 h-px bg-neon-blue/40" />
      <div className="circuit-line absolute bottom-4 right-4 w-px h-8 bg-neon-blue/40" />
    </div>
  );
}; 