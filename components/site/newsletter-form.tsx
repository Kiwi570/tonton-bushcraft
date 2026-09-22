'use client';

import { type SyntheticEvent, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { contactEmail } from '@/lib/site-config';

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [subscribed, setSubscribed] = useState(false);

  /** Maquette : prépare un e-mail d’inscription plutôt qu’un faux succès (à raccorder à l’outil d’e-mailing). */
  function subscribe(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = new FormData(event.currentTarget).get('email');
    const email = typeof value === 'string' ? value : '';
    const subject = encodeURIComponent('Inscription aux nouvelles de l’atelier');
    const body = encodeURIComponent(`Bonjour,\n\nJe souhaite recevoir les nouvelles de l’atelier à l’adresse : ${email}\n\nMerci !`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubscribed(true);
  }

  if (subscribed) {
    return <div className={`anim-scale flex items-center gap-3 rounded-full border px-6 py-5 ${dark ? 'border-white/30' : 'border-forest/20'}`}><Check className="size-5 animate-pop" /><p className="text-sm font-bold">Merci ! Votre messagerie s’ouvre pour confirmer l’inscription.</p></div>;
  }

  return (
    <form onSubmit={subscribe} className="relative">
      <label htmlFor="newsletter-email" className="sr-only">Votre adresse e-mail</label>
      <Input id="newsletter-email" name="email" type="email" required placeholder="Votre adresse e-mail" className={`h-16 rounded-full px-6 pr-16 text-base ${dark ? 'border-white/30 bg-white/10 text-white placeholder:text-white/55 focus-visible:border-white focus-visible:ring-white/20' : 'border-forest/20 bg-transparent text-forest placeholder:text-forest/60'}`} />
      <Button type="submit" size="icon" aria-label="S'inscrire" className={`group absolute right-2 top-2 size-12 rounded-full transition-[background-color,transform] duration-500 ease-out-expo hover:scale-105 ${dark ? 'bg-white text-ember hover:bg-sand' : 'bg-forest text-white hover:bg-ember'}`}><ArrowRight className="size-5 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5" /></Button>
    </form>
  );
}
