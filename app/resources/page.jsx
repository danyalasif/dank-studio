import Link from 'next/link';
import { ResourcesSection } from '../../components/resources-section';

export const metadata = {
  title: 'Resources',
  description: 'DANK Studio notes—guides, tips, and process.'
};

export default function ResourcesPage() {
  return (
    <div>
      <div className="bg-off-white px-8 py-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <Link href="/#resources" className="text-sm text-navy-black-300 underline-offset-4 hover:text-dank-orange">
          ← Back to home
        </Link>
      </div>
      <ResourcesSection />
    </div>
  );
}
