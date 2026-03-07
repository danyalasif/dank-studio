import Link from 'next/link';

const workItems = [
  { label: 'Social media & infographics', href: '/work/social-media-infographics', description: 'TikTok, Instagram, LinkedIn carousels and graphics' },
  { label: 'Brand & identity', href: '/work/brand-identity', description: 'Logos, guidelines, and visual systems' },
  { label: 'Web & digital', href: '/work/web-digital', description: 'Sites and digital products' }
];

export function OurWork() {
  return (
    <section id="work" className="scroll-mt-8 bg-eggshell-200 px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
          Work we&apos;ve done
        </h2>
        <p className="mb-12 text-lg text-navy-black-300">
          Real projects from brands we&apos;ve worked with—branding, copy, and web.
        </p>
      </div>
      <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
        {workItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group block rounded-xl border border-eggshell-300 bg-white px-6 py-6 transition hover:border-dank-orange-200 hover:shadow-md"
            >
              <span className="font-heading block font-semibold text-navy-black group-hover:text-dank-orange">
                {item.label}
              </span>
              <span className="mt-1 block text-sm text-navy-black-300">{item.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
