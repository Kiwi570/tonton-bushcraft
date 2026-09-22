import type { Metadata } from 'next';
import { PackageCheck, RotateCcw, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';

import { Lines } from '@/components/motion/lines';
import { Reveal } from '@/components/motion/reveal';
import { contactEmail, shipping } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Livraison et retours',
  description: 'Délais, frais de port, retrait à Gilette et conditions de retour des créations TonTon BushCraft.',
};

/* Les crochets signalent les points à confirmer avec l'atelier avant publication. */
const blocks = [
  { icon: PackageCheck, title: 'Préparation', text: `Chaque pièce est vérifiée et emballée à l’atelier. ${shipping.delay}.` },
  { icon: Truck, title: 'Frais et délais', text: `${shipping.note}. [Transporteur, tarif en dessous du seuil, délai d’acheminement France / Europe.]` },
  { icon: ShieldCheck, title: 'Retrait à Gilette', text: 'Retrait gratuit au village de Gilette (06830), sur rendez-vous, pour voir et prendre en main la pièce avant de l’emporter.' },
  { icon: RotateCcw, title: 'Retours', text: '[Droit de rétractation de 14 jours pour les particuliers ; pièce retournée dans son état d’origine ; frais de retour et remboursement à préciser.] Un firesteel abîmé pendant le transport est remplacé.' },
];

export default function ShippingPage() {
  return (
    <main id="main" className="bg-background text-foreground">
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="hero-seq mx-auto max-w-[1344px]">
          <p className="eyebrow" style={{ animationDelay: '80ms' }}>
            Livraison et retours
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.86] tracking-[-0.05em]">
            <Lines
              lines={[
                'De l’atelier',
                <em key="accent" className="text-ember">
                  à votre sac.
                </em>,
              ]}
            />
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-forest/60" style={{ animationDelay: '480ms' }}>
            Des pièces uniques, préparées une à une. Voici ce qui se passe entre votre commande et le premier
            feu.
          </p>
        </div>
      </section>
      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <Reveal stagger={130} y={26} className="mx-auto grid max-w-[1344px] gap-4 md:grid-cols-2">
          {blocks.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-forest/10 bg-card p-7 transition-[transform,box-shadow] duration-700 ease-out-expo hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(11,29,24,0.08)]">
              <Icon className="size-5 text-ember" strokeWidth={1.6} />
              <h2 className="mt-6 font-display text-3xl">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-forest/60">{text}</p>
            </article>
          ))}
        </Reveal>
        <Reveal y={16} delay={120} className="mx-auto mt-8 max-w-[1344px] text-sm text-forest/60">
          Une question sur un envoi ? <a href={`mailto:${contactEmail}`} className="font-bold text-forest underline decoration-ember/40 underline-offset-4 transition-colors hover:text-ember">{contactEmail}</a> · ou{' '}
          <Link href="/boutique" className="font-bold text-forest transition-colors hover:text-ember">retour à la boutique</Link>.
        </Reveal>
      </section>
    </main>
  );
}
