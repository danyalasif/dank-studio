import Link from 'next/link';

export const metadata = {
  title: 'Social media & infographics',
  description: 'How we approach TikTok, Instagram, LinkedIn carousels and infographics at DANK Studio.'
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl pb-20">
      <Link href="/#work" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to work
      </Link>
      <h1 className="font-heading mb-4 text-navy-black">Social media & infographics</h1>
      <p className="mb-6 text-navy-black-300">
        We create scroll-stopping visuals and infographics for TikTok, Instagram, and LinkedIn—aligned with your
        brand so everything feels like one voice.
      </p>
      <section className="space-y-6 text-navy-black-300">
        <div>
          <h2 className="font-heading mb-2 text-lg font-semibold text-navy-black">How we do it</h2>
          <p>
            We start with your goals and audience: who’s scrolling, what should they take away, and where it lives
            (TikTok, Reels, carousels, etc.). Then we shape the concept—hook, structure, and visual style—so it
            fits your brand and platform. We design and (where needed) edit; you get files ready to post or a
            short handover so your team can run with it.
          </p>
        </div>
        <div>
          <h2 className="font-heading mb-2 text-lg font-semibold text-navy-black">What you get</h2>
          <p>
            Platform-ready assets (graphics, carousels, short-form video), a consistent look with the rest of your
            brand, and clarity on what to post where. We can also set up simple templates or guidelines so you can
            keep the look going in-house.
          </p>
        </div>
      </section>
    </article>
  );
}
