import Link from 'next/link';
import { ArticleLayout } from 'components/article-layout';

const relatedPosts = [
  { title: 'What is market positioning?', href: '/blog/positioning/what-is-market-positioning' },
  { title: 'How to position your personal brand', href: '/blog/positioning/how-to-position-personal-brand' }
];

export const metadata = {
  title: "Positioning vs branding: what's the difference?",
  description: "Positioning and branding are related but different. Here's how they work together."
};

export default function Page() {
  return (
    <article>
      <ArticleLayout>
      <Link href="/services/positioning" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to Positioning
      </Link>
      <h1 className="font-heading mb-6 text-4xl font-semibold text-navy-black">Positioning vs branding: what&apos;s the difference?</h1>
      <p className="mb-8 text-xl leading-relaxed text-navy-black-300">
        Both shape how you&apos;re perceived—but they work at different levels. Here&apos;s the distinction.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
        <p>
          <strong>Positioning</strong> is the strategic layer. It answers: where do you sit in the market? What space do you own? How are you different? It&apos;s the thinking that informs your message and your story. Positioning comes first—it&apos;s the &quot;what&quot; and &quot;why&quot; before the &quot;how&quot;.
        </p>
        <p>
          <strong>Branding</strong> is the expression layer. It&apos;s the logo, the colours, the typography, the tone—how you look and sound. Branding brings your position to life. It makes it visible, tangible, and consistent.
        </p>
        <p>
          You need both. A strong position without strong branding is underpowered—people might get the idea but not remember it. Strong branding without clear positioning is style without substance. Get the position right, then express it through your brand.
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
