import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Flame, Leaf, PackageCheck, Sparkles, Star } from 'lucide-react';

import { ProductCard } from '@/components/site/product-card';
import { journalEntries, products, workshopImage } from '@/lib/site-data';

const categoryTiles = [
  { product: products[4], title: 'Tire-bouchons', kicker: 'Le bois à table' },
  { product: products[3], title: 'Décapsuleurs', kicker: 'L’apéro, naturellement' },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[calc(100svh-110px)] bg-forest text-white">
        <div className="absolute inset-0">
          <Image src={workshopImage} alt="L’atelier artisanal TonTon BushCraft" fill priority sizes="100vw" className="object-cover object-center opacity-60" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,29,24,.97)_0%,rgba(11,29,24,.72)_48%,rgba(11,29,24,.1)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,29,24,.62)_0%,transparent_48%)]" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100svh-110px)] max-w-[1440px] items-end px-5 pb-14 pt-20 sm:px-8 sm:pb-16 lg:grid-cols-[1fr_280px] lg:px-12 lg:pb-20">
          <div className="max-w-4xl animate-rise">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-sand"><span className="h-px w-9 bg-sand" />Fait main dans l’arrière-pays niçois</p>
            <h1 className="max-w-4xl font-display text-[clamp(3.5rem,9vw,8.4rem)] font-normal leading-[0.84] tracking-[-0.055em]">Le feu.<br /><em className="font-light text-sand">À votre mesure.</em></h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/68 sm:text-lg">Des firesteels uniques, façonnés à la main dans des bois choisis. Un outil essentiel, pensé pour durer et vous suivre loin.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/boutique" className="group inline-flex h-14 items-center gap-3 rounded-full bg-ember px-7 text-sm font-bold text-white shadow-[0_16px_45px_rgba(195,83,49,.28)] transition hover:-translate-y-0.5 hover:bg-[#d06442]">Découvrir les pièces<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              <Link href="/boutique#boussole" className="inline-flex h-14 items-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition hover:border-sand/60 hover:text-sand">Trouver mon firesteel</Link>
            </div>
          </div>
          <div className="mt-14 hidden border-l border-white/20 pl-7 lg:block"><p className="font-display text-5xl font-light text-sand">01</p><p className="mt-3 text-xs font-bold uppercase tracking-[0.18em]">Pièces uniques</p><p className="mt-2 text-sm leading-relaxed text-white/55">Chaque veinage raconte une histoire. Aucun manche ne ressemble à un autre.</p></div>
        </div>
        <Link href="/atelier" className="absolute bottom-0 right-0 hidden w-[27vw] min-w-[340px] border-l border-t border-white/15 bg-forest/70 px-8 py-5 backdrop-blur-md transition hover:bg-forest xl:flex xl:items-center xl:justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">Voir le geste de l’artisan</span><ArrowRight className="size-4 text-sand" /></Link>
      </section>

      <section className="border-b border-forest/10 bg-sand/45">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-forest/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
          {[[Sparkles, 'Façonné à la main', 'Chaque pièce est travaillée une à une'], [PackageCheck, 'Expédition sous 48 h', 'Depuis notre atelier de Gilette'], [Leaf, 'Matières choisies', 'Bois locaux, flottés et bois de cerf']].map(([Icon, title, text]) => <div key={String(title)} className="flex items-center gap-4 py-6 md:px-7 first:pl-0"><Icon className="size-5 shrink-0 text-ember" strokeWidth={1.6} /><div><p className="text-sm font-bold">{String(title)}</p><p className="mt-0.5 text-xs text-forest/55">{String(text)}</p></div></div>)}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div><p className="eyebrow">L’essentiel, bien fait</p><h2 className="mt-5 font-display text-[clamp(2.7rem,5vw,5.8rem)] leading-[0.95] tracking-[-0.045em]">Pensé dehors.<br /><em className="text-ember">Façonné ici.</em></h2></div>
            <div className="max-w-2xl lg:pt-11"><p className="font-display text-2xl leading-relaxed text-forest/78 sm:text-3xl">Entre outil et objet, chaque création est une rencontre entre la matière brute, la main et le besoin réel du terrain.</p><p className="mt-7 max-w-xl text-base leading-7 text-forest/58">Le site s’explore comme l’atelier : par la matière, le geste et l’usage. Entrez par la pièce qui vous attire, puis laissez la boussole affiner votre choix.</p><Link href="/atelier" className="mt-8 inline-flex items-center gap-3 border-b border-forest/30 pb-2 text-sm font-bold transition hover:border-ember hover:text-ember">Découvrir le savoir-faire <ArrowRight className="size-4" /></Link></div>
          </div>
          <div className="mt-20 grid gap-4 md:grid-cols-12">
            <Link href="/boutique" className="group relative min-h-[510px] overflow-hidden bg-forest md:col-span-7">
              <Image src={products[0].images[0]} alt="Firesteel Oxylus en chêne vert" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" /><div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/15 to-transparent" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 text-white sm:p-10"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand">L’étincelle signature</p><h3 className="mt-3 font-display text-4xl sm:text-5xl">Firesteels</h3></div><span className="grid size-12 place-items-center rounded-full border border-white/35 transition group-hover:bg-white group-hover:text-forest"><ArrowUpRight className="size-5" /></span></div>
            </Link>
            <div className="grid gap-4 sm:grid-cols-2 md:col-span-5 md:grid-cols-1">
              {categoryTiles.map(({ product, title, kicker }) => <Link key={title} href={`/boutique/${product.slug}`} className="group relative min-h-[247px] overflow-hidden bg-forest"><Image src={product.images[0]} alt={title} fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover transition duration-700 group-hover:scale-[1.045]" /><div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-8"><div><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-sand">{kicker}</p><h3 className="mt-1 font-display text-3xl">{title}</h3></div><ArrowUpRight className="size-5" /></div></Link>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e5dfd2] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow">En ce moment à l’atelier</p><h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.045em] sm:text-7xl">Pièces choisies</h2></div><Link href="/boutique" className="inline-flex items-center gap-2 text-sm font-bold">Toute la boutique <ArrowRight className="size-4" /></Link></div>
          <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{products.slice(0, 3).map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
        </div>
      </section>

      <section className="bg-forest text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[540px] overflow-hidden lg:min-h-[760px]"><Image src={products[2].images[0]} alt="Firesteel Aryen façonné dans un manche en chêne" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" /><p className="absolute bottom-8 left-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Aryen · Chêne · Pièce unique</p></div>
          <div className="flex items-center px-5 py-20 sm:px-12 lg:px-[8vw] lg:py-24"><div className="max-w-xl"><p className="eyebrow text-sand before:bg-sand">Pourquoi un Firesteel TonTon ?</p><h2 className="mt-6 font-display text-[clamp(3rem,5vw,6rem)] leading-[0.92] tracking-[-0.045em]">Une étincelle.<br /><em className="text-sand">Toutes les conditions.</em></h2><p className="mt-8 text-base leading-7 text-white/62">Une barre de ferrocérium haute qualité, un manche naturellement confortable et la certitude d’un feu fiable — en randonnée, au camp ou au fond des bois.</p><Link href="/boutique#boussole" className="mt-9 inline-flex items-center gap-3 rounded-full bg-ember px-6 py-3.5 text-sm font-bold transition hover:bg-[#d06442]">Activer la boussole <Flame className="size-4" /></Link></div></div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex items-end justify-between"><div><p className="eyebrow">Carnet de terrain</p><h2 className="mt-4 font-display text-5xl sm:text-7xl">À lire près du feu</h2></div><Link href="/journal" className="hidden items-center gap-2 text-sm font-bold sm:flex">Tout le journal <ArrowRight className="size-4" /></Link></div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">{journalEntries.map((entry) => <Link href={`/journal/${entry.slug}`} key={entry.slug} className="group"><div className="relative aspect-[4/3] overflow-hidden bg-muted"><Image src={entry.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" /></div><p className="mt-5 text-[9px] font-bold uppercase tracking-[0.19em] text-ember">{entry.category} · {entry.readTime}</p><h3 className="mt-3 font-display text-3xl leading-tight group-hover:text-ember">{entry.title}</h3><p className="mt-3 text-sm leading-6 text-forest/55">{entry.excerpt}</p></Link>)}</div>
        </div>
      </section>

      <section className="border-t border-forest/10 bg-sand/40 px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-5xl text-center"><div className="flex justify-center gap-1 text-ember" aria-label="5 étoiles sur 5">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</div><blockquote className="mt-8 font-display text-[clamp(2rem,4vw,4.5rem)] leading-[1.08] tracking-[-0.035em]">“Bien plus qu’un outil : une pièce magnifique, parfaitement finie, qui ne me quitte plus en bivouac.”</blockquote><p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-forest/55">Mathieu R. · Client vérifié</p></div></section>
    </main>
  );
}
