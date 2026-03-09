import Link from 'next/link';

const pillars = [
  {
    title: 'Strategy',
    href: '/services/strategy',
    description: 'Content strategy, social media management, copywriting. Guides and deep dives.'
  },
  {
    title: 'Branding',
    href: '/services/branding',
    description: 'Identity, logos, guidelines. What branding means and how we approach it.'
  },
  {
    title: 'Positioning',
    href: '/services/positioning',
    description: 'Market positioning, personal brand, messaging. Stand out and be remembered.'
  }
];

export function ResourcesSection() {
  return (
    <section id="resources" className="scroll-mt-8 bg-off-white px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
          Resources
        </h2>
        <p className="mb-12 text-lg text-navy-black-300">
          Pillar pages and blog posts—guides, tips, and how we think about strategy, branding, and positioning.
        </p>
      </div>
      <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
        {pillars.map((p) => (
          <li key={p.href}>
            <Link
              href={p.href}
              className="group block rounded-2xl border-2 border-eggshell-200 bg-white p-10 shadow-sm transition hover:border-dank-orange-200 hover:shadow-lg hover:text-dank-orange sm:p-12"
            >
              <span className="font-heading block text-2xl font-semibold text-navy-black group-hover:text-dank-orange sm:text-3xl">
                {p.title}
              </span>
              <span className="mt-3 block text-base text-navy-black-300 sm:text-lg">{p.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
