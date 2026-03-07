import Link from 'next/link';

const packages = [
  {
    title: 'Starter',
    subtitle: 'Single service',
    description: 'For early-stage brands or one-off projects.',
    price: 'Get a quote',
    popular: false,
    features: ['One service (brand, copy, or web)', 'Clear scope and timeline']
  },
  {
    title: 'Core',
    subtitle: 'Brand + copy or copy + web',
    description: 'For brands that want two pillars in sync.',
    price: 'Get a quote',
    popular: true,
    features: ['Two services bundled', 'One brief, one voice', 'Flexible timeline']
  },
  {
    title: 'Growth',
    subtitle: 'Full stack',
    description: 'Brand, copy, and web—one team, one identity.',
    price: 'Get a quote',
    popular: false,
    features: ['Branding, copy, and web', 'One team end to end', 'Ongoing support options']
  }
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-muted-yellow" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-8 bg-off-white px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wide text-dank-orange">
          <span className="h-1.5 w-1.5 rounded-full bg-dank-orange" aria-hidden />
          OUR PACKAGES
        </p>
        <h2 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
          Pick a <span className="text-dank-orange">package</span> that fits your brand
        </h2>
        <p className="mb-12 text-lg text-navy-black-300">
          Choose based on how much you need. Start with one service or go full stack—we keep it flexible.
        </p>
        <Link href="/#contact" className="btn btn-lg mb-16 inline-flex items-center gap-2">
          Get a quote
          <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className={`relative rounded-xl border p-6 shadow-sm ${
              pkg.popular
                ? 'border-muted-yellow-200 bg-eggshell'
                : 'border-eggshell-200 bg-white'
            }`}
          >
            {pkg.popular && (
              <span className="absolute right-4 top-4 rounded bg-muted-yellow-200 px-2 py-0.5 text-xs font-medium text-navy-black">
                Popular
              </span>
            )}
            <h3 className="font-heading text-xl font-semibold text-navy-black">{pkg.title}</h3>
            <p className="mt-1 text-sm text-navy-black-300">{pkg.subtitle}</p>
            <p className="mt-4 text-sm text-navy-black-300">{pkg.description}</p>
            <p className="mt-4 font-heading text-2xl font-semibold text-navy-black">{pkg.price}</p>
            <Link
              href="/#contact"
              className="btn mt-6 block w-full text-center"
            >
              Get in touch
            </Link>
            <p className="mt-4 text-xs text-navy-black-400">No lock-in. Cancel anytime.</p>
            <ul className="mt-6 space-y-2 border-t border-eggshell-200 pt-6">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-sm text-navy-black-300">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
