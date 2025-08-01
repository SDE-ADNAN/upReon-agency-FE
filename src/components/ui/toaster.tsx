"use client"

import * as React from "react"

export function Toaster() {
  return (
    <div 
      id="toast-container" 
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2"
      aria-live="polite"
      aria-label="Notifications"
    >
      {/* Toast notifications will be rendered here */}
    </div>
  )
} 