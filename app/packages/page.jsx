import Link from 'next/link';

const packages = [
  {
    title: 'Starter',
    subtitle: 'Single service',
    description: 'For early-stage brands or one-off projects.',
    price: 'Get a quote',
    popular: false,
    inclusions: [
      {
        title: 'End-of-project report',
        description: 'A clear summary of what we delivered and how to use it.'
      },
      {
        title: 'Clear scope and timeline',
        description: 'No surprises. We lock in the brief before we start.'
      },
      {
        title: 'One service (strategy, branding, or positioning)',
        description: 'Pick one pillar and we deliver it end to end.'
      }
    ]
  },
  {
    title: 'Core',
    subtitle: 'Strategy + branding or branding + positioning',
    description: 'For brands that want two pillars in sync.',
    price: 'Get a quote',
    popular: true,
    inclusions: [
      {
        title: 'End-of-project report',
        description: 'A clear summary of what we delivered and how to use it.'
      },
      {
        title: 'Clear scope and timeline',
        description: 'No surprises. We lock in the brief before we start.'
      },
      {
        title: 'Strategy report',
        description: 'A document that outlines your direction, audience, and content plan.'
      },
      {
        title: '2 articles (depending on strategy)',
        description: 'Ready-to-publish content that matches your voice.'
      },
      {
        title: 'Brand research',
        description: 'Understanding who you are and how you compare to others in your space.'
      },
      {
        title: 'Analytics review',
        description: 'Insight into what\'s working and what to adjust.'
      }
    ]
  },
  {
    title: 'Growth',
    subtitle: 'Full stack',
    description: 'Strategy, branding, and positioning—one team, one identity.',
    price: 'Get a quote',
    popular: false,
    inclusions: [
      {
        title: 'End-of-project report',
        description: 'A clear summary of what we delivered and how to use it.'
      },
      {
        title: 'Clear scope and timeline',
        description: 'No surprises. We lock in the brief before we start.'
      },
      {
        title: 'Strategy report',
        description: 'A document that outlines your direction, audience, and content plan.'
      },
      {
        title: '2–4 articles (depending on strategy)',
        description: 'More content to fuel your channels.'
      },
      {
        title: 'Brand research',
        description: 'Understanding who you are and how you compare to others in your space.'
      },
      {
        title: 'Analytics review',
        description: 'Insight into what\'s working and what to adjust.'
      },
      {
        title: 'Full SEO report',
        description: 'A full audit of your site and content with actionable recommendations.'
      },
      {
        title: 'TikTok research',
        description: 'Platform-specific insights and content angles for short-form video.'
      },
      {
        title: 'Full redesign',
        description: 'Your digital presence reshaped to reflect your best side and help you grow.'
      }
    ]
  }
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export const metadata = {
  title: 'Packages',
  description: 'Pick a package that fits your brand. Starter, Core, or Growth—flexible, no lock-in.'
};

export default function PackagesPage() {
  return (
    <div>
      <div className="bg-off-white px-8 py-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <Link href="/#packages" className="text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
          ← Back to home
        </Link>
      </div>
      <section className="bg-off-white px-8 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wide text-dank-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-dank-orange" aria-hidden />
            OUR PACKAGES
          </p>
          <h1 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
            Pick a <span className="text-dank-orange">package</span> that fits your brand
          </h1>
          <p className="mb-12 text-lg text-navy-black-300">
            Choose based on how much you need. Start with one service or go full stack—we keep it flexible.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex flex-col rounded-xl border p-8 shadow-sm ${
                pkg.popular
                  ? 'border-muted-yellow-200 bg-eggshell'
                  : 'border-eggshell-200 bg-white'
              }`}
            >
              {pkg.popular && (
                <span className="absolute right-6 top-6 rounded bg-muted-yellow-200 px-2 py-0.5 text-xs font-medium text-navy-black">
                  Popular
                </span>
              )}
              <h2 className="font-heading text-2xl font-semibold text-navy-black">{pkg.title}</h2>
              <p className="mt-1 text-sm text-navy-black-300">{pkg.subtitle}</p>
              <p className="mt-4 text-sm text-navy-black-300">{pkg.description}</p>
              <p className="mt-6 font-heading text-2xl font-semibold text-navy-black">{pkg.price}</p>
              <Link href="/#contact" className="btn mt-6 block w-full text-center">
                Get in touch
              </Link>
              <p className="mt-4 text-xs text-navy-black-400">No lock-in. Cancel anytime.</p>
              <div className="mt-8 flex-1 border-t border-eggshell-200 pt-6">
                <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wide text-navy-black-300">
                  What&apos;s included
                </h3>
                <ul className="space-y-5">
                  {pkg.inclusions.map((item) => (
                    <li key={item.title} className="flex flex-col gap-1">
                      <div className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="font-medium text-navy-black">{item.title}</span>
                      </div>
                      <p className="ml-7 text-sm text-navy-black-300">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
