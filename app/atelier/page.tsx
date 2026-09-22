import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Flame, Leaf, MapPin, Sparkles } from 'lucide-react';

import { Lines } from '@/components/motion/lines';
import { Reveal } from '@/components/motion/reveal';
import { products, workshopImage } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'L’atelier',
  description: 'Découvrez le geste, les matières et l’histoire de l’atelier TonTon BushCraft à Gilette.',
};

const gestures = [
  { icon: Leaf, number: '01', title: 'Choisir', text: 'Lire le grain, sentir la densité, trouver la portion de bois qui appelle déjà une forme.' },
  { icon: Sparkles, number: '02', title: 'Façonner', text: 'Dégrossir, poncer, reprendre. Jusqu’à ce que la prise devienne évidente.' },
  { icon: Flame, number: '03', title: 'Éprouver', text: 'Monter le ferrocerium, tester le geste et ne laisser partir que ce qui fonctionne.' },
];

export default function AtelierPage() {
  return (
    <main id="main" className="overflow-clip bg-background text-foreground">
      <section className="relative min-h-[690px] overflow-clip bg-forest text-white">
        <Image
          src={workshopImage}
          alt="L’atelier TonTon BushCraft à Gilette"
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover opacity-72"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,29,24,.97),rgba(11,29,24,.58),rgba(11,29,24,.16))]" />
        <div className="hero-seq relative mx-auto flex min-h-[690px] max-w-[1344px] flex-col justify-end px-5 py-16 sm:px-8 lg:px-12">
          <p className="eyebrow text-sand before:bg-sand" style={{ animationDelay: '80ms' }}>
            Gilette · Alpes-Maritimes
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(4rem,10vw,9rem)] leading-[0.82] tracking-[-0.06em]">
            <Lines
              lines={[
                'Là où la matière',
                <em key="accent" className="text-sand">
                  devient geste.
                </em>,
              ]}
            />
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/62" style={{ animationDelay: '520ms' }}>
            Un atelier à taille humaine, entre montagne et Méditerranée. Ici, chaque objet commence par un
            morceau de bois que l’on prend le temps de regarder.
          </p>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal stagger={140} y={20}>
              <p className="eyebrow">La philosophie</p>
              <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">
                Ne rien forcer.
                <br />
                <em className="text-ember">Faire apparaître.</em>
              </h2>
            </Reveal>
            <Reveal stagger={140} y={20} delay={120} className="lg:pt-12">
              <p className="font-display text-2xl leading-relaxed text-forest/78 sm:text-3xl">
                La forme n’est jamais plaquée sur la matière. Elle se découvre peu à peu, guidée par le grain,
                les nœuds et la mémoire du bois.
              </p>
              <p className="mt-7 max-w-xl text-base leading-7 text-forest/58">
                C’est ce qui rend chaque pièce singulière. Le travail artisanal ne cherche pas à effacer les
                irrégularités : il les transforme en prise, en équilibre et en caractère.
              </p>
            </Reveal>
          </div>

          <Reveal stagger={160} y={40} className="mt-20 grid gap-4 md:grid-cols-12">
            <div className="relative min-h-[560px] overflow-clip bg-muted md:col-span-8">
              <Image
                src={products[0].images[1]}
                alt="Détail du travail du bois sur un firesteel"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="parallax object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 p-8 pt-28 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sand">La matière donne le tempo</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:col-span-4 md:grid-cols-1">
              <div className="group flex min-h-[270px] flex-col justify-between bg-sand/55 p-8 transition-colors duration-700 hover:bg-sand/80">
                <Leaf className="size-6 text-ember transition-transform duration-700 ease-out-expo group-hover:-rotate-12" strokeWidth={1.5} />
                <div>
                  <p className="font-display text-4xl">Bois choisis</p>
                  <p className="mt-3 text-sm leading-6 text-forest/55">
                    Chêne vert, olivier, bois flotté : chaque essence appelle un geste différent.
                  </p>
                </div>
              </div>
              <div className="flex min-h-[270px] flex-col justify-between bg-forest p-8 text-white">
                <Flame className="flicker size-6 text-sand" strokeWidth={1.5} />
                <div>
                  <p className="font-display text-4xl">Testé au feu</p>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    Chaque firesteel quitte l’atelier après avoir prouvé son étincelle.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#e5dfd2] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <Reveal stagger={140} y={20} className="grid items-end gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Du brut au terrain</p>
              <h2 className="mt-5 font-display text-[clamp(3.2rem,6vw,6.8rem)] leading-[0.88] tracking-[-0.05em]">
                Trois gestes.
                <br />
                <em className="text-ember">Une pièce à vous.</em>
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-forest/58 lg:justify-self-end">
              Chaque étape laisse la place au regard, au toucher et aux surprises du bois.
            </p>
          </Reveal>
          <Reveal stagger={180} y={30} className="mt-16 grid border-y border-forest/15 md:grid-cols-3 md:divide-x md:divide-forest/15">
            {gestures.map(({ icon: Icon, number, title, text }) => (
              <article key={number} className="group relative py-11 md:px-9 md:py-14">
                <Icon className="size-6 text-ember transition-transform duration-700 ease-out-expo group-hover:-rotate-12 group-hover:scale-110" strokeWidth={1.5} />
                <span className="absolute right-4 top-8 font-display text-7xl text-forest/[0.055] transition-colors duration-700 group-hover:text-ember/20 md:text-8xl">
                  {number}
                </span>
                <h3 className="mt-12 font-display text-4xl">{title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-forest/55">{text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-forest px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1344px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal stagger={140} y={18}>
            <p className="eyebrow text-sand before:bg-sand">L’esprit TonTon</p>
            <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              <MapPin className="size-4 text-sand" /> Gilette, 06830
            </div>
          </Reveal>
          <Reveal y={30} delay={150}>
            <blockquote className="font-display text-[clamp(2.8rem,5.5vw,6.5rem)] leading-[0.98] tracking-[-0.045em]">
              “Un bon outil ne prend pas la place du geste. <em className="text-sand">Il lui donne confiance.</em>”
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1344px] items-center gap-12 border-y border-forest/15 py-16 lg:grid-cols-[1fr_0.65fr]">
          <Reveal stagger={140} y={20}>
            <p className="eyebrow">Parlons de votre pièce</p>
            <h2 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">
              Une idée, une matière,
              <br />
              <em className="text-ember">une question ?</em>
            </h2>
          </Reveal>
          <Reveal stagger={140} y={20} delay={120}>
            <p className="text-sm leading-7 text-forest/55">
              L’atelier répond directement. Pour une demande particulière ou simplement un conseil avant de
              choisir, écrivez-nous.
            </p>
            <div className="mt-7">
              <a
                href="mailto:firesteel@tonton-bushcraft.fr"
                className="group inline-flex items-center gap-3 rounded-full bg-forest px-6 py-4 text-sm font-bold text-white transition-[background-color,transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-ember hover:shadow-[0_16px_45px_rgba(195,83,49,.3)]"
              >
                Contacter l’atelier{' '}
                <ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
              </a>
            </div>
            <Link href="/boutique" className="mt-4 block text-sm font-bold text-forest/55 transition-colors duration-500 hover:text-ember">
              Ou explorer les pièces disponibles
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
