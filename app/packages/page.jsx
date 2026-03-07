import Link from 'next/link';
import { PackagesSection } from '../../components/packages-section';

export const metadata = {
  title: 'Packages',
  description: 'Pick a package that fits your brand. Starter, Core, or Growth—flexible, no lock-in.'
};

export default function PackagesPage() {
  return (
    <div>
      <div className="bg-off-white px-8 py-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <Link href="/#packages" className="text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
          ← Back to home
        </Link>
      </div>
      <PackagesSection />
    </div>
  );
}
