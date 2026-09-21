'use client';

import { useState } from 'react';
import { Check, ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useCart } from './cart-provider';

export function ProductActions({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function add() {
    addItem(slug);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <Button onClick={add} className="h-14 w-full rounded-full bg-ember px-7 text-sm font-bold text-white hover:bg-[#d06442]">
      {added ? <Check className="size-4" /> : <ShoppingBag className="size-4" />}
      {added ? 'Ajouté à votre sélection' : 'Ajouter à ma sélection'}
    </Button>
  );
}
