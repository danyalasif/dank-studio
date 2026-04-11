import Link from 'next/link';
import Image from 'next/image';
import { resourceItems } from './resources-data';

export const metadata = {
  title: 'Resources',
  description: 'Tools and guides from DANK Studio — interactive calculators and practical resources for content and growth.'
};

export default function ResourcesPage() {
  return (
    <article>
      <div className="relative h-[200px] w-full overflow-hidden bg-gradient-to-br from-alice-blue via-eggshell to-off-white sm:h-[240px]">
        <Image src="/images/grid-bg.svg" alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-dank-orange">Hub</p>
          <h1 className="font-heading text-4xl font-semibold text-navy-black sm:text-5xl">Resources</h1>
          <p className="max-w-lg text-sm text-navy-black-300 sm:text-base">Tools and guides you can use on your own.</p>
        </div>
      </div>
      <div className="bg-off-white px-8 pt-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <Link href="/" className="text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
          ← Back to home
        </Link>
      </div>
      <section className="bg-off-white px-8 pb-16 pt-4 sm:px-12 md:px-16 md:pb-20 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading sr-only">All resources</h2>
          <ul className="divide-y divide-eggshell-200 border-y border-eggshell-200">
            {resourceItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex flex-col gap-1 py-6 transition first:pt-6 hover:text-dank-orange sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-heading text-xl font-semibold text-navy-black group-hover:text-dank-orange sm:text-2xl">{item.title}</span>
                  <span className="max-w-xl text-sm leading-relaxed text-navy-black-300 sm:text-right sm:text-base">{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
