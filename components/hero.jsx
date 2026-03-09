import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-off-white px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wide text-dank-orange">
          <span className="h-1.5 w-1.5 rounded-full bg-dank-orange" aria-hidden />
          STRATEGY · BRANDING · POSITIONING
          <span className="h-1.5 w-1.5 rounded-full bg-dank-orange" aria-hidden />
        </p>
        <h1 className="font-heading mb-6 text-4xl font-semibold leading-tight tracking-tight text-navy-black sm:text-5xl lg:text-6xl">
          Turn your brand into <span className="italic text-dank-orange">one clear story</span>
        </h1>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-navy-black-300">
          One team for strategy, branding, and positioning. Copywriting, web development, social media—no handoffs, no corporate buzz.
        </p>
        <Link href="/#contact" className="btn btn-lg inline-flex items-center gap-2">
          Get in touch
          <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-eggshell shadow-md">
          <Image
            src="/images/grid-bg.svg"
            alt=""
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-navy-black-300 text-lg">Your hero image or work mockup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
