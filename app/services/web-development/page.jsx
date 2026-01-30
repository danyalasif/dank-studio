import Link from 'next/link';

export const metadata = {
  title: 'Web development',
  description: 'Sites that work and feel right. DANK Studio web development services.'
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl pb-20">
      <Link href="/#services" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to services
      </Link>
      <h1 className="font-heading mb-4 text-navy-black">Web development</h1>
      <p className="mb-6 text-lg text-navy-black-300">
        Sites that work and feel right, fast, clear, and aligned with your brand.
      </p>
      <section className="space-y-6 text-navy-black-300">
        <p>
          We build websites and digital products that people actually use. No bloated stacks or over-engineered
          solutions; we pick the right tech for the job so you get something reliable, maintainable, and easy to
          update.
        </p>
        <p>
          From landing pages and portfolios to more complex sites and apps, we handle structure, design
          implementation, and build, and we explain what we’re doing so you’re not left in the dark.
        </p>
        <Link href="/#contact" className="btn mt-8">
          Get in touch
        </Link>
      </section>
    </article>
  );
}
