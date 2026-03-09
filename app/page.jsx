import { Hero } from '../components/hero';
import { PartnerLogos } from '../components/partner-logos';
import { HowWeHelp } from '../components/how-we-help';
import { WhatYouGet } from '../components/what-you-get';
import { PackagesSection } from '../components/packages-section';
import { HowWeWork } from '../components/how-we-work';
import { CtaBlock } from '../components/cta-block';
import { Testimonials } from '../components/testimonials';
import { OurWork } from '../components/our-work';
import { ResourcesSection } from '../components/resources-section';
import { FAQ } from '../components/faq';
import { ContactSection } from '../components/contact-section';

export default function Page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <PartnerLogos />
      <HowWeHelp />
      <WhatYouGet />
      <PackagesSection />
      <HowWeWork />
      <CtaBlock />
      <Testimonials />
      <OurWork />
      <ResourcesSection />
      <FAQ />
      <ContactSection />
    </div>
  );
}
