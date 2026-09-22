import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

import { Lines } from '@/components/motion/lines';

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[70vh] place-items-center bg-forest px-5 text-center text-white">
      <div className="hero-seq">
        <div style={{ animationDelay: '0ms' }}>
          <Compass className="mx-auto size-10 animate-[spin_40s_linear_infinite] text-sand" strokeWidth={1.4} />
        </div>
        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-sand" style={{ animationDelay: '120ms' }}>
          Vous avez quitté le sentier
        </p>
        <h1 className="mt-4 font-display text-7xl sm:text-9xl">
          <Lines lines={['404']} />
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/55" style={{ animationDelay: '360ms' }}>
          Cette piste ne mène nulle part, mais la collection n’est jamais très loin.
        </p>
        <div className="mt-8" style={{ animationDelay: '480ms' }}>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-bold transition-[background-color,transform] duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-[#d06442]"
          >
            <ArrowLeft className="size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-x-1" /> Revenir à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
