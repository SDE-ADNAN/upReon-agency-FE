"use client"

import { useEffect, useState } from 'react'

export function ScrollProgressTest() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [debugInfo, setDebugInfo] = useState({
    scrollTop: 0,
    docHeight: 0,
    scrollPercent: 0,
    isVisible: false
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ) - window.innerHeight
      
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      const clampedProgress = Math.max(0, Math.min(scrollPercent, 100))
      
      setScrollProgress(clampedProgress)
      setDebugInfo({
        scrollTop,
        docHeight,
        scrollPercent,
        isVisible: docHeight > 100
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 z-[99999] text-xs">
      <div className="mb-2">
        <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-neon-green to-neon-blue transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
      <div className="space-y-1 text-gray-300">
        <div>Progress: {scrollProgress.toFixed(1)}%</div>
        <div>Scroll: {debugInfo.scrollTop}px</div>
        <div>Height: {debugInfo.docHeight}px</div>
        <div>Percent: {debugInfo.scrollPercent.toFixed(1)}%</div>
        <div>Visible: {debugInfo.isVisible ? 'Yes' : 'No'}</div>
      </div>
    </div>
  )
} 