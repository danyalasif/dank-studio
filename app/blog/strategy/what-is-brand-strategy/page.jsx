import Link from 'next/link';
import { ArticleLayout } from 'components/article-layout';

const relatedPosts = [
  { title: 'What is content strategy?', href: '/blog/strategy/what-is-content-strategy' },
  { title: 'How to build a social media strategy', href: '/blog/strategy/how-to-build-social-media-strategy' }
];

export const metadata = {
  title: 'What is a brand strategy?',
  description: "Brand strategy defines who you are, who you're for, and how you differentiate. Learn what it includes."
};

export default function Page() {
  return (
    <article>
      <ArticleLayout>
      <Link href="/services/strategy" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to Strategy
      </Link>
      <h1 className="font-heading mb-6 text-4xl font-semibold text-navy-black">What is a brand strategy?</h1>
      <p className="mb-8 text-xl leading-relaxed text-navy-black-300">
        Brand strategy is the foundation: who you are, who you&apos;re for, and how you differentiate. It comes before the logo, the copy, or the campaign.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
        <p>
          A brand strategy answers the big questions. What do you stand for? Who is your audience? What makes you different from competitors? It&apos;s the thinking that informs everything else—your visual identity, your messaging, your content, and your customer experience.
        </p>
        <p>
          Without a brand strategy, you risk inconsistency. Your logo might say one thing, your copy another, and your social presence something else. A clear strategy aligns it all.
        </p>
        <p>
          Brand strategy often lives in a document: brand purpose, values, positioning, audience personas, and tone of voice. It&apos;s the reference your team (and your agency) uses to make decisions. Get the strategy right, and the rest follows.
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
