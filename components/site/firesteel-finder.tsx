'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Compass, RotateCcw, ShoppingBag } from 'lucide-react';

import { Sparks } from '@/components/motion/sparks';
import { Button } from '@/components/ui/button';
import { formatPrice, products } from '@/lib/site-data';
import { useCart } from './cart-provider';

const questions = [
  { title: 'Votre terrain favori ?', answers: [{ label: 'Bivouac régulier', value: 'endurance' }, { label: 'Sorties légères', value: 'equilibre' }, { label: 'Objet de collection', value: 'caractere' }] },
  { title: 'Votre prise idéale ?', answers: [{ label: 'Généreuse et stable', value: 'large' }, { label: 'Douce et équilibrée', value: 'smooth' }, { label: 'Brute et texturée', value: 'texture' }] },
  { title: 'La matière qui vous attire ?', answers: [{ label: 'Chêne vert', value: 'oak' }, { label: 'Chêne', value: 'classic' }, { label: 'Bois de cerf', value: 'antler' }] },
] as const;

/** Les trois pièces vers lesquelles la boussole peut pointer : leurs images restent empilées pour un vrai fondu croisé. */
const candidates = products.slice(0, 3);

function chooseRecommendation(answers: string[]) {
  if (answers.includes('antler') || answers.includes('texture') || answers.includes('caractere')) return products[1];
  if (answers.includes('classic') || answers.includes('equilibre') || answers.includes('smooth')) return products[2];
  return products[0];
}

export function FiresteelFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [added, setAdded] = useState(false);
  const [burst, setBurst] = useState(0);
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
    setAdded(false);
  }

  function add() {
    addItem(recommendation.slug);
    setAdded(true);
    setBurst((current) => current + 1);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <section id="boussole" className="overflow-hidden bg-forest text-white">
      <div className="grid min-h-[640px] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative hidden overflow-hidden lg:block">
          {candidates.map((item) => (
            <Image
              key={item.slug}
              src={item.images[0]}
              alt=""
              fill
              sizes="42vw"
              className={`object-cover transition-[opacity,scale] duration-[1400ms] ease-out-expo ${
                item.slug === recommendation.slug ? 'scale-100 opacity-80' : 'scale-105 opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest/80" />
          <div className="absolute bottom-10 left-10 rounded-full border border-white/20 bg-forest/45 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.17em] backdrop-blur">Votre boussole de terrain</div>
        </div>
        <div className="flex items-center px-5 py-16 sm:px-12 lg:px-[8vw]">
          <div className="w-full max-w-xl">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sand">
                {/* L'aiguille tourne à chaque réponse */}
                <Compass className="size-4 transition-[rotate] duration-1000 ease-out-expo" style={{ rotate: `${step * 120}deg` }} /> La boussole TonTon
              </p>
              <span className="text-xs text-white/60">
                <span key={step} className="anim-fade inline-block">{complete ? 'Votre pièce' : `${step + 1} / ${questions.length}`}</span>
              </span>
            </div>
            <div className="mt-5 flex gap-2" aria-hidden="true">{questions.map((_, index) => <span key={index} className={`h-1 flex-1 rounded-full transition-colors duration-700 ${index <= step ? 'bg-ember' : 'bg-white/12'}`} />)}</div>
            {complete ? (
              <div key="result" className="anim-scale mt-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sand">La boussole pointe vers</p>
                <h2 className="mt-3 font-display text-6xl sm:text-7xl">{recommendation.name}</h2>
                <p className="mt-5 text-base leading-7 text-white/60">{recommendation.intro}</p>
                <div className="mt-8 flex items-center justify-between border-y border-white/15 py-5"><span className="text-sm text-white/50">{recommendation.material}</span><strong className="font-display text-2xl">{formatPrice(recommendation.price)}</strong></div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="relative">
                  <Sparks burst={burst} className="left-1/2 top-1/2" />
                  <Button onClick={add} className="h-12 rounded-full bg-ember px-6 text-white transition-[background-color,transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-[#d06442] hover:shadow-[0_16px_45px_rgba(195,83,49,.28)]">
                    {added ? <Check key="done" className="animate-pop" /> : <ShoppingBag key="bag" />}
                    {added ? 'Ajouté à votre sélection' : 'Ajouter à ma sélection'}
                  </Button>
                  </span>
                  <Button render={<Link href={`/boutique/${recommendation.slug}`} />} variant="outline" className="group h-12 rounded-full border-white/20 bg-transparent px-6 text-white transition-[background-color,color,border-color] duration-500 hover:bg-white hover:text-forest">
                    Voir la pièce <ArrowRight className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
                  </Button>
                </div>
                <button type="button" onClick={reset} className="group mt-7 inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-sand"><RotateCcw className="size-3.5 transition-transform duration-700 ease-out-expo group-hover:-rotate-180" /> Recommencer</button>
              </div>
            ) : (
              <div key={`step-${step}`} className="anim-rise mt-12">
                <h2 className="font-display text-4xl leading-tight sm:text-6xl">{questions[step].title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/50">Choisissez instinctivement. Il n’y a pas de mauvaise direction.</p>
                <div className="stagger-in mt-9 space-y-3">
                  {questions[step].answers.map((option, index) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => answer(option.value)}
                      style={{ animationDelay: `${140 + index * 90}ms` }}
                      className="group flex w-full items-center justify-between border border-white/15 px-5 py-5 text-left transition-[border-color,background-color,translate] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-sand/50 hover:bg-white/5 active:scale-[0.99]"
                    >
                      <span className="font-display text-2xl">{option.label}</span>
                      <span className="grid size-9 place-items-center rounded-full border border-white/15 transition-[border-color,background-color] duration-500 group-hover:border-ember group-hover:bg-ember"><ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5" /></span>
                    </button>
                  ))}
                </div>
                {step > 0 ? <button type="button" onClick={previous} className="group mt-6 inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-sand"><ArrowLeft className="size-3.5 transition-transform duration-500 ease-out-expo group-hover:-translate-x-1" /> Revenir</button> : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
