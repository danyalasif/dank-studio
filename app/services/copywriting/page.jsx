import Link from 'next/link';

export const metadata = {
  title: 'Copywriting',
  description:
    'Voice and words that actually sound like you. Copywriting for web, social, LinkedIn posts, campaigns. DANK Studio copywriting services.'
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl pb-20">
      <Link href="/#services" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to services
      </Link>
      <h1 className="font-heading mb-4 text-navy-black">Copywriting</h1>
      <p className="mb-6 text-lg text-navy-black-300">
        Voice and words that actually sound like you, no corporate fluff, no generic tone.
      </p>
      <section className="space-y-6 text-navy-black-300">
        <p>
          We write for brands that want to sound human: websites, social, emails, and one-off campaigns. We
          match your voice and your audience so the copy does the job, inform, persuade, or entertain, without
          feeling like it was written by a committee.
        </p>
        <p>
          We start with your goals and audience, then draft, refine, and deliver copy that’s ready to use. If
          you already have brand guidelines, we follow them; if not, we can help shape a tone that fits.
        </p>
        <p>
          Copywriting sits within our <Link href="/services/strategy" className="text-dank-orange underline-offset-4 hover:no-underline">strategy</Link> and <Link href="/services/positioning" className="text-dank-orange underline-offset-4 hover:no-underline">positioning</Link> work—we also offer web development, social media management, LinkedIn posts, carousels, and TikTok video editing when the brief calls for it.
        </p>
        <Link href="/#contact" className="btn mt-8">
          Get in touch
        </Link>
      </section>
    </article>
  );
}
