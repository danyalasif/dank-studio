import Link from 'next/link';

export const metadata = {
  title: 'Web & digital',
  description: 'How we approach websites and digital products at DANK Studio.'
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl pb-20">
      <Link href="/#work" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to work
      </Link>
      <h1 className="font-heading mb-4 text-navy-black">Web & digital</h1>
      <p className="mb-6 text-navy-black-300">
        We design and build sites and digital products that work: fast, accessible, and aligned with your brand.
      </p>
      <section className="space-y-6 text-navy-black-300">
        <div>
          <h2 className="font-heading mb-2 text-lg font-semibold text-navy-black">How we do it</h2>
          <p>
            We define what the site or product needs to do (for you and your users), then map structure and
            content. Design follows your existing brand where possible so the experience feels consistent. We
            build with modern, maintainable tech so it’s reliable and easy to update.
          </p>
        </div>
        <div>
          <h2 className="font-heading mb-2 text-lg font-semibold text-navy-black">What you get</h2>
          <p>
            A live site or product that’s yours to own and update, with clear documentation and handover. We
            keep scope and jargon in check so you’re not left with a black box.
          </p>
        </div>
      </section>
    </article>
  );
}
