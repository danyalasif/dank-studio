'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What\'s included?',
    answer: 'Depends on the package. We can do branding only, copy only, web only, or any combination. One brief, one team—we scope it clearly before we start.'
  },
  {
    question: 'How long does it take?',
    answer: 'From a few weeks for a single deliverable (e.g. a logo or a small site) to a couple of months for a full brand + web project. We’ll give you a timeline in the brief.'
  },
  {
    question: 'Who do you work with?',
    answer: 'Startups and established brands that want a cohesive identity—brand, copy, and web in one place. We work best with clients who know their audience and are ready to make decisions.'
  },
  {
    question: 'Can we start small?',
    answer: 'Yes. Start with one service (e.g. a brand refresh or a new site) and add copy or more later. No lock-in—we keep it flexible.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-eggshell px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading mb-12 text-3xl font-semibold text-navy-black sm:text-4xl">
          Frequently asked questions
        </h2>
      </div>
      <div className="mx-auto max-w-2xl space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={faq.question}
            className="rounded-xl border border-eggshell-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-4 text-left font-heading text-lg font-semibold text-navy-black"
            >
              {faq.question}
              <span className="text-dank-orange" aria-hidden>
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            {openIndex === i && (
              <div className="border-t border-eggshell-200 px-6 py-4 text-navy-black-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
