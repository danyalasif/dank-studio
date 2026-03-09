import Link from 'next/link';
import { ArticleLayout } from 'components/article-layout';

const relatedPosts = [
  { title: 'What is content strategy?', href: '/blog/strategy/what-is-content-strategy' },
  { title: 'What is a brand strategy?', href: '/blog/strategy/what-is-brand-strategy' }
];

export const metadata = {
  title: 'How to build a social media strategy',
  description: 'A practical guide to building a social media strategy that fits your goals and audience.'
};

export default function Page() {
  return (
    <article>
      <ArticleLayout>
      <Link href="/services/strategy" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to Strategy
      </Link>
      <h1 className="font-heading mb-6 text-4xl font-semibold text-navy-black">How to build a social media strategy</h1>
      <p className="mb-8 text-xl leading-relaxed text-navy-black-300">
        A social media strategy turns scattered posts into a coherent plan. Here&apos;s how to build one that works.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
        <p>
          Start with your goals. Are you building awareness, driving leads, or nurturing a community? Your goal shapes everything—which platforms you use, what you post, and how you measure success.
        </p>
        <p>
          Next, know your audience. Where do they spend time? LinkedIn, TikTok, Instagram? What do they care about? Your content should answer their questions and reflect their interests.
        </p>
        <p>
          Then define your pillars—the 3–5 themes you&apos;ll consistently cover. This keeps your content focused and makes it easier to plan. Set a cadence you can sustain. Consistency beats sporadic bursts.
        </p>
        <p>
          Finally, measure and adjust. Track what works, drop what doesn&apos;t, and refine. A strategy isn&apos;t set in stone—it evolves with your audience and your goals.
        </p>
      </div>
      <section className="mt-16 rounded-xl border border-eggshell-200 bg-off-white p-6">
        <h2 className="font-heading mb-4 text-lg font-semibold text-navy-black">Want to learn more about strategy?</h2>
        <p className="mb-4 text-sm text-navy-black-300">Read next:</p>
        <ul className="space-y-3">
          {relatedPosts.map((post) => (
            <li key={post.href}>
              <Link href={post.href} className="text-dank-orange underline-offset-4 hover:no-underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Link href="/services/strategy" className="btn mt-10">
        Explore our strategy service
      </Link>
      </ArticleLayout>
    </article>
  );
}
