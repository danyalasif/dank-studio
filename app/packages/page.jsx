import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PackagesClient } from './packages-client';

export const metadata = {
  title: 'Packages & pricing',
  description:
    'Core packages for web presence, content & growth, and full retainers. US/UK pricing by default; add ?pricing=parity for Pakistan parity rates. Add-ons and how we deliver.'
};

export default function PackagesPage() {
  return (
    <article>
      <div className="relative h-[220px] w-full overflow-hidden bg-gradient-to-br from-alice-blue via-eggshell to-off-white sm:h-[280px]">
        <Image src="/images/grid-bg.svg" alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-dank-orange">Pricing</p>
          <h1 className="font-heading text-4xl font-semibold text-navy-black sm:text-5xl">Packages</h1>
          <p className="max-w-xl text-sm text-navy-black-300 sm:text-base">
            Core packages, add-ons, and our delivery process — US/UK rates by default.
          </p>
        </div>
      </div>
      <div className="bg-off-white px-8 pt-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <Link href="/#packages" className="text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
          ← Back to home
        </Link>
      </div>
      <Suspense fallback={<div className="min-h-[320px] bg-off-white" aria-hidden />}>
        <PackagesClient />
      </Suspense>
    </article>
  );
}
