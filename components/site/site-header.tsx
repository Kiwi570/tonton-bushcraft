'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Marquee } from '@/components/motion/marquee';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { contactEmail } from '@/lib/site-config';
import { formatPrice, products } from '@/lib/site-data';
import { Brand } from './brand';
import { useCart } from './cart-provider';

const navItems = [
  { href: '/boutique', label: 'Boutique' },
  { href: '/atelier', label: "L’atelier" },
  { href: '/journal', label: 'Journal' },
];

const promos = ['Livraison offerte dès 200 €', 'Retrait gratuit à Gilette (06)', 'Pièces uniques, façonnées à la main', 'Expédition sous 48 h'];

export function SiteHeader() {
  const pathname = usePathname();
  const { items, count, removeItem, clearCart } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const cartProducts = Object.entries(items).flatMap(([slug, quantity]) => {
    const product = products.find((item) => item.slug === slug);
    return product ? [{ product, quantity }] : [];
  });
  const total = cartProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const orderSubject = encodeURIComponent(`Commande — ${count} pièce${count > 1 ? 's' : ''} TonTon BushCraft`);
  const orderBody = encodeURIComponent(
    `Bonjour,\n\nJe souhaite commander :\n${cartProducts.map(({ product, quantity }) => `— ${product.name} (${product.material}) × ${quantity} · ${formatPrice(product.price * quantity)}`).join('\n')}\n\nTotal estimé : ${formatPrice(total)}\n\nMerci de me confirmer la disponibilité, les frais de port et le mode de paiement.\n\n`,
  );

  return (
    <>
      <Marquee
        items={promos}
        duration={60}
        className="bg-ember py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#fff8e8] sm:text-[11px]"
      />
      <header
        className={`sticky top-0 z-40 border-b text-white backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled ? 'border-white/14 bg-forest/90 shadow-[0_18px_50px_rgba(11,29,24,0.35)]' : 'border-white/10 bg-forest/95'
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-[height] duration-500 ease-out-expo sm:px-8 lg:px-12 ${
            scrolled ? 'h-16' : 'h-[78px]'
          }`}
        >
          <Brand />
          <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.14em] lg:flex" aria-label="Navigation principale">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return <Link key={item.href} className={`nav-link ${active ? 'is-active' : ''}`} href={item.href}>{item.label}</Link>;
            })}
            <Link className="nav-link" href="/atelier#contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-1.5">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" className="relative size-11 rounded-full text-white hover:bg-white/10 hover:text-white" size="icon" aria-label={`Ouvrir le panier, ${count} article${count === 1 ? '' : 's'}`} />}>
                <ShoppingBag className="size-[18px]" />
                {count > 0 ? <span key={count} className="animate-pop absolute -right-0.5 -top-0.5 grid size-[18px] place-items-center rounded-full bg-ember text-[9px] text-white">{count}</span> : null}
              </SheetTrigger>
              <SheetContent className="border-forest/10 bg-background text-forest duration-500 ease-out-expo sm:max-w-md">
                <SheetHeader className="border-b border-forest/10 px-6 py-6">
                  <SheetTitle className="font-display text-3xl text-forest">Votre sélection</SheetTitle>
                  <SheetDescription>Les pièces choisies pour votre prochaine sortie.</SheetDescription>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  {cartProducts.length === 0 ? (
                    <div className="grid min-h-72 place-items-center text-center">
                      <div><ShoppingBag className="mx-auto size-8 text-forest/35" strokeWidth={1.4} /><p className="mt-5 font-display text-2xl">Le sac est encore léger.</p><p className="mt-2 text-sm text-forest/50">Partez à la rencontre des pièces de l’atelier.</p><SheetClose render={<Link href="/boutique" className="mt-6 inline-flex rounded-full bg-forest px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white" />}>Explorer la boutique</SheetClose></div>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      {cartProducts.map(({ product, quantity }) => (
                        <div key={product.slug} className="anim-rise grid grid-cols-[82px_1fr_auto] gap-4 border-b border-forest/10 pb-5">
                          <div className="relative aspect-square overflow-hidden bg-muted"><Image src={product.images[0]} alt="" fill sizes="82px" className="object-cover" /></div>
                          <div><p className="text-[9px] font-bold uppercase tracking-[0.15em] text-ember">{product.category}</p><Link href={`/boutique/${product.slug}`} className="mt-1 block font-display text-xl">{product.name}</Link><p className="mt-1 text-xs text-forest/50">Qté {quantity}</p></div>
                          <div className="text-right"><p className="text-sm font-bold">{formatPrice(product.price * quantity)}</p><Button variant="ghost" size="icon-xs" aria-label={`Retirer ${product.name}`} onClick={() => removeItem(product.slug)} className="mt-4 rounded-full text-forest/60 hover:text-ember"><Minus /></Button></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {cartProducts.length > 0 ? (
                  <SheetFooter className="border-t border-forest/10 px-6 py-6">
                    <div className="mb-3 flex items-center justify-between"><span className="text-sm text-forest/55">Total estimé</span><strong className="font-display text-2xl">{formatPrice(total)}</strong></div>
                    <Button render={<a href={`mailto:${contactEmail}?subject=${orderSubject}&body=${orderBody}`} aria-label="Préparer ma commande par e-mail" />} className="h-12 rounded-full bg-forest text-white transition-[background-color,transform] duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-forest-light">Préparer ma commande par e-mail</Button>
                    <p className="text-center text-[11px] leading-5 text-forest/60">Votre messagerie s’ouvre avec le détail de la sélection. Le paiement en ligne sera raccordé avant l’ouverture des ventes.</p>
                    <Button variant="ghost" className="text-xs text-forest/50" onClick={clearCart}>Vider la sélection</Button>
                  </SheetFooter>
                ) : null}
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Ouvrir le menu" className="size-11 rounded-full text-white hover:bg-white/10 hover:text-white lg:hidden" />}>
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent className="border-sand/15 bg-forest text-white duration-500 ease-out-expo">
                <SheetHeader className="border-b border-white/10 px-6 py-7">
                  <SheetTitle className="text-white"><Brand /></SheetTitle>
                  <SheetDescription className="text-white/50">Créations artisanales pour l’aventure.</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col px-6 py-8 font-display text-3xl" aria-label="Navigation mobile">
                  <SheetClose render={<Link href="/" className="border-b border-white/10 py-5 transition-colors hover:text-sand" />}>Accueil</SheetClose>
                  {navItems.map((item) => <SheetClose key={item.href} render={<Link href={item.href} className="border-b border-white/10 py-5 transition-colors hover:text-sand" />}>{item.label}</SheetClose>)}
                </nav>
                <div className="mx-6 mt-auto mb-7 rounded-2xl border border-sand/20 bg-white/5 p-5"><Sparkles className="size-5 text-sand" /><p className="mt-3 font-display text-xl">Besoin d’un guide ?</p><SheetClose render={<Link href="/boutique#boussole" className="mt-3 inline-flex text-xs font-bold uppercase tracking-[0.13em] text-sand" />}>Lancer la boussole</SheetClose></div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
