import type { Metadata } from 'next';
import { Gift, Mail } from 'lucide-react';

import { Lines } from '@/components/motion/lines';
import { Reveal } from '@/components/motion/reveal';
import { contactEmail } from '@/lib/site-config';
import { formatPrice } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Carte cadeau',
  description: 'Offrez une création TonTon BushCraft : la carte cadeau laisse le choix de la pièce, du bois et de la prise.',
};

/* Montants à confirmer avec l'atelier. */
const amounts = [50, 100, 150, 200];

export default function GiftCardPage() {
  return (
    <main id="main" className="bg-background text-foreground">
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="hero-seq mx-auto max-w-[1344px]">
          <p className="eyebrow" style={{ animationDelay: '80ms' }}>
            Carte cadeau
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.86] tracking-[-0.05em]">
            <Lines
              lines={[
                'Offrez le feu,',
                <em key="accent" className="text-ember">
                  laissez le choix.
                </em>,
              ]}
            />
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-forest/60" style={{ animationDelay: '480ms' }}>
            Chaque manche est unique : la carte cadeau laisse à celui qui la reçoit le plaisir de choisir sa
            pièce, son bois et sa prise, à l’atelier ou sur le site.
          </p>
        </div>
      </section>
      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1344px]">
          <Reveal stagger={120} y={30} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {amounts.map((amount) => {
              const subject = encodeURIComponent(`Carte cadeau — ${formatPrice(amount)}`);
              const body = encodeURIComponent(
                `Bonjour,\n\nJe souhaite offrir une carte cadeau de ${formatPrice(amount)}.\n\nNom du destinataire : \nMessage à joindre : \n\nMerci de m’indiquer la marche à suivre.\n`,
              );
              return (
                <a
                  key={amount}
                  href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}
                  className="group flex min-h-[220px] flex-col justify-between border border-forest/15 bg-card p-6 transition-[border-color,transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:border-ember hover:shadow-[0_30px_60px_rgba(11,29,24,0.1)]"
                >
                  <Gift className="size-5 text-ember transition-transform duration-700 ease-out-expo group-hover:-rotate-12" strokeWidth={1.6} />
                  <div>
                    <p className="font-display text-5xl">{formatPrice(amount)}</p>
                    <p className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ember">
                      <Mail className="size-3.5" /> Commander par e-mail
                    </p>
                  </div>
                </a>
              );
            })}
          </Reveal>
          <Reveal y={16} delay={150} className="mt-6 border border-dashed border-forest/20 p-6 text-sm leading-7 text-forest/60">
            La carte est envoyée par e-mail, prête à imprimer ou à transférer, avec son numéro unique. Montant libre
            sur demande. [Durée de validité et conditions à confirmer avec l’atelier.]
          </Reveal>
        </div>
      </section>
    </main>
  );
}
