import Link from 'next/link';

export const metadata = {
  title: 'Brand & identity',
  description: 'How we approach logos, guidelines, and visual systems at DANK Studio.'
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl pb-20">
      <Link href="/#work" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to work
      </Link>
      <h1 className="font-heading mb-4 text-navy-black">Brand & identity</h1>
      <p className="mb-6 text-navy-black-300">
        We build visual identities that stick: logos, guidelines, and systems so your brand looks and feels
        consistent everywhere.
      </p>
      <section className="space-y-6 text-navy-black-300">
        <div>
          <h2 className="font-heading mb-2 text-lg font-semibold text-navy-black">How we do it</h2>
          <p>
            We start with who you are, who you’re for, and where you show up. From there we develop a direction:
            logo concepts, colour, type, and tone. We refine until it feels right, then capture it in clear
            guidelines so anyone (including you) can use the brand without guesswork.
          </p>
        </div>
        <div>
          <h2 className="font-heading mb-2 text-lg font-semibold text-navy-black">What you get</h2>
          <p>
            A cohesive identity, logo, palette, typography, and usage rules, plus files and a simple guide. No
            corporate buzz; we keep it practical so you can run with it on your own or with other partners.
          </p>
        </div>
      </section>
    </article>
  );
}
