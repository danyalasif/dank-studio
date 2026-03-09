import Link from 'next/link';
import { ArticleLayout } from 'components/article-layout';

const relatedPosts = [
  { title: 'What is personal branding?', href: '/blog/branding/what-is-personal-branding' },
  { title: 'Personal vs company branding: the key differences', href: '/blog/branding/personal-vs-company-branding' }
];

export const metadata = {
  title: 'What is company branding?',
  description: 'Company branding is how your business presents itself. Learn what it includes and why it matters.'
};

export default function Page() {
  return (
    <article>
      <ArticleLayout>
      <Link href="/services/branding" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to Branding
      </Link>
      <h1 className="font-heading mb-6 text-4xl font-semibold text-navy-black">What is company branding?</h1>
      <p className="mb-8 text-xl leading-relaxed text-navy-black-300">
        Company branding is how your business presents itself to the world—from logo and visual identity to tone of voice and customer experience.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
        <p>
          A company brand is more than a logo. It&apos;s a system: logo, colour, typography, imagery, and tone that work together. That system ensures consistency—whether someone sees your website, your social posts, or your packaging, it all feels like one thing.
        </p>
        <p>
          Strong company branding builds recognition and trust. It helps customers choose you over competitors. It gives your team a clear guide for how to represent the business—and it gives you a foundation to grow without losing coherence.
        </p>
        <p>
          We build brands that stick: logos, guidelines, and systems you can actually use. No one-off drops—we create a cohesive identity that scales with you.
        </p>
      </div>
      <section className="mt-16 rounded-xl border border-eggshell-200 bg-off-white p-6">
        <h2 className="font-heading mb-4 text-lg font-semibold text-navy-black">Want to learn more about branding?</h2>
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
      <Link href="/services/branding" className="btn mt-10">
        Explore our branding service
      </Link>
      </ArticleLayout>
    </article>
  );
}
