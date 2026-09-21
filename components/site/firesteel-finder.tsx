'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Compass, RotateCcw, ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { formatPrice, products } from '@/lib/site-data';
import { useCart } from './cart-provider';

const questions = [
  { title: 'Votre terrain favori ?', answers: [{ label: 'Bivouac régulier', value: 'endurance' }, { label: 'Sorties légères', value: 'equilibre' }, { label: 'Objet de collection', value: 'caractere' }] },
  { title: 'Votre prise idéale ?', answers: [{ label: 'Généreuse et stable', value: 'large' }, { label: 'Douce et équilibrée', value: 'smooth' }, { label: 'Brute et texturée', value: 'texture' }] },
  { title: 'La matière qui vous attire ?', answers: [{ label: 'Chêne vert', value: 'oak' }, { label: 'Chêne', value: 'classic' }, { label: 'Bois de cerf', value: 'antler' }] },
] as const;

function chooseRecommendation(answers: string[]) {
  if (answers.includes('antler') || answers.includes('texture') || answers.includes('caractere')) return products[1];
  if (answers.includes('classic') || answers.includes('equilibre') || answers.includes('smooth')) return products[2];
  return products[0];
}

export function FiresteelFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const { addItem } = useCart();
  const complete = step >= questions.length;
  const recommendation = chooseRecommendation(answers);

  function answer(value: string) {
    setAnswers((current) => [...current, value]);
    setStep((current) => current + 1);
  }

  function previous() {
    setAnswers((current) => current.slice(0, -1));
    setStep((current) => Math.max(0, current - 1));
  }

  function reset() {
    setAnswers([]);
    setStep(0);
  }

  return (
    <section id="boussole" className="overflow-hidden bg-forest text-white">
      <div className="grid min-h-[640px] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative hidden overflow-hidden lg:block">
          <Image src={recommendation.images[0]} alt="" fill sizes="42vw" className="object-cover opacity-80 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest/80" />
          <div className="absolute bottom-10 left-10 rounded-full border border-white/20 bg-forest/45 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.17em] backdrop-blur">Votre boussole de terrain</div>
        </div>
        <div className="flex items-center px-5 py-16 sm:px-12 lg:px-[8vw]">
          <div className="w-full max-w-xl">
            <div className="flex items-center justify-between"><p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sand"><Compass className="size-4" /> La boussole TonTon</p><span className="text-xs text-white/35">{complete ? 'Votre pièce' : `${step + 1} / ${questions.length}`}</span></div>
            <div className="mt-5 flex gap-2" aria-hidden="true">{questions.map((_, index) => <span key={index} className={`h-1 flex-1 rounded-full transition-colors ${index <= step ? 'bg-ember' : 'bg-white/12'}`} />)}</div>
            {complete ? (
              <div className="mt-12 animate-rise">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sand">La boussole pointe vers</p>
                <h2 className="mt-3 font-display text-6xl sm:text-7xl">{recommendation.name}</h2>
                <p className="mt-5 text-base leading-7 text-white/60">{recommendation.intro}</p>
                <div className="mt-8 flex items-center justify-between border-y border-white/15 py-5"><span className="text-sm text-white/50">{recommendation.material}</span><strong className="font-display text-2xl">{formatPrice(recommendation.price)}</strong></div>
                <div className="mt-8 flex flex-wrap gap-3"><Button onClick={() => addItem(recommendation.slug)} className="h-12 rounded-full bg-ember px-6 text-white hover:bg-[#d06442]"><ShoppingBag /> Ajouter à ma sélection</Button><Button render={<Link href={`/boutique/${recommendation.slug}`} />} variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white hover:text-forest">Voir la pièce <ArrowRight /></Button></div>
                <button type="button" onClick={reset} className="mt-7 inline-flex items-center gap-2 text-xs text-white/45 hover:text-sand"><RotateCcw className="size-3.5" /> Recommencer</button>
              </div>
            ) : (
              <div className="mt-12">
                <h2 className="font-display text-4xl leading-tight sm:text-6xl">{questions[step].title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/50">Choisissez instinctivement. Il n’y a pas de mauvaise direction.</p>
                <div className="mt-9 space-y-3">{questions[step].answers.map((option) => <button key={option.value} type="button" onClick={() => answer(option.value)} className="group flex w-full items-center justify-between border border-white/15 px-5 py-5 text-left transition hover:border-sand/50 hover:bg-white/5"><span className="font-display text-2xl">{option.label}</span><span className="grid size-9 place-items-center rounded-full border border-white/15 transition group-hover:border-ember group-hover:bg-ember"><ArrowRight className="size-4" /></span></button>)}</div>
                {step > 0 ? <button type="button" onClick={previous} className="mt-6 inline-flex items-center gap-2 text-xs text-white/45 hover:text-sand"><ArrowLeft className="size-3.5" /> Revenir</button> : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
