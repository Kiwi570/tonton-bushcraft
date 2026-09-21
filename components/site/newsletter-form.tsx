'use client';

import { type SyntheticEvent, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [subscribed, setSubscribed] = useState(false);

  function subscribe(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  if (subscribed) {
    return <div className={`flex items-center gap-3 rounded-full border px-6 py-5 ${dark ? 'border-white/30' : 'border-forest/20'}`}><Check className="size-5" /><p className="text-sm font-bold">Bienvenue autour du feu !</p></div>;
  }

  return (
    <form onSubmit={subscribe} className="relative">
      <label htmlFor="newsletter-email" className="sr-only">Votre adresse e-mail</label>
      <Input id="newsletter-email" type="email" required placeholder="Votre adresse e-mail" className={`h-16 rounded-full px-6 pr-16 text-base ${dark ? 'border-white/30 bg-white/10 text-white placeholder:text-white/55 focus-visible:border-white focus-visible:ring-white/20' : 'border-forest/20 bg-transparent text-forest placeholder:text-forest/45'}`} />
      <Button type="submit" size="icon" aria-label="S'inscrire" className={`absolute right-2 top-2 size-12 rounded-full ${dark ? 'bg-white text-ember hover:bg-sand' : 'bg-forest text-white hover:bg-ember'}`}><ArrowRight className="size-5" /></Button>
    </form>
  );
}
