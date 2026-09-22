'use client';

import { type CSSProperties, useMemo } from 'react';

type SparksProps = {
  /** Change de valeur pour rejouer l'éclat (par exemple un compteur incrémenté à chaque clic). */
  burst: number;
  className?: string;
  count?: number;
};

/**
 * Éclat d'étincelles (braise et sable) au point d'ancrage : à poser dans un parent `relative`,
 * à l'endroit du bouton. Ne rend rien tant que `burst` vaut 0, ni en mouvement réduit.
 */
export function Sparks({ burst, className = '', count = 14 }: SparksProps) {
  const sparks = useMemo(() => {
    if (!burst) return [];
    return Array.from({ length: count }, (_, index) => {
      const angle = (index / count) * Math.PI * 2 + Math.random() * 0.6;
      const distance = 34 + Math.random() * 44;
      return {
        id: `${burst}-${index}`,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance - 18,
        size: 3 + Math.random() * 4,
        delay: Math.random() * 80,
        ember: index % 3 !== 0,
      };
    });
  }, [burst, count]);

  if (!sparks.length) return null;
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  return (
    <span key={burst} className={`pointer-events-none absolute z-30 ${className}`} aria-hidden="true">
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className={`spark absolute rounded-full ${spark.ember ? 'bg-ember' : 'bg-sand'}`}
          style={{
            width: spark.size,
            height: spark.size,
            marginLeft: -spark.size / 2,
            marginTop: -spark.size / 2,
            animationDelay: `${spark.delay}ms`,
            ['--dx' as string]: `${spark.dx}px`,
            ['--dy' as string]: `${spark.dy}px`,
          } as CSSProperties}
        />
      ))}
    </span>
  );
}
