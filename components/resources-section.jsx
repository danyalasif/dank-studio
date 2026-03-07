import Link from 'next/link';

const resources = [
  { title: 'Coming soon', href: '/#resources', description: 'Guides and notes from DANK Studio' },
  { title: 'Coming soon', href: '/#resources', description: 'Brand and copy tips' },
  { title: 'Coming soon', href: '/#resources', description: 'Web and process notes' }
];

export function ResourcesSection() {
  return (
    <section id="resources" className="scroll-mt-8 bg-off-white px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
          Resources
        </h2>
        <p className="mb-12 text-lg text-navy-black-300">
          DANK Studio notes—guides, tips, and process. More coming soon.
        </p>
      </div>
      <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-6">
        {resources.map((r) => (
          <li key={r.title + r.description}>
            <Link
              href={r.href}
              className="block rounded-xl border border-eggshell-200 bg-white px-6 py-4 shadow-sm transition hover:border-dank-orange-200 hover:text-dank-orange"
            >
              <span className="font-heading font-semibold text-navy-black">{r.title}</span>
              <span className="mt-1 block text-sm text-navy-black-300">{r.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
