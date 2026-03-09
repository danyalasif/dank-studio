import Link from 'next/link';
import { ArticleLayout } from 'components/article-layout';

const relatedPosts = [
  { title: 'What is company branding?', href: '/blog/branding/what-is-company-branding' },
  { title: 'Personal vs company branding: the key differences', href: '/blog/branding/personal-vs-company-branding' }
];

export const metadata = {
  title: 'What is personal branding?',
  description: 'Personal branding is how you present yourself to the world. Learn what it means and why it matters.'
};

export default function Page() {
  return (
    <article>
      <ArticleLayout>
      <Link href="/services/branding" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to Branding
      </Link>
      <h1 className="font-heading mb-6 text-4xl font-semibold text-navy-black">What is personal branding?</h1>
      <p className="mb-8 text-xl leading-relaxed text-navy-black-300">
        Personal branding is how you present yourself to the world—your reputation, your story, and how people perceive you when you&apos;re not in the room.
      </p>
      <div className="space-y-6 text-lg leading-relaxed text-navy-black-300">
        <p>
          Unlike a company brand, which represents a product or organisation, personal branding is about you as an individual. It&apos;s the sum of your expertise, your values, your voice, and how you show up—online, in meetings, or in content.
        </p>
        <p>
          For founders, creators, and professionals, a strong personal brand builds trust. It helps people know who you are before they meet you. It&apos;s the reason someone follows you on LinkedIn, shares your post, or chooses to work with you over someone else.
        </p>
        <p>
          Personal branding isn&apos;t about being fake or performative. It&apos;s about being clear and consistent—so your audience knows what to expect and why you matter to them.
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
