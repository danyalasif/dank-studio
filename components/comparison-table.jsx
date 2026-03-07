const rows = [
  { label: 'One team for brand, copy and web', typical: 'No', dank: 'Yes' },
  { label: 'Flexible, no lock-in', typical: 'No', dank: 'Yes' },
  { label: 'Human-written and designed', typical: 'Sometimes', dank: 'Yes' },
  { label: 'Built for startups and rebrands', typical: 'No', dank: 'Yes' },
  { label: 'One brief, one voice', typical: 'Sometimes', dank: 'Yes' }
];

function CrossIcon() {
  return (
    <svg className="mx-auto h-5 w-5 text-navy-black-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="mx-auto h-5 w-5 text-muted-yellow" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export function ComparisonTable() {
  return (
    <section className="bg-eggshell px-8 py-20 sm:px-12 sm:py-28 md:px-16 md:py-36 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading mb-2 text-3xl font-semibold text-navy-black sm:text-4xl">
          We&apos;re not a typical agency
        </h2>
        <p className="mb-12 text-lg text-navy-black-300">
          We&apos;re built for brands that want one team and one identity—no handoffs, no corporate buzz.
        </p>
      </div>
      <div className="mx-auto max-w-4xl overflow-x-auto rounded-xl border border-eggshell-200 bg-white shadow-sm">
        <table className="w-full min-w-[320px]">
          <thead>
            <tr className="border-b border-eggshell-200 bg-off-white-200">
              <th className="px-6 py-4 text-left font-heading text-sm font-semibold text-navy-black">
                What you get
              </th>
              <th className="px-6 py-4 text-center font-heading text-sm font-semibold text-navy-black-300">
                Typical agencies
              </th>
              <th className="px-6 py-4 text-center font-heading text-sm font-semibold text-dank-orange">
                DANK Studio
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-eggshell-200 last:border-0">
                <td className="px-6 py-4 text-sm text-navy-black-300">{row.label}</td>
                <td className="px-6 py-4 text-center">
                  {row.typical === 'Yes' ? <CheckIcon /> : <CrossIcon />}
                </td>
                <td className="px-6 py-4 text-center">
                  {row.dank === 'Yes' ? <CheckIcon /> : <CrossIcon />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
