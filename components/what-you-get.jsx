'use client';

import { useState } from 'react';

const tabs = [
  { id: 'strategy', label: 'Strategy' },
  { id: 'brand', label: 'Branding' },
  { id: 'positioning', label: 'Positioning' }
];

const benefits = {
  strategy: [
    'Content strategy and social media management',
    'Copywriting for web, social, and campaigns',
    'One brief, one plan',
    'LinkedIn posts, carousels, TikTok editing when needed'
  ],
  brand: [
    'One brief, one vision',
    'Logo, colour, type, and guidelines',
    'Web development and website management',
    'Files and guide you can reuse'
  ],
  positioning: [
    'Personal brand management',
    'Messaging that differentiates',
    'LinkedIn carousels, social media, TikTok video editing',
    'Aligned to your brand'
  ]
};

const mosaicSlots = 6;

function CheckIcon() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 ring-2 ring-emerald-500/40">
      <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
  );
}

export function WhatYouGet() {
  const [activeTab, setActiveTab] = useState('strategy');
  const list = benefits[activeTab];

  return (
    <section className="bg-off-white-200 px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
          What you get
        </h2>
        <p className="mb-12 text-lg text-navy-black-300">
          Everything you need for a cohesive brand—no juggling multiple agencies.
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr,1.2fr] lg:items-start">
        <div>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-6 py-3 text-base font-semibold transition sm:px-8 sm:py-4 sm:text-lg ${
                  activeTab === tab.id
                    ? 'bg-dank-orange text-off-white shadow-lg shadow-dank-orange/25'
                    : 'bg-eggshell text-navy-black-300 hover:bg-eggshell-200 hover:text-navy-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <ul className="space-y-5">
            {list.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-lg text-navy-black-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-rows-4 sm:auto-rows-fr">
          {Array.from({ length: mosaicSlots }).map((_, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl border-2 border-dashed border-navy-black-200/30 bg-eggshell/50 min-h-[100px] sm:min-h-[140px] ${
                i === 0 ? 'sm:row-span-2' : ''
              }`}
            >
              <div className="flex h-full w-full items-center justify-center p-4 text-navy-black-400 text-sm">
                Image / GIF
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
