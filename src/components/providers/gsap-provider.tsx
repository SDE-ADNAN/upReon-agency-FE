'use client';

import React, { createContext, useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initGSAP, cleanupGSAP, refreshScrollTrigger } from '@/lib/gsap-utils';

interface GSAPContextType {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
  refreshScrollTrigger: () => void;
}

const GSAPContext = createContext<GSAPContextType | null>(null);

interface GSAPProviderProps {
  children: React.ReactNode;
}

export const GSAPProvider: React.FC<GSAPProviderProps> = ({ children }) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initGSAP();
      initialized.current = true;
    }

    // Cleanup on unmount
    return () => {
      cleanupGSAP();
    };
  }, []);

  // Refresh ScrollTrigger on route changes or window resize
  useEffect(() => {
    const handleResize = () => {
      refreshScrollTrigger();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contextValue: GSAPContextType = {
    gsap,
    ScrollTrigger,
    refreshScrollTrigger,
  };

  return (
    <GSAPContext.Provider value={contextValue}>
      {children}
    </GSAPContext.Provider>
  );
};

export const useGSAP = () => {
  const context = useContext(GSAPContext);
  if (!context) {
    throw new Error('useGSAP must be used within a GSAPProvider');
  }
  return context;
};

// Hook for section animations
export const useSectionAnimation = (triggerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!triggerRef.current) return;

    const element = triggerRef.current;
    
    // Animate section entry
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
      },
    });

    // Animate children elements
    const headers = element.querySelectorAll('.section-header');
    const content = element.querySelectorAll('.section-content');
    const cards = element.querySelectorAll('.animate-card');

    if (headers.length > 0) {
      tl.fromTo(
        headers,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        0
      );
    }

    if (content.length > 0) {
      tl.fromTo(
        content,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        0.2
      );
    }

    if (cards.length > 0) {
      tl.fromTo(
        cards,
        { y: 40, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.15,
          ease: 'back.out(1.7)'
        },
        0.4
      );
    }

    return () => {
      tl.kill();
    };
  }, [triggerRef]);
};

// Hook for card hover animations
export const useCardHover = (cardRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Animate any nested elements
      const nestedElements = card.querySelectorAll('.hover-lift');
      gsap.to(nestedElements, {
        y: -5,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });

      const nestedElements = card.querySelectorAll('.hover-lift');
      gsap.to(nestedElements, {
        y: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardRef]);
};

// Hook for text reveal animations
export const useTextReveal = (textRef: React.RefObject<HTMLElement>, splitBy: 'words' | 'chars' = 'words') => {
  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const text = element.textContent || '';
    
    if (splitBy === 'words') {
      const words = text.split(' ');
      element.innerHTML = words
        .map(word => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
        .join(' ');
    } else {
      const chars = text.split('');
      element.innerHTML = chars
        .map(char => char === ' ' ? ' ' : `<span class="inline-block">${char}</span>`)
        .join('');
    }

    const spans = element.querySelectorAll('span span, span:not(:has(span))');
    
    gsap.fromTo(
      spans,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        stagger: splitBy === 'words' ? 0.1 : 0.03,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      // Restore original text on cleanup
      element.textContent = text;
    };
  }, [textRef, splitBy]);
}; 