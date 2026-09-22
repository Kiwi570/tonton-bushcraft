import Link from 'next/link';
import { Mountain } from 'lucide-react';

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" aria-label="TonTon BushCraft — Accueil" className="group inline-flex items-center gap-3">
      <span className="grid size-11 place-items-center rounded-full border border-sand/35 bg-white/5 text-sand transition-[transform,background-color,border-color] duration-700 ease-out-expo group-hover:-rotate-6 group-hover:border-sand group-hover:bg-sand/15">
        <Mountain className="size-5" strokeWidth={1.7} />
      </span>
      {compact ? null : (
        <span className="leading-none">
          <strong className="block font-display text-[21px] font-normal tracking-[0.02em]">TonTon</strong>
          <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.34em] text-sand/70">BushCraft</span>
        </span>
      )}
    </Link>
  );
}
