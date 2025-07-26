"use client"

import * as React from "react"

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({ 
  children, 
}: ThemeProviderProps) {
  React.useEffect(() => {
    // Apply dark theme by default
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return <>{children}</>
} 