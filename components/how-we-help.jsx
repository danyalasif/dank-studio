import Link from 'next/link';

const services = [
  {
    title: 'Strategy',
    href: '/services/strategy',
    description:
      'The plan before the build. Content strategy, social media management, copywriting, and campaigns—so you execute with clarity.'
  },
  {
    title: 'Branding',
    href: '/services/branding',
    description:
      'Identity, guidelines, and a look that sticks. Logos, colour, type, and tone—plus web development and website management when you need it.'
  },
  {
    title: 'Positioning',
    href: '/services/positioning',
    description:
      'Where you sit in the market and how you sound. Personal brand management, LinkedIn posts, carousels, TikTok video editing—messaging that differentiates.'
  }
];

export function HowWeHelp() {
  return (
    <section id="services" className="scroll-mt-8 bg-alice-blue px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
          ✨ How we help
        </h2>
        <p className="mb-12 text-lg text-navy-black-300">
          One team for strategy, branding, and positioning. Copywriting, web development, and social media—your brief, your voice, one consistent identity.
        </p>
      </div>
      <ul className="grid w-full gap-8 sm:grid-cols-3">
        {services.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group block rounded-xl border border-alice-blue bg-white p-10 shadow-sm transition hover:border-dank-orange-200 hover:shadow-md"
            >
              <h3 className="font-heading mb-3 text-2xl font-semibold text-navy-black group-hover:text-dank-orange">
                {item.title}
              </h3>
              <p className="text-base text-navy-black-300">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
