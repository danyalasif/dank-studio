import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-eggshell-200 pt-12 pb-10 sm:pt-16 sm:pb-12">
      <p className="font-heading text-sm font-medium text-navy-black-300">
        © {new Date().getFullYear()} DANK Studio. Laid back, no corporate buzz.
      </p>
    </footer>
  );
}
