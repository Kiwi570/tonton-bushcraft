'use client';

import { useDeferredValue, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products } from '@/lib/site-data';
import { ProductCard } from './product-card';

const filters = ['Tout', 'Firesteels', 'Décapsuleurs', 'Tire-bouchons'] as const;

export function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('Tout');
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query.trim().toLocaleLowerCase('fr'));
  const visibleProducts = products.filter((product) => {
    const matchesCategory = activeFilter === 'Tout' || product.category === activeFilter;
    const searchText = `${product.name} ${product.material} ${product.category}`.toLocaleLowerCase('fr');
    return matchesCategory && searchText.includes(deferredQuery);
  });

  return (
    <>
      <div className="mt-10 flex flex-col gap-4 border-y border-forest/15 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filtrer les produits">
          {filters.map((filter) => <Button key={filter} variant={activeFilter === filter ? 'default' : 'outline'} onClick={() => setActiveFilter(filter)} className={`h-10 shrink-0 rounded-full px-5 transition-[background-color,color,border-color,transform] duration-400 active:scale-95 ${activeFilter === filter ? 'bg-forest text-white hover:bg-forest-light' : 'border-forest/20 bg-transparent text-forest hover:border-forest/50 hover:bg-white/50'}`}>{filter}</Button>)}
        </div>
        <label htmlFor="product-search" className="relative block w-full lg:w-72">
          <span className="sr-only">Rechercher une pièce</span>
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-forest/60" />
          <Input id="product-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nom, matière…" className="h-11 rounded-full border-forest/20 bg-transparent pl-11" />
        </label>
      </div>
      {visibleProducts.length > 0 ? (
        <div key={`${activeFilter}-${deferredQuery}`} className="stagger-in mt-10 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{visibleProducts.map((product, index) => <div key={product.slug} style={{ animationDelay: `${Math.min(index * 70, 560)}ms` }}><ProductCard product={product} index={index} /></div>)}</div>
      ) : (
        <div className="anim-fade mt-10 grid min-h-72 place-items-center border border-dashed border-forest/20 text-center"><div><SlidersHorizontal className="mx-auto size-7 text-forest/60" /><p className="mt-4 font-display text-2xl">Aucune pièce ne correspond encore.</p><button type="button" onClick={() => { setActiveFilter('Tout'); setQuery(''); }} className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-ember">Réinitialiser la recherche</button></div></div>
      )}
    </>
  );
}
