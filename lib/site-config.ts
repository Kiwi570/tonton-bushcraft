const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');

export const siteUrl = configuredSiteUrl || 'https://www.tonton-bushcraft.fr';

/** Adresse de l’atelier (déjà utilisée sur le site actuel) : reçoit les commandes et inscriptions préparées par e-mail. */
export const contactEmail = 'firesteel@tonton-bushcraft.fr';

/** À CONFIRMER avec l'atelier : seuils et montants affichés sur les fiches et la page Livraison. */
export const shipping = {
  freeFrom: 200,
  note: 'Frais de port calculés à la commande, offerts dès 200 €',
  delay: 'Expédition sous 48 h ouvrées, colis suivi',
};

export const helpLinks = [
  { href: '/livraison', label: 'Livraison & retours' },
  { href: '/carte-cadeau', label: 'Carte cadeau' },
  { href: '/atelier#contact', label: 'Contact' },
];

export const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/mentions-legales#confidentialite', label: 'Confidentialité' },
  { href: '/cgv', label: 'CGV' },
];
