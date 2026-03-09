import Link from 'next/link';
import { ArticleLayout } from 'components/article-layout';

const relatedPosts = [
  { title: 'What is market positioning?', href: '/blog/positioning/what-is-market-positioning' },
  { title: "Positioning vs branding: what's the difference?", href: '/blog/positioning/positioning-vs-branding' }
];

export const metadata = {
  title: 'How to position your personal brand',
  description: 'A practical guide to positioning your personal brand so you stand out and get remembered.'
};

export default function Page() {
  return (
    <article>
      <ArticleLayout>
      <Link href="/services/positioning" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to Positioning
      </Link>
      <h1 className="font-heading mb-6 text-4xl font-semibold text-navy-black">How to position your personal brand</h1>
      <p className="mb-8 text-xl leading-relaxed text-navy-black-300">
        Positioning your personal brand means owning a clear space in your audience&apos;s mind. Here&apos;s how to do it.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
        <p>
          Start with clarity. What do you want to be known for? One thing, not five. The more focused your position, the easier it is to remember and repeat.
        </p>
        <p>
          Know your audience. Who are you talking to? What do they care about? Your position should speak to their needs, not just your expertise.
        </p>
        <p>
          Differentiate. What do you do that others don&apos;t? It could be your approach, your niche, your story, or your tone. Find the angle that makes you distinct.
        </p>
        <p>
          Be consistent. Your LinkedIn posts, your website, your talks—they should all reinforce the same position. Repetition builds recognition.
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
