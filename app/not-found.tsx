import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-forest px-5 text-center text-white"><div><Compass className="mx-auto size-10 text-sand" strokeWidth={1.4} /><p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-sand">Vous avez quitté le sentier</p><h1 className="mt-4 font-display text-7xl sm:text-9xl">404</h1><p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/55">Cette piste ne mène nulle part, mais la collection n’est jamais très loin.</p><Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-bold"><ArrowLeft className="size-4" /> Revenir à l’accueil</Link></div></main>
  );
}
