import React from "react";
import { cn } from "../lib/utils";

interface DotPatternProps {
  width?: any;
  height?: any;
  x?: any;
  y?: any;
  cx?: any;
  cy?: any;
  cr?: any;
  className?: string;
  glow?: boolean;
  fadeInOut?: boolean;
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  fadeInOut = false,
  ...props
}: DotPatternProps) {
  const id = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/40",
        glow && "fill-blue-400/20",
        fadeInOut && "animate-pulse",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle
            id="pattern-circle"
            cx={cx}
            cy={cy}
            r={cr}
            fill="currentColor"
            className={glow ? "drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" : ""}
          />
        </pattern>
        {glow && (
          <filter id={`glow-${id}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        )}
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${id})`}
        filter={glow ? `url(#glow-${id})` : undefined}
      />
    </svg>
  );
}

export default DotPattern; 