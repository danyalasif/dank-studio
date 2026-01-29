import Link from 'next/link';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with DANK Studio. We’re friendly and don’t do corporate speak.'
};

export default function Page() {
  return (
    <article className="mx-auto max-w-xl pb-20">
      <Link href="/#contact" className="mb-8 inline-block text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
        ← Back to home
      </Link>
      <h1 className="font-heading mb-2 text-navy-black">Say hi</h1>
      <p className="mb-8 text-navy-black-300">
        Ready to shape your digital identity? Drop us a line—we’re laid back and here to help.
      </p>
      <p className="text-navy-black-300">
        For now, reach out via{' '}
        <a
          href="mailto:hello@dankstudio.com"
          className="text-dank-orange underline underline-offset-4 hover:text-dank-orange-200"
        >
          hello@dankstudio.com
        </a>{' '}
        (or your preferred email). We’ll get back to you without the corporate buzz.
      </p>
      <Link href="/" className="btn mt-10">
        Back to home
      </Link>
    </article>
  );
}
