"use client";

import { cn } from "@/lib/utils";
import { DotPattern, DotPatternProps } from "@/components/magicui/dot-pattern";
import { HTMLAttributes } from "react";

export interface DotPatternWithGlowEffectProps extends DotPatternProps {
  wrapperClassName?: HTMLAttributes<HTMLDivElement>['className'];
}

export function DotPatternWithGlowEffect({wrapperClassName, glow,className, ...extProps}: DotPatternWithGlowEffectProps) {
  return (
    <div className={cn("flex h-screen w-screen flex-col items-center justify-center overflow-hidden z-0", wrapperClassName)} data-testid="dot-pattern-with-glow-effect">
      <DotPattern
        glow={glow ?? true}
        {...extProps}
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
          className,
        )}
      />
    </div>
  );
}