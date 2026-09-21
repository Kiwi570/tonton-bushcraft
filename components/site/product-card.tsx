'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { formatPrice, type Product } from '@/lib/site-data';
import { useCart } from './cart-provider';

export function ProductCard({ product, index }: { product: Product; index?: number }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function add() {
    addItem(product.slug);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1300);
  }

  return (
    <article className="group min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#d4ccbd]">
        <Link href={`/boutique/${product.slug}`} aria-label={`Découvrir ${product.name}`} className="absolute inset-0 z-10">
          <Image src={product.images[0]} alt={`${product.name}, ${product.material}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.045]" />
        </Link>
        <span className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-background/92 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] backdrop-blur">{product.badge}</span>
        {typeof index === 'number' ? <span className="pointer-events-none absolute right-4 top-4 z-20 font-display text-xl text-white/90">{String(index + 1).padStart(2, '0')}</span> : null}
        <Button size="icon" aria-label={`Ajouter ${product.name} au panier`} onClick={add} className={`absolute bottom-4 right-4 z-20 size-12 rounded-full shadow-xl transition duration-300 ${added ? 'bg-forest text-white' : 'translate-y-16 bg-background text-forest group-hover:translate-y-0 focus-visible:translate-y-0 hover:bg-ember hover:text-white'}`}>
          {added ? <Check className="size-5" /> : <Plus className="size-5" />}
        </Button>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ember">{product.category}</p><Link href={`/boutique/${product.slug}`} className="mt-1 inline-flex items-center gap-2 font-display text-2xl hover:text-ember">{product.name}<ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" /></Link><p className="mt-1 text-xs text-forest/55">{product.material}</p></div>
        <p className="pt-5 text-sm font-bold">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
