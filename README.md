# TonTon BushCraft — maquette Next.js

Version optimisée pour GitHub et Vercel de la nouvelle expérience TonTon BushCraft.

## Lancer le projet en local

Prérequis : Node.js 22 ou plus récent, et npm.

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

## Vérifier avant un déploiement

```bash
npm run check
```

Cette commande contrôle le code, le typage TypeScript et le build de production.

## Déployer avec GitHub et Vercel

1. Poussez le contenu de ce dossier dans un nouveau dépôt GitHub.
2. Dans Vercel, choisissez **Add New > Project**, puis importez ce dépôt.
3. Laissez Vercel détecter **Next.js** et conservez les réglages proposés.
4. Ajoutez `NEXT_PUBLIC_SITE_URL` avec l’URL publique finale si elle diffère de `https://www.tonton-bushcraft.fr`.
5. Lancez le déploiement.

Vercel publiera automatiquement une prévisualisation pour les branches et la production depuis la branche principale.

## Avant publication

- confirmer les frais de port, le seuil de gratuité et les délais dans `lib/site-config.ts` (`shipping`) ;
- compléter les passages entre crochets des pages Livraison, Carte cadeau, Mentions légales et CGV ;
- raccorder le paiement et l’inscription newsletter (aujourd’hui préparés par e-mail).

## Périmètre fonctionnel

La navigation, le catalogue, les fiches produits, le journal, la boussole de recommandation et le panier local sont opérationnels. Le paiement et l’inscription newsletter restent des interactions de maquette : ils devront être reliés aux services commerciaux choisis avant l’ouverture des ventes.

## Motion

Le mouvement du site repose sur un petit kit sans dépendance, dans `components/motion/` et la section « MOTION KIT » de `app/globals.css`. C'est le même kit que sur les autres refontes, réglé ici pour un rendu organique et contrasté.

| Composant | Rôle | Type |
| --- | --- | --- |
| `Lines` | Révélation ligne par ligne d'un titre (masque + montée), CSS pur | serveur |
| `Reveal` | Apparition au scroll (IntersectionObserver), cascade des enfants avec `stagger` | client |
| `Marquee` | Bandeau défilant en CSS pur (bandeau promo du header), pause au survol | serveur |

Classes utilitaires : `.hero-seq` (séquence d'entrée d'un hero, délais posés inline), `.anim-rise` / `.anim-scale` / `.anim-fade` (entrées au chargement), `.stagger-in` (cascade d'une grille), `.kenburns` (zoom très lent sur une image de hero), `.flicker` (flamme qui vacille), `.parallax` (piloté par le scroll, ignoré si non supporté), `.animate-pop` (feedback).

Principes :

- les entrées « au chargement » sont en CSS pur et jouent avant l'hydratation ;
- les entrées « au scroll » ne masquent rien tant que la classe `.js` (posée dans `app/layout.tsx`) n'est pas là ;
- `prefers-reduced-motion` désactive bandeau, Ken Burns, flamme et parallax, et affiche tout d'un coup ;
- les tiroirs (panier, menu) gardent les transitions de Base UI, allongées à 500 ms.
