import Link from 'next/link';
import { ArticleLayout } from 'components/article-layout';

const relatedPosts = [
  { title: 'How to build a social media strategy', href: '/blog/strategy/how-to-build-social-media-strategy' },
  { title: 'What is a brand strategy?', href: '/blog/strategy/what-is-brand-strategy' }
];

export const metadata = {
  title: 'What is content strategy?',
  description: 'Content strategy is the plan for what you create, where you publish, and why. Learn what it includes and how it helps.'
};

export default function Page() {
  return (
    <article>
      <ArticleLayout>
      <Link href="/services/strategy" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to Strategy
      </Link>
      <h1 className="font-heading mb-6 text-4xl font-semibold text-navy-black">What is content strategy?</h1>
      <p className="mb-8 text-xl leading-relaxed text-navy-black-300">
        Content strategy is the plan for what you create, where you publish it, and why. It answers the questions before you write a single post.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
        <p>
          A content strategy maps your goals to your audience and your channels. Who are you talking to? What do they need? What content will move them—and where do they spend their time? Without a strategy, you&apos;re guessing. With one, you have a clear direction.
        </p>
        <p>
          It typically includes: content pillars (the themes you cover), tone and voice, cadence (how often you post), and how it all fits together. It can cover your website, social media, email, and campaigns—or just one channel. The scope depends on what you need.
        </p>
        <p>
          A good content strategy is actionable. It gives you a framework to create consistently without reinventing the wheel every time.
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
