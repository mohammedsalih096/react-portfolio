'use client';

import { useEffect, useRef, type CSSProperties, type PropsWithChildren } from 'react';
import { useReducedMotion } from 'motion/react';

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const element = elementRef.current;
    if (!element || reduceMotion || !('IntersectionObserver' in window)) return;

    const bounds = element.getBoundingClientRect();
    element.dataset.revealed = bounds.top < window.innerHeight && bounds.bottom > 0 ? 'true' : 'false';

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        element.dataset.revealed = 'true';
        observer.unobserve(element);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div
      ref={elementRef}
      className={`reveal${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
