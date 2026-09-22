'use client';

import { useState } from 'react';
import { Check, ShoppingBag } from 'lucide-react';

import { Sparks } from '@/components/motion/sparks';
import { Button } from '@/components/ui/button';
import { useCart } from './cart-provider';

export function ProductActions({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [burst, setBurst] = useState(0);

  function add() {
    addItem(slug);
    setAdded(true);
    setBurst((current) => current + 1);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="relative">
    <Sparks burst={burst} className="left-1/2 top-1/2" count={18} />
    <Button onClick={add} className="h-14 w-full rounded-full bg-ember px-7 text-sm font-bold text-white transition-[background-color,transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-[#d06442] hover:shadow-[0_16px_45px_rgba(195,83,49,.28)]">
      {added ? <Check key="check" className="size-4 animate-pop" /> : <ShoppingBag key="bag" className="size-4" />}
      {added ? 'Ajouté à votre sélection' : 'Ajouter à ma sélection'}
    </Button>
    </div>
  );
}
