import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-eggshell-200 px-8 py-12 sm:px-12 sm:py-16 md:px-16 lg:px-24 xl:px-32">
      <p className="font-heading text-sm font-medium text-navy-black-300">
        © {new Date().getFullYear()} DANK Studio. Laid back, no corporate buzz.
      </p>
    </footer>
  );
}
