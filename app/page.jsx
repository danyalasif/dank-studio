import Link from 'next/link';

const uspCards = [
  {
    title: 'Close connection, not a ticket queue',
    body: 'You work directly with the same small team, no handoffs, no “we’ll pass it to another department.” We stay in the loop from idea to launch.',
    skew: '-2deg',
    bg: 'bg-dank-orange-300',
    text: 'text-navy-black'
  },
  {
    title: 'All in one package',
    body: 'Branding, copy, and web in one place. One brief, one vision, one consistent identity, no juggling multiple agencies or fixing mismatched tone and look.',
    skew: '1.5deg',
    bg: 'bg-navy-black-200',
    text: 'text-off-white-400'
  },
  {
    title: 'Multi‑talented people who actually ship',
    body: 'Nimra (Head of Content, consultant at two top UK agencies), Hifza (UI/UX, graphics, infographics, TikTok & Instagram/LinkedIn, also at two agencies), and Danyal (Senior Fullstack Engineer). We get it done, whatever you throw at us.',
    skew: '-1deg',
    bg: 'bg-muted-yellow-400',
    text: 'text-navy-black'
  }
];

const workCategories = [
  { label: 'Social media & infographics', href: '/work/social-media-infographics', description: 'TikTok, Instagram, LinkedIn carousels and graphics' },
  { label: 'Brand & identity', href: '/work/brand-identity', description: 'Logos, guidelines, and visual systems' },
  { label: 'Web & digital', href: '/work/web-digital', description: 'Sites and digital products' }
];

const serviceItems = [
  { label: 'Branding', href: '/services/branding', tagline: 'Identity, guidelines, and a look that sticks' },
  { label: 'Copywriting', href: '/services/copywriting', tagline: 'Voice and words that actually sound like you' },
  { label: 'Web development', href: '/services/web-development', tagline: 'Sites that work and feel right' }
];

export default function Page() {
  return (
    <div className="flex flex-col">
      <section className="bg-off-white px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
        <div className="w-full">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 lg:items-stretch">
            {uspCards.map((card, i) => (
              <div
                key={i}
                className={`flex flex-1 flex-col justify-between rounded-lg px-6 py-8 shadow-md ${card.bg} ${card.text}`}
                style={{ transform: `rotate(${card.skew})` }}
              >
                <div>
                  <h2 className="font-heading mb-3 text-xl font-semibold sm:text-2xl">{card.title}</h2>
                  <p className="text-sm leading-relaxed opacity-95 sm:text-base">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-8 bg-eggshell px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
        <div className="w-full">
          <h2 className="font-heading mb-2 text-navy-black">Things we’ve worked on</h2>
          <p className="mb-10 text-navy-black-300">Click through to see how we approach each type of project.</p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workCategories.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group block rounded-lg border border-eggshell-200 bg-off-white-200 px-6 py-6 transition hover:border-dank-orange-200 hover:bg-eggshell-200"
                >
                  <span className="font-heading block font-semibold text-navy-black group-hover:text-dank-orange">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm text-navy-black-300">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="services" className="scroll-mt-8 bg-off-white-200 px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
        <div className="w-full">
          <h2 className="font-heading mb-2 text-navy-black">What we do (pick one)</h2>
          <p className="mb-10 text-navy-black-300">Three ways we help, often together.</p>
          <ul className="flex flex-wrap gap-4">
            {serviceItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex flex-col rounded-lg border border-eggshell-200 bg-eggshell px-6 py-5 text-navy-black transition hover:border-dank-orange-200 hover:bg-eggshell-200"
                >
                  <span className="font-heading text-lg font-semibold group-hover:text-dank-orange">{item.label}</span>
                  <span className="mt-1 text-sm text-navy-black-300 group-hover:text-navy-black">{item.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="scroll-mt-8 bg-eggshell-200 px-8 py-20 sm:px-12 sm:py-28 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full">
          <h2 className="font-heading mb-2 text-navy-black">Say hi</h2>
          <p className="mb-6 text-navy-black-300">
            Ready to shape your digital identity? Drop us a line, we’re friendly and don’t do corporate speak.
          </p>
          <Link href="/contact" className="btn btn-lg">
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
