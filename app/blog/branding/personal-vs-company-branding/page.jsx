import Link from 'next/link';
import { ArticleLayout } from 'components/article-layout';

const relatedPosts = [
  { title: 'What is personal branding?', href: '/blog/branding/what-is-personal-branding' },
  { title: 'What is company branding?', href: '/blog/branding/what-is-company-branding' }
];

export const metadata = {
  title: 'Personal vs company branding: the key differences',
  description: "Personal branding and company branding serve different purposes. Here's how they differ and when to use each."
};

export default function Page() {
  return (
    <article>
      <ArticleLayout>
      <Link href="/services/branding" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to Branding
      </Link>
      <h1 className="font-heading mb-6 text-4xl font-semibold text-navy-black">Personal vs company branding: the key differences</h1>
      <p className="mb-8 text-xl leading-relaxed text-navy-black-300">
        Both matter—but they serve different purposes. Here&apos;s when to lean into each and how they can work together.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
        <p>
          <strong>Personal branding</strong> is about you as an individual. It&apos;s your reputation, your expertise, your story. It works best when you are the product—founders, creators, consultants, coaches. People follow you because of who you are.
        </p>
        <p>
          <strong>Company branding</strong> is about your business as a whole. It&apos;s the logo, the visual system, the tone, and the experience that represents your organisation. It works when you have a product or service that exists beyond any single person.
        </p>
        <p>
          The two often overlap. A founder&apos;s personal brand can drive a company&apos;s visibility. A company&apos;s brand can give a founder credibility. The key is knowing which to lead with—and making sure they don&apos;t contradict each other.
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
