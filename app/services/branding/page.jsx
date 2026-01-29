import Link from 'next/link';

export const metadata = {
  title: 'Branding',
  description: 'Identity, guidelines, and a look that sticks. DANK Studio branding services.'
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl pb-20">
      <Link href="/#services" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to services
      </Link>
      <h1 className="font-heading mb-4 text-navy-black">Branding</h1>
      <p className="mb-6 text-lg text-navy-black-300">
        Identity, guidelines, and a look that sticks—so your brand is recognisable and consistent everywhere.
      </p>
      <section className="space-y-6 text-navy-black-300">
        <p>
          We don’t do “brand” as a one-off logo drop. We build a system: logo, colour, type, imagery, and tone
          that work together. That way, whether it’s your website, social, or print, it all feels like one
          thing—and you (or anyone you work with) can use it without making it up as you go.
        </p>
        <p>
          Our process is straightforward: we get clear on who you are and who you’re for, then we explore
          directions, refine, and lock it in with simple guidelines and files you can actually use.
        </p>
        <Link href="/#contact" className="btn mt-8">
          Get in touch
        </Link>
      </section>
    </article>
  );
}
