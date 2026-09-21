'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type CartContextValue = {
  items: Record<string, number>;
  count: number;
  addItem: (slug: string) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});

  const addItem = useCallback((slug: string) => {
    setItems((current) => ({ ...current, [slug]: (current[slug] ?? 0) + 1 }));
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((current) => {
      const next = { ...current };
      delete next[slug];
      return next;
    });
  }, []);

  const clearCart = useCallback(() => setItems({}), []);
  const count = Object.values(items).reduce((total, quantity) => total + quantity, 0);
  const value = useMemo(() => ({ items, count, addItem, removeItem, clearCart }), [items, count, addItem, removeItem, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
