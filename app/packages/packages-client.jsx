'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const usdPackages = [
  {
    badge: { text: 'One-time', className: 'bg-[#E6F1FB] text-[#0C447C]' },
    name: 'Web Presence',
    tagline: 'A high-converting WordPress site and the foundations of organic search.',
    priceMain: '$1,200',
    pricePeriod: 'one-time',
    deliverablesTitle: 'What you get',
    items: [
      'Multi-page WordPress site — structured for clarity, trust, and conversion',
      'High-impact landing page built to turn visitors into leads',
      'Full on-page SEO — metadata, schema, and clean semantic structure',
      'Technical & SEO audit with a clear, prioritised roadmap',
      'Brand-aligned featured imagery for your key pages',
      'Performance and Core Web Vitals tuned so the site feels fast and credible'
    ],
    note: 'Best for new businesses or those replacing an outdated site.',
    featured: false,
    dotClass: 'bg-[#378ADD]'
  },
  {
    badge: { text: 'Most Popular · Monthly', className: 'bg-[#185FA5] text-[#E6F1FB]' },
    name: 'Content & Growth',
    tagline: 'Steady SEO momentum — articles, visuals, and newsletter nurturing every month.',
    priceMain: '$900',
    pricePeriod: '/ month',
    deliverablesTitle: 'Each month',
    items: [
      'SEO articles — researched, written, polished, and published for you',
      'Living keyword strategy with Semrush-backed insight',
      'Custom visuals tailored to every piece’s intent and channel',
      'Newsletter setup and nurture sequences that warm subscribers over time',
      'Plain-language SEO reporting — what moved, what to do next',
      'Competitive lens on keywords — where rivals show up and where you can win'
    ],
    note: 'Best for brands investing in compounding organic growth.',
    featured: true,
    dotClass: 'bg-[#1D9E75]'
  },
  {
    badge: { text: 'Retainer', className: 'bg-[#EEEDFE] text-[#3C3489]' },
    name: 'Scale & Convert',
    tagline: 'Full-team retainer — content, social, web, and conversion optimisation.',
    priceMain: '$1,800',
    pricePeriod: '/ month',
    deliverablesTitle: 'Each month',
    items: [
      'Everything in Content & Growth — fully included',
      'LinkedIn & Instagram managed with a consistent, on-brand rhythm',
      'Branded social creative — posts and assets that feel unmistakably yours',
      'Conversion audits and landing-page refinement as you scale',
      'Rolling technical reviews so the site stays fast, sound, and crawlable',
      'Brand positioning intensive — who you serve, how you sound, how you show up'
    ],
    note: 'Best for scaling brands wanting one team across all digital channels.',
    featured: false,
    dotClass: 'bg-[#7F77DD]'
  }
];

const parityPackages = [
  {
    badge: { text: 'One-time', className: 'bg-[#E1F5EE] text-[#085041]' },
    name: 'Web Presence',
    tagline: 'A professional WordPress site with SEO foundations — built for Pakistani businesses.',
    priceMain: 'PKR 335,000',
    pricePeriod: null,
    usdNote: '≈ $1,200 USD',
    deliverablesTitle: 'What you get',
    items: [
      'WordPress site tailored for local audiences — English or natural bilingual flow',
      'Conversion-led landing page for your primary offer or service',
      'On-page SEO set up for discoverability in your market',
      'Technical & SEO audit with actionable next steps',
      'Featured imagery aligned with your brand across key pages',
      'Speed and Core Web Vitals optimised for real-world devices'
    ],
    note: 'Best for clinics, consultants, SMEs, and local businesses going digital.',
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
    deliverablesTitle: 'Each month',
    items: [
      'SEO articles in English, Urdu, or a thoughtful blend — end to end',
      'Keyword intelligence tuned to Pakistan search results',
      'Custom visuals for every article — channel-ready and on-brand',
      'Newsletter platform setup and welcome journeys that build trust',
      'SEO performance reporting you can actually use in decisions',
      'Competitor and gap insight so you know where to push next'
    ],
    note: 'Best for brands building authority and organic traffic within Pakistan.',
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
    deliverablesTitle: 'Each month',
    items: [
      'Everything in Content & Growth — fully included',
      'Instagram & LinkedIn managed with steady, credible presence',
      'Branded social creative — templates and posts that scale with you',
      'CRO passes and landing-page improvements as campaigns evolve',
      'Technical health checks on a rhythm that matches your growth',
      'Brand positioning session — narrative, ICP, and how you claim space in-market'
    ],
    note: 'Best for e-commerce, startups, and growing brands wanting a full team.',
    featured: false,
    dotClass: 'bg-[#BA7517]'
  }
];

const addons = [
  { name: 'Website Audit', priceUsd: '$150', pricePk: 'PKR 42,000', desc: 'Full technical and SEO audit with a prioritised fix list, delivered as a clear report.' },
  { name: 'Semrush Keyword Report', priceUsd: '$200', pricePk: 'PKR 56,000', desc: 'Keyword landscape with volume, difficulty, and a ranked target list for your niche.' },
  { name: 'Single Article', priceUsd: '$120', pricePk: 'PKR 34,000', desc: 'SEO-ready article — depth matched to search intent, formatted and publish-ready.' },
  { name: 'Pillar Article', priceUsd: '$250', pricePk: 'PKR 70,000', desc: 'Flagship long-form piece with internal linking strategy and standout featured art.' },
  { name: 'Infographic', priceUsd: '$180', pricePk: 'PKR 50,000', desc: 'Custom branded infographic for explainers, comparisons, or data stories — web- and share-ready.' },
  { name: 'Landing Page', priceUsd: '$350', pricePk: 'PKR 98,000', desc: 'Single focused landing page on WordPress — copy, design, and build in one flow.' },
  { name: 'Newsletter Setup', priceUsd: '$220', pricePk: 'PKR 62,000', desc: 'ConvertKit setup, branded template, and a configured welcome journey.' },
  { name: 'Social Graphics Pack', priceUsd: '$200', pricePk: 'PKR 56,000', desc: 'Branded pack for Instagram or LinkedIn — covers, carousels, and reusable templates.' },
  { name: 'Brand Positioning Session', priceUsd: '$150', pricePk: 'PKR 42,000', desc: 'Strategy deep-dive with Nimra — ICP, messaging spine, and positioning line.' },
  { name: 'CRO Audit', priceUsd: '$180', pricePk: 'PKR 50,000', desc: 'Conversion review of key pages with prioritised recommendations to lift performance.' }
];

const processSteps = [
  { num: '1', title: 'Discovery call', desc: 'We align on goals, constraints, and budget — and take a quick look at where you stand today.', circle: 'bg-[#E6F1FB] text-[#0C447C]' },
  { num: '2', title: 'Audit & proposal', desc: 'Semrush and content review, then a tailored proposal with a recommended package and direction.', circle: 'bg-[#E1F5EE] text-[#085041]' },
  { num: '3', title: 'Onboarding', desc: 'Brand input, access handover, keyword briefing, and a signed-off plan for the first cycle.', circle: 'bg-[#EEEDFE] text-[#3C3489]' },
  { num: '4', title: 'Execution', desc: 'Work kicks off quickly; content, design, and dev run in parallel. You review drafts before anything goes live.', circle: 'bg-[#FAEEDA] text-[#633806]' },
  { num: '5', title: 'Monthly review', desc: 'Performance recap, short alignment call, and the next chapter of the plan — including how deep each piece should go.', circle: 'bg-[#EAF3DE] text-[#27500A]' }
];

const tabs = [
  { id: 'packages', label: 'Core Packages' },
  { id: 'addons', label: 'Add-ons' },
  { id: 'process', label: 'Delivery Process' }
];

function PackageCard({ pkg }) {
  return (
    <div
      className={`flex flex-col rounded-xl border bg-white p-6 sm:p-7 ${
        pkg.featured ? 'border-2 border-[#185FA5]' : 'border-eggshell-200'
      }`}
    >
      <span className={`mb-3 inline-block rounded-md px-3 py-1 text-sm font-medium ${pkg.badge.className}`}>{pkg.badge.text}</span>
      <div className="font-heading text-xl font-semibold text-navy-black sm:text-2xl">{pkg.name}</div>
      <p className="mt-2 text-base leading-relaxed text-navy-black-300 sm:text-lg">{pkg.tagline}</p>
      <div className="mt-4 flex flex-wrap items-baseline gap-2">
        <span className="font-heading text-3xl font-semibold text-navy-black sm:text-4xl">{pkg.priceMain}</span>
        {pkg.pricePeriod && <span className="text-base text-navy-black-300 sm:text-lg">{pkg.pricePeriod}</span>}
      </div>
      {pkg.usdNote ? <p className="mt-2 text-base text-navy-black-300">{pkg.usdNote}</p> : null}
      <hr className="my-5 border-0 border-t border-eggshell-200" />
      <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy-black-300 sm:text-sm">{pkg.deliverablesTitle}</div>
      <ul className="space-y-2.5">
        {pkg.items.map((line) => (
          <li key={line} className="flex gap-3 text-base leading-relaxed text-navy-black sm:text-lg">
            <span className={`mt-2 size-1.5 shrink-0 rounded-full ${pkg.dotClass}`} aria-hidden />
            {line}
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-lg bg-eggshell/80 px-3 py-3 text-base leading-relaxed text-navy-black-300 sm:mt-6 sm:text-lg">{pkg.note}</div>
    </div>
  );
}

export function PackagesClient() {
  const searchParams = useSearchParams();
  const isParity = searchParams.get('pricing') === 'parity';
  const packages = isParity ? parityPackages : usdPackages;

  const [tab, setTab] = useState('packages');

  return (
    <section className="bg-off-white px-8 py-10 sm:px-12 sm:py-14 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="sr-only">Agency service packages with pricing</h2>

        <div className="mb-8 flex flex-wrap gap-3" role="tablist" aria-label="Package sections">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`rounded-md border px-5 py-2.5 text-base font-medium transition sm:px-6 sm:py-3 sm:text-lg ${
                tab === t.id
                  ? 'border-navy-black-200 bg-eggshell text-navy-black'
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
            <div className="mb-8 rounded-xl bg-eggshell/90 px-4 py-4 text-base leading-relaxed text-navy-black-300 sm:px-5 sm:py-5 sm:text-lg">
              <strong className="font-semibold text-navy-black">How we scope content:</strong> Volume flexes with depth and strategy — pillar-style pieces take more room than lighter updates.
              We agree the mix with you at the start of each cycle so expectations stay clear.
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <PackageCard key={`${pkg.name}-${isParity ? 'pk' : 'usd'}`} pkg={pkg} />
              ))}
            </div>
          </div>
        )}

        {tab === 'addons' && (
          <div role="tabpanel" aria-label="Add-ons">
            <p className="mb-6 text-base leading-relaxed text-navy-black-300 sm:text-lg">
              Standalone services — bolt onto any package or purchase independently.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {addons.map((a) => (
                <div key={a.name} className="rounded-lg bg-eggshell/80 px-4 py-4 sm:px-5 sm:py-5">
                  <div className="text-base font-semibold text-navy-black sm:text-lg">{a.name}</div>
                  <div className="mt-1 text-base font-semibold text-[#185FA5] sm:text-lg">{isParity ? a.pricePk : a.priceUsd}</div>
                  <p className="mt-2 text-base leading-relaxed text-navy-black-300">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'process' && (
          <div role="tabpanel" aria-label="Delivery process">
            <p className="mb-4 text-base leading-relaxed text-navy-black-300 sm:text-lg">
              How every client engagement flows — from first contact to ongoing delivery.
            </p>
            <div className="divide-y divide-eggshell-200">
              {processSteps.map((step) => (
                <div key={step.num} className="flex gap-5 py-5 sm:gap-6 sm:py-6">
                  <div
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full text-base font-semibold sm:size-10 sm:text-lg ${step.circle}`}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div className="font-heading text-base font-semibold text-navy-black sm:text-lg">{step.title}</div>
                    <p className="mt-1 text-base leading-relaxed text-navy-black-300 sm:text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Link href="/#contact" className="btn btn-lg mt-12 inline-flex">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
