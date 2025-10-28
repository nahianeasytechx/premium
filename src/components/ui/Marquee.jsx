import React, { useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  className,
}) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const duration = parseFloat(
      getComputedStyle(container).getPropertyValue("--duration") || 20
    ) * 1000;

    const animation = container.animate(
      [
        { transform: "translateX(0%)" },
        { transform: reverse ? "translateX(50%)" : "translateX(-50%)" },
      ],
      {
        duration,
        iterations: Infinity,
        easing: "linear",
      }
    );

    animationRef.current = animation;

    if (pauseOnHover) {
      container.addEventListener("mouseenter", () => animation.pause());
      container.addEventListener("mouseleave", () => animation.play());
    }

    return () => animation.cancel();
  }, [reverse, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex whitespace-nowrap will-change-transform gap-4",
        className
      )}
    >
      {children}
      {children}
    </div>
  );
}
