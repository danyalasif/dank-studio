'use client';

import { useMemo, useState } from 'react';

const linkedinUrl = 'https://www.linkedin.com/in/inimrakhalid/';
const tabs = ['cpl', 'organic', 'funnel', 'revenue', 'guide'];
const tabLabels = {
  cpl: 'Cost Per Lead',
  organic: 'Organic vs Paid',
  funnel: 'Funnel Map',
  revenue: 'Revenue',
  guide: 'Where to find this data'
};

const guideItems = [
  ['GA4', 'Monthly organic sessions', 'Google Analytics 4 -> Reports -> Acquisition -> Traffic acquisition', 'Use Organic Search sessions, or Search Console clicks as a proxy.'],
  ['CRM', 'Leads from organic content', 'HubSpot / Salesforce / Pipedrive -> Contacts filtered by source', 'Count new leads this month from organic or content sources.'],
  ['CRM', 'Lead-to-customer rate', 'CRM -> Deals / Opportunities by source', 'Customers / leads x 100 using a recent 3 month window.'],
  ['ADS', 'Paid ads spend + leads', 'Google Ads / Meta Ads Manager campaign reporting', 'Use spend and qualified lead conversions, not just clicks.'],
  ['FIN', 'Average deal / customer value', 'CRM -> Closed-won deals', 'Revenue / deals, or use LTV if your team tracks it.'],
  ['FIN', '% of revenue from content', 'CRM -> Revenue reports by source', 'Filter for organic or content-attributed deals.']
];

const formulas = [
  ['Cost Per Lead (CPL)', 'Monthly content budget / leads from organic content'],
  ['Session -> Lead Rate', 'Leads / sessions x 100'],
  ['Content ROI', '(Revenue generated - content spend) / content spend x 100'],
  ['Organic advantage over paid', '(Paid CPL - Organic CPL) / Paid CPL x 100'],
  ['Content-attributed revenue', 'Total monthly revenue x (% of revenue from content / 100)'],
  ['LTV from content customers', 'Customers acquired via content x average customer LTV']
];

const initialRows = [
  { id: 1, name: 'Beginner SEO guide', stage: 'TOFU', sessions: 1200, leads: 14, deal: 0 },
  { id: 2, name: 'Content strategy comparison', stage: 'MOFU', sessions: 600, leads: 18, deal: 0 },
  { id: 3, name: 'Content audit service page', stage: 'BOFU', sessions: 200, leads: 16, deal: 2400 }
];

const money = (n) => `$${Math.round(n || 0).toLocaleString()}`;
const num = (n) => Math.round(n || 0).toLocaleString();
const pct = (n, digits = 0) => `${(n || 0).toFixed(digits)}%`;

function Metric({ label, value, note, strong }) {
  return (
    <div className={`rounded-xl p-4 ${strong ? 'bg-[#E8581A] text-white' : 'bg-[#F0E9DC] text-[#2D2417]'}`}>
      <p className={`font-sans text-[11px] font-semibold ${strong ? 'text-white/70' : 'text-[#A0876A]'}`}>{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      <p className={`mt-1 font-sans text-[10px] ${strong ? 'text-white/60' : 'text-[#A0876A]'}`}>{note}</p>
    </div>
  );
}

function Field({ label, hint, value, onChange, max, min = 0 }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-sans text-sm font-semibold text-[#2D2417]">{label}</span>
      {hint ? <span className="font-sans text-[11px] italic text-[#A0876A]">{hint}</span> : null}
      <input
        className="h-10 rounded-lg border border-[#DDD0BC] bg-white px-3 font-sans text-sm text-[#2D2417] outline-none focus:border-[#E8581A]"
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

export function ResourcesCalculator() {
  const [tab, setTab] = useState('cpl');
  const [cplState, setCplState] = useState({ budget: 3000, pieces: 8, sessions: 4000, leads: 48, ltv: 2400, conv: 15 });
  const [orgState, setOrgState] = useState({ orgSpend: 3000, paidSpend: 5000, orgLeads: 48, paidLeads: 60, orgClose: 18, paidClose: 10 });
  const [revState, setRevState] = useState({ total: 80000, pct: 35, spend: 3000, ltv: 8000, customers: 12, customerPct: 30 });
  const [rows, setRows] = useState(initialRows);

  const cplData = useMemo(() => {
    const costPerLead = cplState.leads ? cplState.budget / cplState.leads : 0;
    const costPerPiece = cplState.pieces ? cplState.budget / cplState.pieces : 0;
    const sessionRate = cplState.sessions ? (cplState.leads / cplState.sessions) * 100 : 0;
    const revenue = cplState.leads * (cplState.conv / 100) * cplState.ltv;
    const roi = cplState.budget ? ((revenue - cplState.budget) / cplState.budget) * 100 : 0;
    const verdict =
      roi > 200
        ? `Your content is a revenue engine at ${money(costPerLead)} per lead and ${pct(roi)} ROI.`
        : roi > 50
          ? `Solid ROI at ${pct(roi)}. A small lift in conversion would move this fast.`
          : roi > 0
            ? 'Content is roughly breaking even. Improve the reader-to-lead path before scaling volume.'
            : 'Content spend is outpacing return. Review offer fit, CTA strength, and attribution.';
    return { costPerLead, costPerPiece, sessionRate, roi, verdict };
  }, [cplState]);

  const orgData = useMemo(() => {
    const organicCpl = orgState.orgLeads ? orgState.orgSpend / orgState.orgLeads : 0;
    const paidCpl = orgState.paidLeads ? orgState.paidSpend / orgState.paidLeads : 0;
    const customers = orgState.orgLeads * (orgState.orgClose / 100);
    const advantage = paidCpl ? ((paidCpl - organicCpl) / paidCpl) * 100 : 0;
    const verdict =
      advantage > 20
        ? `Organic is ${Math.round(advantage)}% cheaper per lead than paid, with room to compound over time.`
        : advantage > 0
          ? 'Organic is slightly cheaper per lead, and it keeps working after the month ends.'
          : 'Paid is cheaper on CPL right now, but downstream close rate may still favor organic.';
    return { organicCpl, paidCpl, customers, advantage, verdict };
  }, [orgState]);

  const funnelData = useMemo(
    () =>
      rows.reduce(
        (acc, row) => {
          acc[row.stage] += row.leads || 0;
          return acc;
        },
        { TOFU: 0, MOFU: 0, BOFU: 0 }
      ),
    [rows]
  );

  const revData = useMemo(() => {
    const attributedRevenue = revState.total * (revState.pct / 100);
    const customers = revState.customers * (revState.customerPct / 100);
    const lifetimeValue = customers * revState.ltv;
    const roi = revState.spend ? ((attributedRevenue - revState.spend) / revState.spend) * 100 : 0;
    const verdict =
      roi > 500
        ? `Content is generating ${money(attributedRevenue)} in attributed revenue against ${money(revState.spend)} in spend.`
        : roi > 100
          ? `Strong content ROI at ${pct(roi)}. This is budget-defense material.`
          : 'Content ROI is positive but attribution setup may still be undercounting impact.';
    return { attributedRevenue, customers, lifetimeValue, roi, verdict };
  }, [revState]);

  const updateRow = (id, key, value) =>
    setRows((current) => current.map((row) => (row.id === id ? { ...row, [key]: key === 'name' || key === 'stage' ? value : Number(value) } : row)));

  return (
    <div className="bg-[#FBF6ED] px-5 py-8 text-[#2D2417]">
      <div className="mx-auto max-w-[900px]">
        <section className="relative rounded-2xl bg-[#2D2417] px-6 py-8 sm:px-9">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute right-6 top-6 rounded bg-[#E8581A] px-3 py-1 font-sans text-[11px] font-semibold text-white transition hover:bg-[#c94a15]"
          >
            by Nimra Khalid
          </a>
          <h1 className="max-w-xl text-4xl font-bold leading-tight text-[#FBF6ED]">
            Content ROI <span className="text-[#E8581A]">Calculator</span>
          </h1>
          <p className="mt-2 max-w-2xl font-sans text-sm italic text-white/60">
            Connect your content output to actual business metrics in the language of the boardroom.
          </p>
        </section>

        <div className="mt-5 flex flex-wrap overflow-hidden rounded-t-xl bg-[#F0E9DC]">
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={`flex-1 px-3 py-3 font-sans text-xs font-semibold ${tab === item ? 'bg-[#FBF6ED] text-[#E8581A]' : 'text-[#A0876A]'}`}
            >
              {tabLabels[item]}
            </button>
          ))}
        </div>

        <section className="rounded-b-2xl border border-t-0 border-[#DDD0BC] bg-[#FBF6ED] p-4 sm:p-7">
          {tab === 'cpl' ? (
            <>
              <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.09em] text-[#E8581A]">Your content investment</p>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Monthly content budget ($)" hint="Writer fees + tools + your time" value={cplState.budget} onChange={(value) => setCplState((s) => ({ ...s, budget: value }))} />
                <Field label="Pieces published per month" hint="Content articles written" value={cplState.pieces} min={1} onChange={(value) => setCplState((s) => ({ ...s, pieces: value }))} />
                <Field label="Monthly organic sessions" hint="Website visits from content" value={cplState.sessions} onChange={(value) => setCplState((s) => ({ ...s, sessions: value }))} />
                <Field label="Leads from organic content" hint="Form fills, demo requests, sign-ups" value={cplState.leads} onChange={(value) => setCplState((s) => ({ ...s, leads: value }))} />
                <Field label="Avg deal / customer value ($)" hint="Average revenue per customer" value={cplState.ltv} onChange={(value) => setCplState((s) => ({ ...s, ltv: value }))} />
                <Field label="Lead-to-customer rate (%)" hint="What % of leads become customers" value={cplState.conv} max={100} onChange={(value) => setCplState((s) => ({ ...s, conv: value }))} />
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-4">
                <Metric label="Cost per lead" value={money(cplData.costPerLead)} note="budget / leads" />
                <Metric label="Cost per piece" value={money(cplData.costPerPiece)} note="budget / pieces" />
                <Metric label="Session -> lead rate" value={pct(cplData.sessionRate, 2)} note="leads / sessions x 100" />
                <Metric label="Content ROI" value={pct(cplData.roi)} note="(revenue - spend) / spend" strong />
              </div>
              <div className="mt-5 rounded-r-xl border border-l-4 border-[#E8581A] border-[#DDD0BC] bg-[#F5EFE4] px-4 py-4 text-sm italic">{cplData.verdict}</div>
            </>
          ) : null}

          {tab === 'organic' ? (
            <>
              <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.09em] text-[#E8581A]">Compare your channels</p>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Monthly content spend ($)" value={orgState.orgSpend} onChange={(value) => setOrgState((s) => ({ ...s, orgSpend: value }))} />
                <Field label="Monthly paid ads spend ($)" value={orgState.paidSpend} onChange={(value) => setOrgState((s) => ({ ...s, paidSpend: value }))} />
                <Field label="Leads from organic content" hint="Source: CRM filtered by organic / content" value={orgState.orgLeads} onChange={(value) => setOrgState((s) => ({ ...s, orgLeads: value }))} />
                <Field label="Leads from paid ads" hint="Source: Google Ads or Meta Ads Manager" value={orgState.paidLeads} onChange={(value) => setOrgState((s) => ({ ...s, paidLeads: value }))} />
                <Field label="Organic lead close rate (%)" hint="Organic leads tend to close higher" value={orgState.orgClose} max={100} onChange={(value) => setOrgState((s) => ({ ...s, orgClose: value }))} />
                <Field label="Paid lead close rate (%)" hint="What % of paid leads become customers" value={orgState.paidClose} max={100} onChange={(value) => setOrgState((s) => ({ ...s, paidClose: value }))} />
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-4">
                <Metric label="Organic CPL" value={money(orgData.organicCpl)} note="content spend / leads" />
                <Metric label="Paid CPL" value={money(orgData.paidCpl)} note="ads spend / leads" />
                <Metric label="Organic customers" value={num(orgData.customers)} note="leads x close rate" />
                <Metric label="Organic advantage" value={orgData.advantage > 0 ? `${Math.round(orgData.advantage)}% cheaper` : orgData.advantage < 0 ? `${Math.abs(Math.round(orgData.advantage))}% pricier` : 'Equal'} note="vs paid per lead" strong />
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {[
                  ['Organic CPL', orgData.organicCpl, '#E8581A'],
                  ['Paid CPL', orgData.paidCpl, '#DDD0BC'],
                  ['Organic customers', orgData.customers * 10, '#2D2417']
                ].map(([label, value, color]) => (
                  <div key={label} className="rounded-xl bg-[#F5EFE4] p-4">
                    <div className="mb-2 font-sans text-xs font-semibold text-[#6B5740]">{label}</div>
                    <div className="h-3 overflow-hidden rounded-full bg-white">
                      <div className="h-full rounded-full" style={{ width: `${Math.min((value / Math.max(orgData.paidCpl, orgData.organicCpl, orgData.customers * 10, 1)) * 100, 100)}%`, background: color }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-r-xl border border-l-4 border-[#E8581A] border-[#DDD0BC] bg-[#F5EFE4] px-4 py-4 text-sm italic">{orgData.verdict}</div>
            </>
          ) : null}

          {tab === 'funnel' ? (
            <>
              <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.09em] text-[#E8581A]">Map content pieces to funnel stage</p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] table-fixed border-collapse">
                  <thead>
                    <tr className="bg-[#F0E9DC] font-sans text-xs text-[#A0876A]">
                      <th className="rounded-l-lg p-2 text-left">Content piece</th>
                      <th className="p-2 text-left">Stage</th>
                      <th className="p-2 text-left">Sessions/mo</th>
                      <th className="p-2 text-left">Leads/mo</th>
                      <th className="p-2 text-left">Avg deal ($)</th>
                      <th className="rounded-r-lg p-2 text-left">CPL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.id} className="border-b border-[#EDE5D5]">
                        <td className="p-2"><input className="h-9 w-full rounded-md border border-[#DDD0BC] px-2 font-sans text-sm" value={row.name} onChange={(e) => updateRow(row.id, 'name', e.target.value)} /></td>
                        <td className="p-2">
                          <select className="h-9 w-full rounded-md border border-[#DDD0BC] px-2 font-sans text-sm" value={row.stage} onChange={(e) => updateRow(row.id, 'stage', e.target.value)}>
                            {['TOFU', 'MOFU', 'BOFU'].map((stage) => <option key={stage}>{stage}</option>)}
                          </select>
                        </td>
                        <td className="p-2"><input className="h-9 w-full rounded-md border border-[#DDD0BC] px-2 font-sans text-sm" type="number" value={row.sessions} onChange={(e) => updateRow(row.id, 'sessions', e.target.value)} /></td>
                        <td className="p-2"><input className="h-9 w-full rounded-md border border-[#DDD0BC] px-2 font-sans text-sm" type="number" value={row.leads} onChange={(e) => updateRow(row.id, 'leads', e.target.value)} /></td>
                        <td className="p-2"><input className="h-9 w-full rounded-md border border-[#DDD0BC] px-2 font-sans text-sm" type="number" value={row.deal} onChange={(e) => updateRow(row.id, 'deal', e.target.value)} /></td>
                        <td className="p-2 font-sans text-sm font-semibold text-[#E8581A]">{row.leads && row.deal ? money(row.deal / row.leads) : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button type="button" className="mt-4 w-full rounded-lg border border-dashed border-[#DDD0BC] px-4 py-3 font-sans text-sm font-semibold text-[#A0876A]" onClick={() => setRows((current) => [...current, { id: Date.now(), name: 'New piece', stage: 'TOFU', sessions: 0, leads: 0, deal: 0 }])}>
                + Add content piece
              </button>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <Metric label="TOFU leads" value={num(funnelData.TOFU)} note="awareness stage" />
                <Metric label="MOFU leads" value={num(funnelData.MOFU)} note="consideration stage" />
                <Metric label="BOFU leads" value={num(funnelData.BOFU)} note="decision stage" strong />
              </div>
            </>
          ) : null}

          {tab === 'revenue' ? (
            <>
              <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.09em] text-[#E8581A]">Content-attributed revenue</p>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Total monthly revenue ($)" hint="All revenue generated this month" value={revState.total} onChange={(value) => setRevState((s) => ({ ...s, total: value }))} />
                <Field label="% of revenue from content leads" hint="Filter closed deals by source in your CRM" value={revState.pct} max={100} onChange={(value) => setRevState((s) => ({ ...s, pct: value }))} />
                <Field label="Monthly content investment ($)" hint="Writer fees + tools + your time" value={revState.spend} onChange={(value) => setRevState((s) => ({ ...s, spend: value }))} />
                <Field label="Avg customer LTV ($)" hint="Lifetime value per customer" value={revState.ltv} onChange={(value) => setRevState((s) => ({ ...s, ltv: value }))} />
                <Field label="New customers this month" value={revState.customers} onChange={(value) => setRevState((s) => ({ ...s, customers: value }))} />
                <Field label="% of new customers from content" value={revState.customerPct} max={100} onChange={(value) => setRevState((s) => ({ ...s, customerPct: value }))} />
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-4">
                <Metric label="Content-attributed revenue" value={money(revData.attributedRevenue)} note="total revenue x content %" />
                <Metric label="Customers from content" value={num(revData.customers)} note="new customers x content %" />
                <Metric label="LTV from content" value={money(revData.lifetimeValue)} note="content customers x LTV" />
                <Metric label="Content ROI" value={pct(revData.roi)} note="(attr. revenue - spend) / spend" strong />
              </div>
              <div className="mt-5 flex flex-col items-center gap-4">
                <div className="grid h-44 w-44 place-items-center rounded-full" style={{ background: `conic-gradient(#E8581A 0deg ${Math.max(0, Math.min(360, (revState.pct / 100) * 360))}deg, #EDE5D5 0deg 360deg)` }}>
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-[#FBF6ED] text-center">
                    <strong className="font-sans text-xl">{pct(revState.pct)}</strong>
                    <span className="font-sans text-[11px] text-[#6B5740]">from content</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 rounded-r-xl border border-l-4 border-[#E8581A] border-[#DDD0BC] bg-[#F5EFE4] px-4 py-4 text-sm italic">{revData.verdict}</div>
            </>
          ) : null}

          {tab === 'guide' ? (
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 border-b-2 border-[#E8581A] pb-2 text-lg font-bold">Where to find every number in this calculator</h3>
                <div className="space-y-3">
                  {guideItems.map(([icon, label, where, description]) => (
                    <div key={label} className="flex gap-4 rounded-xl bg-[#F0E9DC] p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8581A] font-sans text-xs font-bold text-white">{icon}</div>
                      <div>
                        <p className="font-sans text-sm font-bold">{label}</p>
                        <p className="mt-1 font-sans text-xs font-semibold text-[#E8581A]">{where}</p>
                        <p className="mt-1 text-sm italic text-[#6B5740]">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 border-b-2 border-[#E8581A] pb-2 text-lg font-bold">How every formula is calculated</h3>
                <div className="space-y-3">
                  {formulas.map(([name, formula]) => (
                    <div key={name} className="rounded-xl bg-[#2D2417] px-5 py-4">
                      <p className="font-sans text-xs font-semibold text-[#E8581A]">{name}</p>
                      <p className="mt-1 font-sans text-sm text-[#FBF6ED]">{formula}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </section>

        <div className="mt-8 flex justify-center">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-[#E8581A] px-5 py-3 font-sans text-sm font-semibold text-white transition hover:bg-[#c94a15]"
          >
            Connect with Nimra Khalid on LinkedIn
          </a>
        </div>

        <footer className="mt-9 border-t border-[#DDD0BC] pt-6 text-center">
          <p className="font-sans text-sm italic text-[#A0876A]">Content is infrastructure, not decoration. <strong className="not-italic text-[#E8581A]">Nimra Khalid</strong></p>
          <p className="mt-1 font-sans text-sm italic text-[#A0876A]">Follow <strong className="not-italic text-[#E8581A]">Nimra Khalid</strong> on LinkedIn for more tools like this.</p>
        </footer>
      </div>
    </div>
  );
}
