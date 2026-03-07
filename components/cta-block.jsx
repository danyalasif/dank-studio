import Link from 'next/link';

export function CtaBlock() {
  return (
    <section className="bg-off-white-200 px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
          From brief to live in weeks
        </h2>
        <p className="mb-8 text-lg text-navy-black-300">
          Low-fuss. No lock-in. Test the fit—if it works, we keep going. If not, you keep the assets.
        </p>
        <Link href="/#contact" className="btn btn-lg inline-flex items-center gap-2">
          Get in touch
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
