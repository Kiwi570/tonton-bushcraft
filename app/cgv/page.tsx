import type { Metadata } from 'next';

import { Lines } from '@/components/motion/lines';
import { contactEmail, shipping } from '@/lib/site-config';

export const metadata: Metadata = { title: 'Conditions générales de vente', robots: { index: false, follow: true } };

/* Les crochets signalent les points à valider avec l'atelier avant publication. */
const sections = [
  ['Les pièces', 'Chaque création est unique, façonnée à la main dans l’arrière-pays niçois. Les photographies présentent la pièce réellement proposée ; de légères différences de teinte ou de grain font partie du travail artisanal.'],
  ['Commande et paiement', 'La commande est préparée depuis le site puis confirmée par l’atelier (disponibilité, frais de port, mode de paiement). [Moyens de paiement acceptés, conditions d’acompte pour une pièce sur mesure.]'],
  ['Prix', 'Les prix sont indiqués en euros, toutes taxes comprises, hors frais de port.'],
  ['Livraison', `${shipping.note}. ${shipping.delay}. Retrait gratuit à Gilette sur rendez-vous.`],
  ['Rétractation et retours', '[Délai de rétractation de 14 jours pour les particuliers, état de la pièce, frais de retour, remboursement.] Une pièce endommagée pendant le transport est remplacée.'],
  ['Garantie', 'Les firesteels sont testés à l’atelier avant leur départ. [Garantie légale de conformité et modalités de prise en charge.]'],
  ['Contact', `Pour toute question : ${contactEmail}.`],
];

export default function TermsPage() {
  return (
    <main id="main" className="bg-background text-foreground">
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <article className="hero-seq mx-auto max-w-3xl">
          <p className="eyebrow" style={{ animationDelay: '80ms' }}>
            Informations
          </p>
          <h1 className="mt-6 font-display text-5xl tracking-[-0.04em] sm:text-7xl">
            <Lines lines={['Conditions', 'générales de vente.']} />
          </h1>
          <div className="mt-12 grid gap-9 text-sm leading-7 text-forest/60" style={{ animationDelay: '320ms' }}>
            {sections.map(([title, text]) => (
              <section key={title}>
                <h2 className="font-display text-3xl text-forest">{title}</h2>
                <p className="mt-3">{text}</p>
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
