# Audit et évolutions — TonTon BushCraft

## Mouvement (V2)

La maquette était solide mais figée : seul le bloc du hero montait au chargement. Cette version pose une couche de mouvement organique et contrastée, sans aucune dépendance :

- hero : Ken Burns très lent sur l'atelier, titre révélé ligne par ligne, cascade eyebrow → texte → boutons → repère « 01 » ;
- bandeau promo qui défile en haut, en pause au survol ;
- chaque section apparaît au scroll, les grilles en cascade ; les cinq étoiles du témoignage s'allument une à une ;
- cartes produit : la pièce se soulève et l'image s'approche, le bouton « + » monte, la coche « pop » ; badge panier qui pulse à chaque ajout ;
- boutique : les filtres recomposent la grille en cascade ;
- boussole : vrai fondu croisé entre les pièces recommandées, aiguille qui tourne à chaque réponse, questions et réponses en cascade, résultat qui s'installe ;
- flamme qui vacille sur « Activer la boussole » et « Testé au feu » ;
- fiche produit : galerie qui s'installe, colonne séquencée, caractéristiques en cascade ; journal : article séquencé avec image en parallax ;
- header : compaction au scroll, tiroirs plus fluides ; footer : inscription newsletter confirmée avec animation.

Tout respecte `prefers-reduced-motion` et reste lisible sans JavaScript.

## Corrections P1 (V2.1)

- lien d'évitement et `id="main"` sur toutes les pages ;
- bouton « + » des cartes produit visible en permanence sur mobile et écran tactile ;
- panier : « Préparer ma commande par e-mail » ouvre la messagerie avec le détail (pièces, quantités, total) ; newsletter : plus de faux succès, l'inscription part par e-mail (à raccorder à l'outil d'e-mailing) ;
- lisibilité : micro-textes remontés à 60 % d'opacité.

## Corrections P2 (V2.2)

- titrage en Bitter (slab serif robuste, servie par le site via next/font) à la place de Georgia ;
- frais de port et seuil de gratuité affichés sur les fiches (`lib/site-config.ts`, à confirmer) ;
- pages Livraison & retours, Carte cadeau, Mentions légales (avec confidentialité) et CGV ; le footer ne renvoie plus vers l'ancien site.

## Bonus P3 (V2.3)

- éclat d'étincelles (braise et sable) à chaque ajout au panier : cartes produit, fiche, boussole. Désactivé en mouvement réduit.
