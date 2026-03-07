const testimonials = [
  {
    quote: 'DANK Studio gave us one clear voice across our brand, site, and social. No more juggling three different agencies.',
    author: 'Placeholder Client',
    role: 'Startup founder'
  },
  {
    quote: 'Finally, a team that gets branding and web in the same room. The result felt cohesive from day one.',
    author: 'Placeholder Client',
    role: 'Marketing lead'
  }
];

export function Testimonials() {
  return (
    <section className="bg-off-white px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading mb-12 text-3xl font-semibold text-navy-black sm:text-4xl">
          What our clients say
        </h2>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
        {testimonials.map((t) => (
          <blockquote
            key={t.quote}
            className="rounded-xl border border-eggshell-200 bg-white p-6 shadow-sm"
          >
            <p className="text-navy-black-300">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4">
              <cite className="not-italic">
                <span className="font-semibold text-navy-black">{t.author}</span>
                <span className="text-navy-black-400"> — {t.role}</span>
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
