'use client';

import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { linkText: 'Work', href: '/#work' },
  { linkText: 'Services', href: '/#services' },
  { linkText: 'Contact', href: '/#contact' }
];

export function Header() {
  return (
    <nav className="flex flex-wrap items-center gap-4 bg-off-white px-8 py-6 sm:px-12 sm:py-8 md:px-16 md:py-10 lg:px-24 xl:px-32">
      <Link href="/" className="flex items-center">
        <Image src="/images/dk_logo.png" alt="DANK Studio" width={160} height={48} priority className="h-10 w-auto sm:h-12" />
      </Link>
      {navItems?.length > 0 && (
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {navItems.map((item) => (
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
      )}
    </nav>
  );
}
