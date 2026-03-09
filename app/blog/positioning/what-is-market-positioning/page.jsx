import Link from 'next/link';
import { ArticleLayout } from 'components/article-layout';

const relatedPosts = [
  { title: 'How to position your personal brand', href: '/blog/positioning/how-to-position-personal-brand' },
  { title: "Positioning vs branding: what's the difference?", href: '/blog/positioning/positioning-vs-branding' }
];

export const metadata = {
  title: 'What is market positioning?',
  description: "Market positioning is how you're perceived relative to competitors. Learn what it means and why it matters."
};

export default function Page() {
  return (
    <article>
      <ArticleLayout>
      <Link href="/services/positioning" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to Positioning
      </Link>
      <h1 className="font-heading mb-6 text-4xl font-semibold text-navy-black">What is market positioning?</h1>
      <p className="mb-8 text-xl leading-relaxed text-navy-black-300">
        Market positioning is how you&apos;re perceived in the minds of your audience—relative to competitors and relative to the problem you solve.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
        <p>
          It&apos;s not what you say you are—it&apos;s what people think when they hear your name. Are you the premium option? The disruptor? The trusted default? Positioning is the space you own in a crowded market.
        </p>
        <p>
          Strong positioning makes you memorable. When someone has a need, you want to be the first (or second) name that comes to mind. That happens when your position is clear, consistent, and differentiated.
        </p>
        <p>
          Positioning informs your messaging, your content, and how you show up. Get it right, and everything you create reinforces the same story.
        </p>
      </div>
      <section className="mt-16 rounded-xl border border-eggshell-200 bg-off-white p-6">
        <h2 className="font-heading mb-4 text-lg font-semibold text-navy-black">Want to learn more about positioning?</h2>
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
      <Link href="/services/positioning" className="btn mt-10">
        Explore our positioning service
      </Link>
      </ArticleLayout>
    </article>
  );
}
