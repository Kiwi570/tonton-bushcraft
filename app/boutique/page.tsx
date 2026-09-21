import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, Flame, Hand, Sparkles } from 'lucide-react';

import { FiresteelFinder } from '@/components/site/firesteel-finder';
import { ProductGrid } from '@/components/site/product-grid';
import { products } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Boutique artisanale',
  description: 'Découvrez les firesteels, tire-bouchons et décapsuleurs façonnés à la main par TonTon BushCraft.',
};

export default function BoutiquePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[520px] overflow-hidden bg-forest text-white">
        <Image src={products[1].images[0]} alt="Firesteel Héphaïstos en bois de cerf" fill priority sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,29,24,.96),rgba(11,29,24,.42))]" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1344px] flex-col justify-end px-5 py-16 sm:px-8 lg:px-12">
          <p className="eyebrow text-sand before:bg-sand">La boutique</p>
          <div className="mt-5 grid items-end gap-8 lg:grid-cols-[1fr_0.55fr]"><h1 className="font-display text-[clamp(4rem,9vw,8rem)] leading-[0.84] tracking-[-0.055em]">Choisir par<br /><em className="text-sand">instinct.</em></h1><p className="max-w-md pb-2 text-base leading-7 text-white/62">Chaque pièce existe en un seul exemplaire. Explorez librement ou laissez notre boussole vous orienter.</p></div>
          <a href="#pieces" className="mt-10 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-sand">Voir les pièces <ArrowDown className="size-4" /></a>
        </div>
      </section>

      <section id="pieces" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"><div><p className="eyebrow">Disponibles maintenant</p><h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.045em] sm:text-7xl">Les pièces de l’atelier</h2></div><p className="max-w-md text-sm leading-6 text-forest/55 lg:justify-self-end">Pas de stock impersonnel : ce que vous voyez correspond aux objets façonnés et prêts à partir de Gilette.</p></div>
          <ProductGrid />
        </div>
      </section>

      <FiresteelFinder />

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="eyebrow">Avant de choisir</p><h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.04em]">Trois repères.<br /><em className="text-ember">Pas de jargon.</em></h2></div><div className="grid divide-y divide-forest/15 border-y border-forest/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            {[[Flame, 'La barre', 'Plus elle est épaisse, plus sa réserve d’étincelles est généreuse.'], [Hand, 'La prise', 'Le bon manche est celui que vous oubliez quand le geste commence.'], [Sparkles, 'La matière', 'Chêne, olivier ou cerf : choisissez d’abord le contact qui vous appelle.']].map(([Icon, title, copy]) => <article key={String(title)} className="py-8 md:px-7"><Icon className="size-5 text-ember" strokeWidth={1.5} /><h3 className="mt-7 font-display text-3xl">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-forest/55">{String(copy)}</p></article>)}
          </div></div>
          <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-forest/15 pt-8 sm:flex-row sm:items-center"><p className="font-display text-2xl">Encore un doute ? Le geste peut vous aider à décider.</p><Link href="/atelier" className="inline-flex items-center gap-2 text-sm font-bold">Entrer dans l’atelier <ArrowRight className="size-4" /></Link></div>
        </div>
      </section>
    </main>
  );
}
