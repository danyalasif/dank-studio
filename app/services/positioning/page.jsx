import Link from 'next/link';
import Image from 'next/image';
import { ArticleLayout } from 'components/article-layout';

const processSteps = [
  { num: '1', title: 'Position audit', desc: 'Where do you sit today? How are you perceived vs how you want to be?' },
  { num: '2', title: 'Messaging framework', desc: 'Core message, proof points, and how you differentiate.' },
  { num: '3', title: 'Voice & tone', desc: 'How you sound and show up—consistent across channels.' },
  { num: '4', title: 'Content & execution', desc: 'LinkedIn posts, carousels, TikTok—messaging that lands.' }
];

const blogPosts = [
  { title: 'What is market positioning?', href: '/blog/positioning/what-is-market-positioning' },
  { title: 'How to position your personal brand', href: '/blog/positioning/how-to-position-personal-brand' },
  { title: "Positioning vs branding: what's the difference?", href: '/blog/positioning/positioning-vs-branding' }
];

export const metadata = {
  title: 'Positioning',
  description:
    'Personal brand management, LinkedIn posts, carousels, TikTok video editing. DANK Studio positioning and messaging services.'
};

export default function Page() {
  return (
    <article>
      <div className="relative h-[280px] w-full overflow-hidden bg-gradient-to-br from-alice-blue via-eggshell to-off-white sm:h-[360px]">
        <Image src="/images/grid-bg.svg" alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading text-4xl font-semibold text-navy-black sm:text-5xl">Positioning</h1>
        </div>
      </div>
      <ArticleLayout
        sidebar={
          <div className="rounded-xl border border-eggshell-200 bg-off-white p-6 shadow-sm">
            <h3 className="font-heading mb-4 text-lg font-semibold text-navy-black">Related articles</h3>
            <ul className="space-y-3">
              {blogPosts.map((post) => (
                <li key={post.href}>
                  <Link
                    href={post.href}
                    className="block rounded-lg border border-eggshell-200 bg-white px-4 py-3 text-sm transition hover:border-dank-orange-200 hover:text-dank-orange"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/#contact" className="btn mt-6 block w-full text-center text-sm">
              Get a quote
            </Link>
          </div>
        }
      >
            <Link href="/#services" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
              ← Back to services
            </Link>
            <p className="mb-16 text-xl leading-relaxed text-navy-black-300">
              Where you sit in the market and how you sound. Personal brand management, LinkedIn posts, carousels, TikTok video editing—messaging that differentiates.
            </p>
            <section className="space-y-16">
              <div>
                <h2 className="font-heading mb-6 text-2xl font-semibold text-navy-black">What positioning means to us</h2>
                <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
                  <p>
                    Positioning is how you&apos;re perceived. It&apos;s the story you tell, the space you own, and why someone should care. We help you own it: the <span className="rounded bg-dank-orange/10 px-1.5 py-0.5 font-medium text-navy-black">core message, the proof points, and the voice</span> that makes you memorable.
                  </p>
                  <p>
                    Whether you&apos;re a founder, a creator, or a company—positioning is what makes you stand out. It&apos;s not what you say you are; it&apos;s what people think when they hear your name.
                  </p>
                  <div className="rounded-xl border-l-4 border-dank-orange bg-alice-blue/50 p-6">
                    <p className="text-navy-black-300">
                      Strong positioning makes you memorable. When someone has a need, you want to be the first name that comes to mind. That happens when your position is clear, consistent, and differentiated.
                    </p>
                  </div>
                  <p>
                    We build messaging frameworks that work across channels—LinkedIn, TikTok, your website, your sales deck. One story, one voice, everywhere you show up.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-heading mb-6 text-2xl font-semibold text-navy-black">How we work with you</h2>
                <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
                  <p>
                    We start with where you are and where you want to be. We build a messaging framework—what to say, how to say it, and how it differs from everyone else. Then we execute: LinkedIn posts, carousels, TikTok content, social media management.
                  </p>
                  <p>
                    Copywriting and web development feed into one clear position. Your site, your social, your sales materials—they all tell the same story. We scope it to fit your brief.
                  </p>
                  <p>
                    <span className="font-medium text-dank-orange">We scope it to fit.</span> Some clients need a full messaging refresh plus ongoing content. Others need the framework and a handover. We adapt.
                  </p>
                </div>
              </div>
            </section>
            <section className="mt-20">
              <h2 className="font-heading mb-8 text-2xl font-semibold text-navy-black">Our process</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step) => (
                  <div key={step.num} className="rounded-xl border border-eggshell-200 bg-white p-6 shadow-sm">
                    <span className="font-heading inline-flex h-12 w-12 items-center justify-center rounded-full bg-dank-orange text-lg font-semibold text-off-white">
                      {step.num}
                    </span>
                    <h3 className="font-heading mt-4 text-lg font-semibold text-navy-black">{step.title}</h3>
                    <p className="mt-2 text-sm text-navy-black-300">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            <Link href="/#contact" className="btn mt-16">
              Get in touch
            </Link>
      </ArticleLayout>
    </article>
  );
}
