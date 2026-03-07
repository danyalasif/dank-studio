import Link from 'next/link';

const footerLinks = [
  { linkText: 'How it works', href: '/#how-it-works' },
  { linkText: 'Case studies', href: '/#work' },
  { linkText: 'Packages', href: '/packages' },
  { linkText: 'Services', href: '/#services' },
  { linkText: 'Resources', href: '/resources' },
  { linkText: 'Contact', href: '/#contact' }
];

export function Footer() {
  return (
    <footer className="bg-alice-blue px-8 py-12 sm:px-12 sm:py-16 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {footerLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-navy-black-300 underline-offset-4 transition hover:text-dank-orange hover:underline"
              >
                {item.linkText}
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-heading text-sm font-medium text-navy-black-300">
          © {new Date().getFullYear()} DANK Studio
        </p>
      </div>
    </footer>
  );
}
