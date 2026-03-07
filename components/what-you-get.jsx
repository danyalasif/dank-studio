'use client';

import { useState } from 'react';

const tabs = [
  { id: 'brand', label: 'Brand' },
  { id: 'copy', label: 'Copy' },
  { id: 'web', label: 'Web' }
];

const benefits = {
  brand: [
    'One brief, one vision',
    'Logo, colour, type, and guidelines',
    'Consistent look everywhere',
    'Files and guide you can reuse'
  ],
  copy: [
    'Voice that sounds like you',
    'Web, social, and campaign copy',
    'Human-written, no AI fluff',
    'Aligned to your brand'
  ],
  web: [
    'Sites that work and load fast',
    'Clear structure and handover',
    'Aligned to your brand',
    'Easy to update'
  ]
};

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-muted-yellow" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export function WhatYouGet() {
  const [activeTab, setActiveTab] = useState('brand');
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
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.id
                  ? 'bg-dank-orange text-off-white'
                  : 'bg-eggshell text-navy-black-300 hover:bg-eggshell-200 hover:text-navy-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <ul className="space-y-3">
          {list.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-navy-black-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
