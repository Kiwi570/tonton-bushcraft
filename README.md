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

## Périmètre fonctionnel

La navigation, le catalogue, les fiches produits, le journal, la boussole de recommandation et le panier local sont opérationnels. Le paiement et l’inscription newsletter restent des interactions de maquette : ils devront être reliés aux services commerciaux choisis avant l’ouverture des ventes.
