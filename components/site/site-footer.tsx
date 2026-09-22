import Link from 'next/link';
import { Camera, Video } from 'lucide-react';

import { Reveal } from '@/components/motion/reveal';
import { Brand } from './brand';
import { helpLinks, legalLinks } from '@/lib/site-config';
import { NewsletterForm } from './newsletter-form';

export function SiteFooter() {
  return (
    <footer className="bg-forest px-5 pb-8 pt-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1344px]">
        <Reveal stagger={160} y={22} className="mb-20 grid items-end gap-10 border-b border-white/12 pb-16 lg:grid-cols-[1fr_0.7fr]">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sand/65">Nouvelles de l’atelier</p><h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">Les nouvelles pièces partent vite.<br /><em className="text-sand">Ne ratez pas la prochaine.</em></h2></div>
          <NewsletterForm dark />
        </Reveal>
        <Reveal stagger={120} y={18} className="grid gap-14 border-b border-white/12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          <div><Brand /><p className="mt-7 max-w-xs text-sm leading-6 text-white/60">Créations artisanales pour celles et ceux qui préfèrent le dehors, le vrai et le durable.</p><div className="mt-7 flex gap-2"><a href="https://www.instagram.com/invites/contact/?i=14d6yr0d4w3e0&utm_content=ewzneu" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-white/15 text-white/60 transition-[border-color,color,transform] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-sand hover:text-sand"><Camera className="size-4" /></a><a href="https://www.youtube.com/@tontonbushcraft" target="_blank" rel="noreferrer" aria-label="YouTube" className="grid size-10 place-items-center rounded-full border border-white/15 text-white/60 transition-[border-color,color,transform] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-sand hover:text-sand"><Video className="size-4" /></a></div></div>
          <div><p className="footer-title">Explorer</p><div className="footer-links"><Link href="/boutique">Boutique</Link><Link href="/atelier">Savoir-faire</Link><Link href="/journal">Journal</Link></div></div>
          <div><p className="footer-title">Aide</p><div className="footer-links">{helpLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></div>
          <div><p className="footer-title">Une question ?</p><a href="mailto:firesteel@tonton-bushcraft.fr" className="mt-5 block font-display text-2xl text-sand underline decoration-sand/25 underline-offset-8">firesteel@tonton-bushcraft.fr</a><p className="mt-7 text-xs leading-5 text-white/60">Retrait gratuit au village de Gilette<br />06830 · Alpes-Maritimes</p></div>
        </Reveal>
        <div className="flex flex-col gap-3 pt-7 text-[10px] uppercase tracking-[0.13em] text-white/60 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 TonTon BushCraft · Tous droits réservés</p><div className="flex gap-5">{legalLinks.map((item) => <Link key={item.href} href={item.href} className="transition-colors hover:text-sand">{item.label}</Link>)}</div></div>
      </div>
    </footer>
  );
}
