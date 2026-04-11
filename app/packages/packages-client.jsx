'use client';

import { useState } from 'react';
import Link from 'next/link';

const intlPackages = [
  {
    badge: { text: 'One-time', className: 'bg-[#E6F1FB] text-[#0C447C]' },
    name: 'Web Presence',
    tagline: 'A high-converting WordPress site and the foundations of organic search.',
    priceMain: '$1,200',
    pricePeriod: 'one-time',
    deliverablesTitle: 'Deliverables',
    items: [
      'WordPress site up to 5 pages',
      '1 conversion-focused landing page',
      'On-page SEO setup (meta, schema, headings)',
      'Technical + SEO audit report',
      '3 branded featured images',
      'Speed & core web vitals optimisation'
    ],
    note: 'Best for new businesses or those replacing an outdated site.',
    who: 'Danyal + Hifza',
    featured: false,
    dotClass: 'bg-[#378ADD]'
  },
  {
    badge: { text: 'Most Popular · Monthly', className: 'bg-[#185FA5] text-[#E6F1FB]' },
    name: 'Content & Growth',
    tagline: 'Steady SEO momentum — articles, visuals, and newsletter nurturing every month.',
    priceMain: '$900',
    pricePeriod: '/ month',
    deliverablesTitle: 'Monthly deliverables',
    items: [
      '3–5 SEO articles (written, formatted & published)',
      'Semrush keyword research — monthly refresh',
      'Branded featured image per article',
      'ConvertKit newsletter setup + 3-email welcome sequence (month 1)',
      'Monthly SEO performance report',
      'Competitor keyword gap analysis (quarterly)'
    ],
    note: 'Best for businesses wanting compounding organic growth over 3–6 months.',
    who: 'Nimra + Hifza',
    featured: true,
    dotClass: 'bg-[#1D9E75]'
  },
  {
    badge: { text: 'Retainer', className: 'bg-[#EEEDFE] text-[#3C3489]' },
    name: 'Scale & Convert',
    tagline: 'Full-team retainer — content, social, web, and conversion optimisation.',
    priceMain: '$1,800',
    pricePeriod: '/ month',
    deliverablesTitle: 'Monthly deliverables',
    items: [
      'Everything in Content & Growth',
      'LinkedIn + Instagram handling (2–3 posts/week)',
      '8 branded social graphics/month',
      'CRO audit + landing page improvements',
      'Technical site audit (bi-monthly)',
      'Brand positioning session (onboarding)'
    ],
    note: 'Best for scaling brands wanting one team across all digital channels.',
    who: 'Nimra + Hifza + Danyal',
    featured: false,
    dotClass: 'bg-[#7F77DD]'
  }
];

const pkPackages = [
  {
    badge: { text: 'One-time', className: 'bg-[#E1F5EE] text-[#085041]' },
    name: 'Web Presence',
    tagline: 'A professional WordPress site with SEO foundations — built for Pakistani businesses.',
    priceMain: 'PKR 335,000',
    pricePeriod: null,
    usdNote: '≈ $1,200 USD',
    deliverablesTitle: 'Deliverables',
    items: [
      'WordPress site up to 5 pages (English or bilingual)',
      '1 conversion-focused landing page',
      'On-page SEO setup',
      'Technical + SEO audit report',
      '3 branded featured images',
      'Speed & core web vitals optimisation'
    ],
    note: 'Best for clinics, consultants, SMEs, and local businesses going digital.',
    who: 'Danyal + Hifza',
    featured: false,
    dotClass: 'bg-[#1D9E75]'
  },
  {
    badge: { text: 'Recommended · Monthly', className: 'bg-[#185FA5] text-[#E6F1FB]' },
    name: 'Content & Growth',
    tagline: 'Monthly content and newsletter growth — optimised for Pakistan SERPs.',
    priceMain: 'PKR 251,000',
    pricePeriod: '/ month',
    usdNote: '≈ $900 USD/month',
    deliverablesTitle: 'Monthly deliverables',
    items: [
      '3–5 SEO articles (English or Urdu/English blend)',
      'Semrush keyword research for Pakistan SERPs',
      'Branded featured image per article',
      'ConvertKit newsletter setup + welcome sequence (month 1)',
      'Monthly SEO performance report',
      'Quarterly competitor gap analysis'
    ],
    note: 'Best for brands building authority and organic traffic within Pakistan.',
    who: 'Nimra + Hifza',
    featured: true,
    dotClass: 'bg-[#1D9E75]'
  },
  {
    badge: { text: 'Retainer', className: 'bg-[#FAEEDA] text-[#633806]' },
    name: 'Growth Partner',
    tagline: 'Full-team retainer — strategy, content, social, and conversion every month.',
    priceMain: 'PKR 502,000',
    pricePeriod: '/ month',
    usdNote: '≈ $1,800 USD/month',
    deliverablesTitle: 'Monthly deliverables',
    items: [
      'Everything in Content & Growth',
      'Instagram + LinkedIn handling (2–3 posts/week)',
      '8 branded social graphics/month',
      'CRO audit + landing page improvements',
      'Technical site audit (bi-monthly)',
      'Brand positioning session (onboarding)'
    ],
    note: 'Best for e-commerce, startups, and growing brands wanting a full team.',
    who: 'Nimra + Hifza + Danyal',
    featured: false,
    dotClass: 'bg-[#BA7517]'
  }
];

const addons = [
  { name: 'Website Audit', price: '$150 · PKR 42,000', desc: 'Full technical + SEO audit with a prioritised fix list, delivered as a PDF report.' },
  { name: 'Semrush Keyword Report', price: '$200 · PKR 56,000', desc: 'Keyword research with search volume, difficulty scores, and a ranked target list for your niche.' },
  { name: 'Single Article', price: '$120 · PKR 34,000', desc: 'One SEO-optimised article — length matched to intent. Written, formatted, and ready to publish.' },
  { name: 'Pillar Article', price: '$250 · PKR 70,000', desc: 'Long-form cornerstone content (2,000–3,500 words) with internal linking strategy and featured image.' },
  { name: 'Infographic', price: '$180 · PKR 50,000', desc: 'Custom branded infographic — data visualisation, how-to, or comparison. PNG + PDF delivered.' },
  { name: 'Landing Page', price: '$350 · PKR 98,000', desc: 'Single high-converting landing page on WordPress — copy, design, and build included.' },
  { name: 'Newsletter Setup', price: '$220 · PKR 62,000', desc: 'ConvertKit setup, branded template, and a 3-email welcome sequence written and configured.' },
  { name: 'Social Graphics Pack', price: '$200 · PKR 56,000', desc: '10 branded graphics for Instagram or LinkedIn — covers, carousels, and reusable post templates.' },
  { name: 'Brand Positioning Session', price: '$150 · PKR 42,000', desc: '1-hour strategy session with Nimra — ICP, messaging framework, and positioning statement.' },
  { name: 'CRO Audit', price: '$180 · PKR 50,000', desc: 'Conversion rate analysis of existing pages with prioritised recommendations for improvement.' }
];

const processSteps = [
  { num: '1', title: 'Discovery call', desc: "30-min call to understand goals, current state, and budget. Nimra leads. We'll also do a quick look at their existing site before the call.", circle: 'bg-[#E6F1FB] text-[#0C447C]' },
  { num: '2', title: 'Audit & proposal', desc: 'We run a Semrush audit and review existing content, then send a tailored proposal within 48 hours — including a suggested package and content direction.', circle: 'bg-[#E1F5EE] text-[#085041]' },
  { num: '3', title: 'Onboarding', desc: 'Brand questionnaire, access handover (WordPress, social, ConvertKit), keyword strategy briefing, and month-1 content plan signed off.', circle: 'bg-[#EEEDFE] text-[#3C3489]' },
  { num: '4', title: 'Execution', desc: 'First deliverables within 7–10 days. Content, design, and dev tasks run in parallel. Client reviews drafts before anything is published.', circle: 'bg-[#FAEEDA] text-[#633806]' },
  { num: '5', title: 'Monthly review', desc: "Performance report at month end. 20-min call to review results and align next month's content plan. Article scope (standard vs pillar) agreed together.", circle: 'bg-[#EAF3DE] text-[#27500A]' }
];

const tabs = [
  { id: 'packages', label: 'Core Packages' },
  { id: 'addons', label: 'Add-ons' },
  { id: 'process', label: 'Delivery Process' }
];

function PackageCard({ pkg }) {
  return (
    <div
      className={`flex flex-col rounded-xl border bg-white p-5 ${
        pkg.featured ? 'border-2 border-[#185FA5]' : 'border-eggshell-200'
      }`}
    >
      <span className={`mb-2 inline-block rounded-md px-2.5 py-0.5 text-[11px] font-medium ${pkg.badge.className}`}>{pkg.badge.text}</span>
      <div className="font-heading text-[17px] font-medium text-navy-black">{pkg.name}</div>
      <p className="mt-0.5 text-[13px] leading-snug text-navy-black-300">{pkg.tagline}</p>
      <div className="mt-2.5 mb-1 flex flex-wrap items-baseline gap-1.5">
        <span className="font-heading text-[22px] font-medium text-navy-black">{pkg.priceMain}</span>
        {pkg.pricePeriod && <span className="text-[13px] text-navy-black-300">{pkg.pricePeriod}</span>}
      </div>
      {pkg.usdNote ? <p className="mb-2 text-[12px] text-navy-black-300">{pkg.usdNote}</p> : null}
      <hr className="my-2.5 border-0 border-t border-eggshell-200" />
      <div className="mb-2 text-[11px] font-medium uppercase tracking-wide text-navy-black-300">{pkg.deliverablesTitle}</div>
      <ul className="space-y-1.5">
        {pkg.items.map((line) => (
          <li key={line} className="flex gap-2 text-[13px] leading-snug text-navy-black">
            <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${pkg.dotClass}`} aria-hidden />
            {line}
          </li>
        ))}
      </ul>
      <div className="mt-auto rounded-md bg-eggshell/80 px-2.5 py-2 pt-2.5 text-[12px] leading-snug text-navy-black-300">
        {pkg.note}
        <div className="mt-1.5 text-[11px] text-navy-black-400">{pkg.who}</div>
      </div>
    </div>
  );
}

export function PackagesClient() {
  const [tab, setTab] = useState('packages');
  const [market, setMarket] = useState('intl');

  return (
    <section className="bg-off-white px-8 py-10 sm:px-12 sm:py-14 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="sr-only">Agency service packages with pricing</h2>

        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Package sections">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`rounded-md border px-[18px] py-2 text-sm transition ${
                tab === t.id
                  ? 'border-navy-black-200 bg-eggshell font-medium text-navy-black'
                  : 'border-eggshell-200 bg-transparent text-navy-black-300 hover:bg-eggshell/60'
              }`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'packages' && (
          <div role="tabpanel" aria-label="Core packages">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="text-[13px] text-navy-black-300">Pricing for:</span>
              <button
                type="button"
                className={`rounded-md border px-3.5 py-1.5 text-[13px] transition ${
                  market === 'intl'
                    ? 'border-navy-black-200 bg-eggshell font-medium text-navy-black'
                    : 'border-eggshell-200 text-navy-black-300 hover:bg-eggshell/60'
                }`}
                onClick={() => setMarket('intl')}
              >
                UK / US
              </button>
              <button
                type="button"
                className={`rounded-md border px-3.5 py-1.5 text-[13px] transition ${
                  market === 'pk'
                    ? 'border-navy-black-200 bg-eggshell font-medium text-navy-black'
                    : 'border-eggshell-200 text-navy-black-300 hover:bg-eggshell/60'
                }`}
                onClick={() => setMarket('pk')}
              >
                Pakistan
              </button>
            </div>

            <div className="mb-5 rounded-lg bg-eggshell/90 px-3.5 py-3 text-[13px] leading-relaxed text-navy-black-300">
              <strong className="font-medium text-navy-black">Content policy:</strong> Article counts are a guide, not a hard quota. If a month calls for a major pillar post
              (2,000+ words), we&apos;ll produce fewer but higher-impact pieces. We&apos;ll always agree the plan with you at the start of each month.
            </div>

            {market === 'intl' && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {intlPackages.map((pkg) => (
                  <PackageCard key={pkg.name} pkg={pkg} />
                ))}
              </div>
            )}
            {market === 'pk' && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pkPackages.map((pkg) => (
                  <PackageCard key={pkg.name} pkg={pkg} />
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 'addons' && (
          <div role="tabpanel" aria-label="Add-ons">
            <p className="mb-5 text-[13px] leading-relaxed text-navy-black-300">
              Standalone services — bolt onto any package or purchase independently. Pakistan pricing is parity (PKR at current rate).
            </p>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {addons.map((a) => (
                <div key={a.name} className="rounded-md bg-eggshell/80 px-3.5 py-3">
                  <div className="text-[13px] font-medium text-navy-black">{a.name}</div>
                  <div className="text-[12px] font-medium text-[#185FA5]">{a.price}</div>
                  <p className="mt-1 text-[12px] leading-snug text-navy-black-300">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'process' && (
          <div role="tabpanel" aria-label="Delivery process">
            <p className="mb-2 text-[13px] leading-relaxed text-navy-black-300">
              How every client engagement flows — from first contact to ongoing monthly delivery.
            </p>
            <div className="divide-y divide-eggshell-200">
              {processSteps.map((step) => (
                <div key={step.num} className="flex gap-4 py-3.5">
                  <div
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[13px] font-medium ${step.circle}`}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div className="font-heading text-sm font-medium text-navy-black">{step.title}</div>
                    <p className="mt-0.5 text-[13px] leading-snug text-navy-black-300">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Link href="/#contact" className="btn mt-10 inline-flex">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
