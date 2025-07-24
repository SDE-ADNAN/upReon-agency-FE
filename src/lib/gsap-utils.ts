'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export const initGSAP = () => {
  if (typeof window === 'undefined') return;
  
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  
  // Set default ease
  gsap.defaults({ ease: 'power2.out', duration: 1 });
};

// Refresh ScrollTrigger after route changes
export const refreshScrollTrigger = () => {
  if (typeof window !== 'undefined' && ScrollTrigger) {
    ScrollTrigger.refresh();
  }
};

// Animation presets
export const animations = {
  // Fade in from bottom
  fadeInUp: (element: string | Element, delay = 0) => {
    return gsap.fromTo(
      element,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  },

  // Fade in from left
  fadeInLeft: (element: string | Element, delay = 0) => {
    return gsap.fromTo(
      element,
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  },

  // Fade in from right
  fadeInRight: (element: string | Element, delay = 0) => {
    return gsap.fromTo(
      element,
      {
        x: 60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  },

  // Scale in animation
  scaleIn: (element: string | Element, delay = 0) => {
    return gsap.fromTo(
      element,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  },

  // Line draw animation
  drawLine: (element: string | Element, direction: 'horizontal' | 'vertical' = 'horizontal') => {
    const isHorizontal = direction === 'horizontal';
    return gsap.fromTo(
      element,
      {
        [isHorizontal ? 'scaleX' : 'scaleY']: 0,
        transformOrigin: isHorizontal ? 'left center' : 'top center',
      },
      {
        [isHorizontal ? 'scaleX' : 'scaleY']: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  },

  // Stagger animation for multiple elements
  staggerIn: (elements: string | Element[], delay = 0) => {
    const trigger = Array.isArray(elements) ? elements[0] : elements;
    if (!trigger) return;
    
    return gsap.fromTo(
      elements,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  },

  // Text typing effect
  typeText: (element: string | Element, text: string) => {
    return gsap.to(element, {
      duration: 2,
      text: text,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse',
      },
    });
  },

  // Parallax effect
  parallax: (element: string | Element, yPercent = -50) => {
    return gsap.to(element, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  },

  // Pin section animation
  pinSection: (element: string | Element, endTrigger?: string) => {
    return ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: endTrigger ? `${endTrigger} top` : 'bottom top',
      pin: true,
      pinSpacing: false,
    });
  },
};

// Hero animations
export const heroAnimations = {
  init: () => {
    // Animate hero title
    gsap.fromTo(
      '.hero-title',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.5,
      }
    );

    // Animate hero subtitle
    gsap.fromTo(
      '.hero-subtitle',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        delay: 0.8,
      }
    );

    // Animate hero CTA
    gsap.fromTo(
      '.hero-cta',
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 1.1,
      }
    );

    // Animate floating elements
    gsap.to('.floating-element', {
      y: 'random(-20, 20)',
      x: 'random(-15, 15)',
      rotation: 'random(-10, 10)',
      duration: 'random(3, 6)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5,
    });
  },
};

// Section transition animations
export const sectionAnimations = {
  initAll: () => {
    // Section headers
    gsap.utils.toArray('.section-header').forEach((header) => {
      animations.fadeInUp(header as Element);
    });

    // Section content
    gsap.utils.toArray('.section-content').forEach((content, index) => {
      animations.fadeInUp(content as Element, index * 0.1);
    });

    // Cards
    gsap.utils.toArray('.animate-card').forEach((card, index) => {
      animations.scaleIn(card as Element, index * 0.1);
    });

    // Lines
    gsap.utils.toArray('.animate-line-h').forEach((line) => {
      animations.drawLine(line as Element, 'horizontal');
    });

    gsap.utils.toArray('.animate-line-v').forEach((line) => {
      animations.drawLine(line as Element, 'vertical');
    });
  },
};

// Clean up function
export const cleanupGSAP = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf('*');
  }
};

export { gsap, ScrollTrigger }; 