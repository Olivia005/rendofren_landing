import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: gsap.TweenVars;
  animationTo?: gsap.TweenVars;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  onLetterAnimationComplete?: () => void;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  easing = "power4.out",
}: SplitTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const letters = useMemo(() => {
    return text.split("");
  }, [text]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      animationFrom,
      {
        ...animationTo,
        delay: delay / 1000,
        stagger: 0.03,
        ease: easing,
        duration: 1,
      }
    );
  }, { scope: containerRef });

  const isGradient = className.includes("gradient");

  return (
    <h1 ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {letters.map((char, i) => {
        const style = isGradient ? {
          background: "inherit",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: `${letters.length * 100}% 100%`,
          backgroundPosition: `${(i / (letters.length - 1)) * 100}% 0%`,
          display: "inline-block"
        } : {};

        return (
          <span 
            key={i} 
            className="char inline-block whitespace-pre"
            style={style}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </h1>
  );
}
