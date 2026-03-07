const placeholderBrands = [
  { name: 'Brand one' },
  { name: 'Brand two' },
  { name: 'Brand three' },
  { name: 'Brand four' },
  { name: 'Brand five' }
];

export function PartnerLogos() {
  return (
    <section className="bg-off-white px-8 py-12 sm:px-12 md:px-16 lg:px-24 xl:px-32">
      <p className="mb-8 text-center text-navy-black-300">
        Brands we&apos;ve worked with
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
        {placeholderBrands.map((brand) => (
          <span
            key={brand.name}
            className="font-heading text-lg font-semibold text-navy-black-400"
          >
            {brand.name}
          </span>
        ))}
      </div>
    </section>
  );
}
