import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { Lines } from '@/components/motion/lines';
import { Reveal } from '@/components/motion/reveal';
import { journalEntries } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Journal de terrain',
  description: 'Guides, gestes de terrain et histoires de matières par TonTon BushCraft.',
};

export default function JournalPage() {
  const [featured, ...entries] = journalEntries;
  return (
    <main id="main" className="overflow-clip bg-background text-foreground">
      <section className="border-b border-forest/10 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="hero-seq mx-auto max-w-[1344px]">
          <p className="eyebrow" style={{ animationDelay: '80ms' }}>
            Carnet de terrain
          </p>
          <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1fr_0.55fr]" style={{ animationDelay: '0ms' }}>
            <h1 className="font-display text-[clamp(4.5rem,10vw,9rem)] leading-[0.82] tracking-[-0.06em]">
              <Lines
                lines={[
                  'Lire. Essayer.',
                  <em key="accent" className="text-ember">
                    Repartir.
                  </em>,
                ]}
              />
            </h1>
            <p className="anim-rise max-w-md pb-2 text-base leading-7 text-forest/58" style={{ animationDelay: '520ms' }}>
              Des conseils concrets, des histoires de bois et les gestes simples qui rendent le dehors plus
              accueillant.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <Reveal scale={0.985} y={30}>
            <Link href={`/journal/${featured.slug}`} className="group grid overflow-hidden bg-forest text-white lg:grid-cols-[1.18fr_0.82fr]">
              <div className="relative min-h-[430px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/45 to-transparent" />
              </div>
              <div className="flex flex-col justify-between p-8 sm:p-12">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand">
                    À la une · {featured.category} · {featured.readTime}
                  </p>
                  <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl">{featured.title}</h2>
                  <p className="mt-6 text-sm leading-7 text-white/55">{featured.excerpt}</p>
                </div>
                <span className="mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-sand">
                  Lire le guide{' '}
                  <ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
          <Reveal stagger={160} y={36} className="mt-16 grid gap-10 md:grid-cols-2">
            {entries.map((entry) => (
              <Link href={`/journal/${entry.slug}`} key={entry.slug} className="group">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={entry.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.06]"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.19em] text-ember">
                      {entry.category} · {entry.readTime}
                    </p>
                    <h2 className="mt-3 font-display text-4xl leading-tight transition-colors duration-500 group-hover:text-ember">{entry.title}</h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-forest/55">{entry.excerpt}</p>
                  </div>
                  <ArrowUpRight className="mt-7 size-5 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
