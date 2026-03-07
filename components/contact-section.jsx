import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-8 bg-off-white-200 px-8 py-20 sm:px-12 sm:py-28 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
          Say hi
        </h2>
        <p className="mb-8 text-lg text-navy-black-300">
          Ready to shape your digital identity? Drop us a line—we&apos;re friendly and don&apos;t do corporate speak.
        </p>
        <Link href="/contact" className="btn btn-lg inline-flex items-center gap-2">
          Get in touch
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
