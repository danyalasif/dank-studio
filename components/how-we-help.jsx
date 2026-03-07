import Link from 'next/link';

const services = [
  {
    title: 'Branding',
    href: '/services/branding',
    description: 'Identity, guidelines, and a look that sticks—logos, colour, type, and tone in one system.'
  },
  {
    title: 'Copywriting',
    href: '/services/copywriting',
    description: 'Voice and words that actually sound like you. Web, social, and campaigns—no corporate fluff.'
  },
  {
    title: 'Web development',
    href: '/services/web-development',
    description: 'Sites and digital products that work. Fast, clear, and aligned with your brand.'
  }
];

export function HowWeHelp() {
  return (
    <section id="services" className="scroll-mt-8 bg-alice-blue px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
          How we help
        </h2>
        <p className="mb-12 text-lg text-navy-black-300">
          One team for branding, copy, and web. Your brief, your voice, one consistent identity.
        </p>
      </div>
      <ul className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {services.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group block rounded-xl border border-alice-blue bg-white p-6 shadow-sm transition hover:border-dank-orange-200 hover:shadow-md"
            >
              <h3 className="font-heading mb-2 text-xl font-semibold text-navy-black group-hover:text-dank-orange">
                {item.title}
              </h3>
              <p className="text-sm text-navy-black-300">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
