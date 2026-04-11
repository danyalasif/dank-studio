import Link from 'next/link';
import { ResourcesCalculator } from '../../../components/resources-calculator';

export const metadata = {
  title: 'Content ROI Calculator',
  description:
    'Interactive calculator: cost per lead, organic vs paid, funnel mapping, content-attributed revenue, and where to find each metric in GA4 and your CRM.'
};

export default function ContentRoiCalculatorPage() {
  return (
    <>
      <div className="bg-[#FBF6ED] px-5 pt-6 sm:px-8">
        <div className="mx-auto max-w-[900px]">
          <Link href="/resources" className="inline-block text-sm text-[#6B5740] underline-offset-4 transition hover:text-[#E8581A]">
            ← All resources
          </Link>
        </div>
      </div>
      <ResourcesCalculator />
    </>
  );
}
