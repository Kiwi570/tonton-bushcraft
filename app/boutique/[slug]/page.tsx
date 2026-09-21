import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, PackageCheck, ShieldCheck, Sparkles } from 'lucide-react';

import { ProductActions } from '@/components/site/product-actions';
import { ProductCard } from '@/components/site/product-card';
import { siteUrl } from '@/lib/site-config';
import { formatPrice, getProduct, products } from '@/lib/site-data';

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const description = `${product.name} — ${product.intro}`;
  return {
    title: product.name,
    description,
    openGraph: { title: `${product.name} — TonTon BushCraft`, description, images: [{ url: product.images[0], alt: `${product.name}, ${product.material}` }], url: `${siteUrl}/boutique/${product.slug}` },
    twitter: { card: 'summary_large_image', title: `${product.name} — TonTon BushCraft`, description, images: [product.images[0]] },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 lg:px-12"><Link href="/boutique" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-forest/55 hover:text-ember"><ArrowLeft className="size-3.5" /> Retour à la boutique</Link></div>
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-12">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted sm:col-span-2 lg:aspect-[16/11]"><Image src={product.images[0]} alt={`${product.name}, ${product.material}`} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /><span className="absolute left-5 top-5 rounded-full bg-background/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] backdrop-blur">{product.badge}</span></div>
          {product.images.slice(1).map((image) => <div key={image} className="relative aspect-[4/3] overflow-hidden bg-muted sm:col-span-2"><Image src={image} alt={`Détail de ${product.name}`} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div>)}
        </div>
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ember">{product.category}</p><h1 className="mt-3 font-display text-6xl leading-none tracking-[-0.045em] sm:text-7xl">{product.name}</h1><p className="mt-4 text-sm font-semibold text-forest/55">{product.material}</p><p className="mt-7 text-base leading-7 text-forest/65">{product.intro}</p><p className="mt-8 font-display text-4xl">{formatPrice(product.price)}</p>
          <div className="mt-7"><ProductActions slug={product.slug} /></div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-forest/55"><div className="flex items-center gap-2 rounded-xl border border-forest/10 p-3"><PackageCheck className="size-4 text-ember" /> Expédition 48 h</div><div className="flex items-center gap-2 rounded-xl border border-forest/10 p-3"><ShieldCheck className="size-4 text-ember" /> Paiement sécurisé</div></div>
          <div className="mt-10 border-t border-forest/15 pt-8"><p className="eyebrow">Son histoire</p><p className="mt-5 text-sm leading-7 text-forest/58">{product.story}</p><ul className="mt-7 space-y-3">{product.specs.map((spec) => <li key={spec} className="flex items-center gap-3 text-sm"><span className="grid size-5 place-items-center rounded-full bg-sand/60"><Check className="size-3 text-forest" /></span>{spec}</li>)}</ul></div>
          <div className="mt-10 flex items-center gap-3 border-t border-forest/15 pt-7 text-xs text-forest/45"><Sparkles className="size-4 text-ember" /> Photographies de la pièce réellement proposée.</div>
        </aside>
      </section>
      <section className="bg-[#e5dfd2] px-5 py-20 sm:px-8 lg:px-12"><div className="mx-auto max-w-[1344px]"><div className="flex items-end justify-between"><div><p className="eyebrow">Continuer l’exploration</p><h2 className="mt-4 font-display text-5xl">D’autres pièces</h2></div><Link href="/boutique" className="hidden text-sm font-bold sm:block">Toute la boutique</Link></div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></div></section>
    </main>
  );
}
