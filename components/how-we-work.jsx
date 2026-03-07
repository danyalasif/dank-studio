import Link from 'next/link';

const steps = [
  {
    number: '1',
    title: 'Brief & discovery',
    description: 'We get your goals, audience, and what you already have. One call, one brief.'
  },
  {
    number: '2',
    title: 'Strategy & concepts',
    description: 'We shape the direction—identity, voice, or site structure—and align with you before building.'
  },
  {
    number: '3',
    title: 'Create & ship',
    description: 'We design, write, and build. You review, we refine. Then you launch with everything in place.'
  }
];

export function HowWeWork() {
  return (
    <section id="how-it-works" className="scroll-mt-8 bg-alice-blue px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading mb-4 text-3xl font-semibold text-navy-black sm:text-4xl">
          How we work with you
        </h2>
        <p className="mb-12 text-lg text-navy-black-300">
          Three steps from brief to launch. No surprises, no endless rounds—just clear process and delivery.
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <span className="font-heading inline-flex h-14 w-14 items-center justify-center rounded-full bg-dank-orange text-xl font-semibold text-off-white">
              {step.number}
            </span>
            <h3 className="font-heading mt-4 text-xl font-semibold text-navy-black">{step.title}</h3>
            <p className="mt-2 text-sm text-navy-black-300">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/#contact" className="btn inline-flex items-center gap-2">
          Start with a project
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
