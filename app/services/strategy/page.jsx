import Link from 'next/link';
import Image from 'next/image';
import { ArticleLayout } from 'components/article-layout';

const processSteps = [
  { num: '1', title: 'Brief & goals', desc: 'We understand your audience, channels, and what success looks like.' },
  { num: '2', title: 'Audit & research', desc: "We review what you have and what's working (or not)." },
  { num: '3', title: 'Strategy document', desc: 'A clear plan: what to say, where, and how it fits together.' },
  { num: '4', title: 'Execute & iterate', desc: 'We deliver—copy, content, campaigns—and refine as we go.' }
];

const blogPosts = [
  { title: 'What is content strategy?', href: '/blog/strategy/what-is-content-strategy' },
  { title: 'How to build a social media strategy', href: '/blog/strategy/how-to-build-social-media-strategy' },
  { title: 'What is a brand strategy?', href: '/blog/strategy/what-is-brand-strategy' }
];

export const metadata = {
  title: 'Strategy',
  description:
    'Content strategy, social media management, copywriting, and campaigns. DANK Studio strategy services for startups and brands.'
};

export default function Page() {
  return (
    <article>
      <div className="relative h-[280px] w-full overflow-hidden bg-gradient-to-br from-alice-blue via-eggshell to-off-white sm:h-[360px]">
        <Image src="/images/grid-bg.svg" alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading text-4xl font-semibold text-navy-black sm:text-5xl">Strategy</h1>
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
              The plan before the build. We help you figure out where you&apos;re going—content strategy, social media management, copywriting, and campaigns—so you can execute with clarity.
            </p>
            <section className="space-y-16">
              <div>
                <h2 className="font-heading mb-6 text-2xl font-semibold text-navy-black">What strategy means to us</h2>
                <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
                  <p>
                    Strategy is the map before the journey. It answers: <span className="rounded bg-dank-orange/10 px-1.5 py-0.5 font-medium text-navy-black">who are you talking to</span>, what do they need, and what should you say? We don&apos;t hand you a generic playbook.
                  </p>
                  <p>
                    We build a plan that fits your goals, your audience, and your channels—whether that&apos;s LinkedIn, TikTok, your website, or all of the above. Every brand is different, and your strategy should reflect that.
                  </p>
                  <div className="rounded-xl border-l-4 border-dank-orange bg-alice-blue/50 p-6">
                    <p className="text-navy-black-300">
                      A good strategy gives you clarity. You stop guessing what to post, when to post, and whether it&apos;s working. You have a framework—and you can execute with confidence.
                    </p>
                  </div>
                  <p>
                    From content pillars to tone of voice, from cadence to channel mix—we map it out so you&apos;re not flying blind. The result: a document you can follow, share with your team, or hand to us to execute.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-heading mb-6 text-2xl font-semibold text-navy-black">How we work with you</h2>
                <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
                  <p>
                    We start with a brief and an audit. What do you have? What&apos;s working? What&apos;s not? We dig into your audience, your goals, and your current content—so we&apos;re not starting from assumptions.
                  </p>
                  <p>
                    Then we shape a strategy document: content pillars, tone, cadence, and how it all connects. This becomes your north star. You can run with it yourself, or we can execute—copywriting, social media management, LinkedIn posts, carousels, TikTok video editing.
                  </p>
                  <p>
                    <span className="font-medium text-dank-orange">We scope it to fit.</span> Some clients need a full strategy plus execution. Others need the plan and a handover. We adapt to what you need.
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
