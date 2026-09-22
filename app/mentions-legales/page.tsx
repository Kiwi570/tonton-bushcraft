import type { Metadata } from 'next';

import { Lines } from '@/components/motion/lines';
import { contactEmail } from '@/lib/site-config';

export const metadata: Metadata = { title: 'Mentions légales', robots: { index: false, follow: true } };

/* Les crochets signalent les informations à compléter avec l'atelier avant publication. */
const sections = [
  { id: 'editeur', title: 'Éditeur', text: 'TonTon BushCraft — [raison sociale ou nom de l’artisan, statut, adresse à Gilette (06830), numéro SIRET, numéro de TVA le cas échéant]. Directeur de la publication : [nom].' },
  { id: 'hebergement', title: 'Hébergement', text: '[Nom de l’hébergeur, adresse, téléphone.]' },
  { id: 'propriete', title: 'Propriété intellectuelle', text: 'Les textes, photographies et créations présentés sur ce site sont la propriété de TonTon BushCraft. Toute reproduction sans autorisation est interdite.' },
  { id: 'confidentialite', title: 'Confidentialité', text: `Le site ne collecte aucune donnée par formulaire : les commandes et inscriptions sont préparées dans votre messagerie et vous en gardez le contrôle. Les e-mails reçus à ${contactEmail} sont conservés le temps du traitement de la commande et des obligations comptables. Vous pouvez demander leur consultation ou leur suppression à cette même adresse. [À compléter lorsque le paiement en ligne et l’outil d’e-mailing seront raccordés.]` },
  { id: 'cookies', title: 'Cookies', text: 'Le site n’utilise ni cookie de suivi ni outil de mesure d’audience tiers. [À mettre à jour si un outil est ajouté.]' },
];

export default function LegalPage() {
  return (
    <main id="main" className="bg-background text-foreground">
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <article className="hero-seq mx-auto max-w-3xl">
          <p className="eyebrow" style={{ animationDelay: '80ms' }}>
            Informations
          </p>
          <h1 className="mt-6 font-display text-5xl tracking-[-0.04em] sm:text-7xl">
            <Lines lines={['Mentions légales.']} />
          </h1>
          <div className="mt-12 grid gap-9 text-sm leading-7 text-forest/60" style={{ animationDelay: '320ms' }}>
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="font-display text-3xl text-forest">{section.title}</h2>
                <p className="mt-3">{section.text}</p>
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
