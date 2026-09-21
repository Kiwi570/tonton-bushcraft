export const workshopImage =
  'https://static.wixstatic.com/media/963843_33f11d2ec9a64dbb847c32557f8a2143~mv2.png/v1/fill/w_2200,h_1500,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/963843_33f11d2ec9a64dbb847c32557f8a2143~mv2.png';

export type Product = {
  slug: string;
  name: string;
  category: 'Firesteels' | 'Décapsuleurs' | 'Tire-bouchons';
  material: string;
  price: number;
  badge: string;
  images: string[];
  intro: string;
  story: string;
  specs: string[];
};

export const products: Product[] = [
  {
    slug: 'oxylus',
    name: 'Oxylus',
    category: 'Firesteels',
    material: 'Chêne vert · Ø 2,5 cm',
    price: 150,
    badge: 'Pièce unique',
    images: [
      'https://static.wixstatic.com/media/963843_5d1105a656344dcd83c98c497b6ac6b8~mv2.jpg/v1/fit/w_1600,h_1200,q_92/file.jpg',
      'https://static.wixstatic.com/media/963843_3d8f188188ae469e82b12cda806cad64~mv2.jpg/v1/fit/w_1600,h_1200,q_92/file.jpg',
    ],
    intro: 'Un firesteel monumental en chêne vert, façonné pour une prise franche et un geste assuré.',
    story: 'Oxylus est né d’une branche de chêne vert au grain nerveux. Sa silhouette généreuse révèle les veines du bois et donne au geste toute sa stabilité.',
    specs: ['Barre ferrocerium haute performance', 'Manche en chêne vert', 'Diamètre du manche : 2,5 cm', 'Pièce façonnée et testée à la main'],
  },
  {
    slug: 'hephaistos',
    name: 'Héphaïstos',
    category: 'Firesteels',
    material: 'Bois de cerf · Ø 2,5 cm',
    price: 150,
    badge: 'Pièce unique',
    images: [
      'https://static.wixstatic.com/media/963843_9a130f39bc2f4e48b6df54624ef9f52f~mv2.jpg/v1/fit/w_1600,h_1200,q_92/file.jpg',
      'https://static.wixstatic.com/media/963843_a5902aedc67d47aeb76c7ebcff604876~mv2.jpg/v1/fit/w_1600,h_1200,q_92/file.jpg',
    ],
    intro: 'La puissance du ferrocerium associée au relief naturel d’un manche en bois de cerf.',
    story: 'Héphaïstos assume une présence brute. Le relief du bois de cerf guide les doigts et transforme chaque allumage en geste précis, même avec des mains froides.',
    specs: ['Barre ferrocerium haute performance', 'Manche en bois de cerf', 'Diamètre du manche : 2,5 cm', 'Cordon de portage renforcé'],
  },
  {
    slug: 'aryen',
    name: 'Aryen',
    category: 'Firesteels',
    material: 'Chêne · Ø 2,5 cm',
    price: 150,
    badge: 'Pièce unique',
    images: [
      'https://static.wixstatic.com/media/963843_0d3b80038bc74952bbb84af6b10df64b~mv2.jpg/v1/fit/w_1600,h_1200,q_92/file.jpg',
      'https://static.wixstatic.com/media/963843_f8008bc523b64201ac675ab78f88b2bd~mv2.jpg/v1/fit/w_1600,h_1200,q_92/file.jpg',
    ],
    intro: 'Une pièce en chêne au profil équilibré, pensée pour le bivouac et les sorties longues.',
    story: 'Aryen privilégie l’équilibre. Le manche en chêne est poli jusqu’à devenir doux sans perdre le contact avec sa matière, pour un compagnon simple et fiable.',
    specs: ['Barre ferrocerium haute performance', 'Manche en chêne', 'Diamètre du manche : 2,5 cm', 'Finition huilée naturelle'],
  },
  {
    slug: 'decap-15',
    name: 'Décap 15',
    category: 'Décapsuleurs',
    material: 'Bois de cerf',
    price: 26,
    badge: 'Nouveau',
    images: [
      'https://static.wixstatic.com/media/963843_646f74ef16274091b7cea20bd3b8af50~mv2.jpg/v1/fit/w_1600,h_1200,q_92/file.jpg',
    ],
    intro: 'Un décapsuleur compact dont le manche conserve le caractère brut du bois de cerf.',
    story: 'Décap 15 fait entrer la matière sauvage autour de la table. Chaque courbe est conservée puis adoucie là où la main vient naturellement se poser.',
    specs: ['Manche en bois de cerf', 'Mécanisme en acier', 'Format compact', 'Pièce unique'],
  },
  {
    slug: 'tb1bf1',
    name: 'TB1BF1',
    category: 'Tire-bouchons',
    material: 'Bois flotté',
    price: 25,
    badge: 'Dernière pièce',
    images: [
      'https://static.wixstatic.com/media/963843_a533b390447e45aebb44f628bbe81e18~mv2.jpg/v1/fit/w_1600,h_1200,q_92/file.jpg',
      'https://static.wixstatic.com/media/963843_b3a5b230fac843a3854418b08992c4be~mv2.jpg/v1/fit/w_1600,h_1200,q_92/file.jpg',
    ],
    intro: 'Un morceau de bois flotté devenu objet de table, sans rien perdre de son histoire.',
    story: 'Ramassé, séché puis façonné, ce bois flotté porte encore les traces de l’eau. La mécanique s’y insère discrètement pour laisser parler sa silhouette.',
    specs: ['Manche en bois flotté', 'Mèche en acier', 'Finition naturelle', 'Pièce unique'],
  },
];

export type JournalEntry = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  intro: string;
  paragraphs: string[];
};

export const journalEntries: JournalEntry[] = [
  {
    slug: 'bien-choisir-son-firesteel',
    title: 'Bien choisir son firesteel',
    excerpt: 'Diamètre, prise en main, essence de bois : les trois repères qui comptent vraiment.',
    category: 'Guide',
    readTime: '6 min',
    image: products[1].images[0],
    intro: 'Le meilleur firesteel n’est pas le plus imposant : c’est celui qui disparaît dans la main au moment d’allumer.',
    paragraphs: [
      'Commencez par le geste. Une prise courte favorise la précision, une poignée généreuse rassure avec des gants ou lorsque la fatigue s’installe.',
      'Le diamètre de ferrocerium joue surtout sur la durée de vie et la quantité de matière projetée. Pour un usage régulier, un modèle épais offre une réserve confortable.',
      'Enfin, choisissez le bois comme on choisit un compagnon. Son grain, son relief et sa densité déterminent le contact que vous aurez avec l’objet pendant des années.',
    ],
  },
  {
    slug: 'allumer-un-feu-sous-la-pluie',
    title: 'Allumer un feu sous la pluie',
    excerpt: 'Préparer, protéger, produire : une méthode simple quand tout est humide.',
    category: 'Terrain',
    readTime: '8 min',
    image: products[2].images[0],
    intro: 'Sous la pluie, le feu commence bien avant la première étincelle : il commence par une préparation méthodique.',
    paragraphs: [
      'Mettez d’abord votre amadou à l’abri. Travaillez sous une veste, un tarp ou la couverture d’un arbre dense, puis préparez toutes les tailles de combustible avant d’allumer.',
      'Cherchez le bois mort encore suspendu et fendez les sections épaisses : leur cœur reste souvent sec. Des copeaux fins exposent rapidement cette matière protégée.',
      'Quand tout est prêt, approchez la barre de l’amadou et tirez le grattoir avec contrôle. Vous évitez ainsi de disperser votre nid et concentrez les étincelles au même point.',
    ],
  },
  {
    slug: 'ce-que-raconte-olivier',
    title: "Ce que raconte l’olivier",
    excerpt: 'Un bois dense, lumineux et singulier, façonné par le temps méditerranéen.',
    category: 'Atelier',
    readTime: '4 min',
    image: products[0].images[0],
    intro: 'L’olivier ne donne jamais un dessin neutre. Sa croissance lente inscrit dans le bois une géographie miniature.',
    paragraphs: [
      'Sa densité permet des formes précises et des finitions très douces. Ses veines sombres apparaissent peu à peu au ponçage, comme si la pièce se révélait en cours de travail.',
      'Cette richesse impose aussi de ralentir. Il faut suivre les changements de direction du fil, sentir les zones plus dures et adapter chaque passage de l’outil.',
      'Une fois huilé, le manche gagne en profondeur sans perdre son toucher naturel. Il se patinera ensuite avec les sorties et deviendra réellement personnel.',
    ],
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getJournalEntry(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}
