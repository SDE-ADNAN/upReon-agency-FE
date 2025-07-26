"use client"

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      // Calculate total scrollable height
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ) - window.innerHeight
      
      // Calculate scroll percentage
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      
      // Clamp to 0-100 range
      const clampedProgress = Math.max(0, Math.min(scrollPercent, 100))
      setScrollProgress(clampedProgress)
      
      // Only show if there's enough content to scroll
      const shouldBeVisible = docHeight > 100
      setIsVisible(shouldBeVisible)
      
      // Handle opacity based on scroll position
      let newOpacity = 1
      
      // Keep progress bar visible for most of the scroll, only fade out near the end
      if (scrollPercent <= 85) {
        // Fully visible for first 85% of scroll
        newOpacity = 1
      } else if (scrollPercent > 85 && scrollPercent <= 95) {
        // Fade out between 85% and 95%
        const fadeRange = 95 - 85 // 10%
        const fadeProgress = (scrollPercent - 85) / fadeRange
        newOpacity = Math.max(0, 1 - fadeProgress)
      } else {
        // Completely hidden after 95%
        newOpacity = 0
      }
      
      setOpacity(newOpacity)
    }

    // Initial calculation
    handleScroll()

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Handle resize events that might affect scroll calculations
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Don't render if not visible or opacity is 0
  if (!isVisible || opacity === 0) {
    return null
  }

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-[99999] transition-opacity duration-300"
      style={{ opacity:1 }}
      aria-hidden="true"
      role="progressbar"
      aria-valuenow={scrollProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div 
        className="h-full bg-gradient-to-r from-neon-green to-neon-blue transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
} 