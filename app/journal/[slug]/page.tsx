import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

import { Lines } from '@/components/motion/lines';
import { Reveal } from '@/components/motion/reveal';
import { siteUrl } from '@/lib/site-config';
import { getJournalEntry, journalEntries } from '@/lib/site-data';

type JournalPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.excerpt,
    openGraph: { title: `${entry.title} — TonTon BushCraft`, description: entry.excerpt, images: [{ url: entry.image, alt: entry.title }], url: `${siteUrl}/journal/${entry.slug}`, type: 'article' },
    twitter: { card: 'summary_large_image', title: entry.title, description: entry.excerpt, images: [entry.image] },
  };
}

export default async function JournalEntryPage({ params }: JournalPageProps) {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) notFound();
  const nextEntry = journalEntries[(journalEntries.findIndex((item) => item.slug === entry.slug) + 1) % journalEntries.length];

  return (
    <main id="main" className="overflow-clip bg-background text-foreground">
      <article>
        <header className="px-5 pb-14 pt-8 sm:px-8 sm:pb-20 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/journal"
              className="anim-fade group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-forest/50 transition-colors hover:text-ember"
            >
              <ArrowLeft className="size-3.5 transition-transform duration-500 ease-out-expo group-hover:-translate-x-1" /> Retour au journal
            </Link>
            <div className="hero-seq mt-14 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ember" style={{ animationDelay: '100ms' }}>
                {entry.category}
              </p>
              <h1 className="mx-auto mt-5 max-w-5xl font-display text-[clamp(3.5rem,8vw,7.8rem)] leading-[0.88] tracking-[-0.055em]">
                <Lines lines={[entry.title]} delay={200} />
              </h1>
              <p className="mx-auto mt-7 max-w-2xl font-display text-xl leading-relaxed text-forest/65 sm:text-2xl" style={{ animationDelay: '480ms' }}>
                {entry.intro}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-xs text-forest/60" style={{ animationDelay: '620ms' }}>
                <Clock className="size-3.5" /> Lecture · {entry.readTime}
              </p>
            </div>
          </div>
        </header>
        <div className="anim-scale relative mx-auto aspect-[16/8] max-w-[1440px] overflow-clip bg-muted" style={{ animationDelay: '300ms' }}>
          <Image src={entry.image} alt={entry.title} fill priority sizes="100vw" className="parallax object-cover" />
        </div>
        <Reveal stagger={120} y={18} className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-lg leading-9 text-forest/70">
            <span className="float-left mr-4 mt-1 font-display text-7xl leading-[0.75] text-ember">{entry.paragraphs[0].charAt(0)}</span>
            {entry.paragraphs[0].slice(1)}
          </p>
          {entry.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph} className="mt-8 text-lg leading-9 text-forest/70">
              {paragraph}
            </p>
          ))}
          <div className="mt-14 border-l-2 border-ember bg-sand/35 px-7 py-6 font-display text-2xl leading-relaxed">
            Le terrain ne récompense pas la précipitation. Il récompense la préparation.
          </div>
        </Reveal>
      </article>
      <section className="bg-forest px-5 py-20 text-white sm:px-8 lg:px-12">
        <Reveal y={20}>
          <Link href={`/journal/${nextEntry.slug}`} className="group mx-auto flex max-w-[1100px] flex-col justify-between gap-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand">Continuer la lecture</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight transition-colors duration-500 group-hover:text-sand sm:text-6xl">{nextEntry.title}</h2>
            </div>
            <span className="grid size-14 shrink-0 place-items-center rounded-full border border-white/20 transition-[background-color,border-color,transform] duration-500 ease-out-expo group-hover:scale-110 group-hover:border-ember group-hover:bg-ember">
              <ArrowRight className="size-5 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
