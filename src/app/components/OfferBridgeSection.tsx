const CARDS = [
  {
    label: 'University CRM',
    title: 'Dziekanat i Retencja.',
    body: 'Proaktywne zarządzanie sprawami studenckimi i zapobieganie rezygnacjom.',
    link: 'Zobacz obszar CRM →',
    href: '#',
  },
  {
    label: 'Salesforce for Universities',
    title: 'Kwestura i Finanse.',
    body: 'Pełna kontrola nad spływem czesnego i zautomatyzowane rozliczenia operacyjne.',
    link: 'Zobacz platformę →',
    href: '#',
  },
  {
    label: 'Digital Transformation',
    title: 'Strategia i Alumni.',
    body: 'Budowanie lojalności absolwentów i model Lifelong Learning.',
    link: 'Zobacz transformację →',
    href: '#',
  },
];

export function OfferBridgeSection() {
  return (
    <section className="bg-neutral-800 py-20 px-6 rounded-none">
      <div className="mx-auto max-w-5xl flex flex-col gap-12">

        {/* Text block */}
        <div className="flex flex-col gap-5 max-w-2xl">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.6px]" style={{ fontWeight: 600 }}>
            Salesforce Education Cloud
          </span>
          <h2 className="text-[30px] sm:text-[38px] leading-[1.15] tracking-[-1.2px] text-white">
            Rekrutacja to dopiero początek transformacji.
          </h2>
          <p className="text-[15px] text-neutral-400 leading-[1.75] max-w-xl">Zbuduj kompletny ekosystem Salesforce. Rekrutacja to pierwszy krok – poznaj pozostałe 3 filary transformacji Twojej uczelni.</p>
        </div>

        {/* 3-column mini-grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="bg-neutral-700 rounded-[20px] p-6 flex flex-col gap-3"
            >
              <span
                className="text-[10px] text-neutral-400 uppercase tracking-[1.4px]"
                style={{ fontWeight: 600 }}
              >
                {card.label}
              </span>
              <p className="text-[15px] text-white leading-[1.5] tracking-[-0.3px]" style={{ fontWeight: 600 }}>
                {card.title}
              </p>
              <p className="text-[13px] text-neutral-400 leading-[1.65]">
                {card.body}
              </p>
              <a
                href={card.href}
                className="mt-auto text-[13px] text-neutral-300 hover:text-white transition-colors underline underline-offset-2"
                style={{ fontWeight: 500 }}
              >
                {card.link}
              </a>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-black px-7 py-4 text-[14px] hover:bg-neutral-100 transition-colors rounded-full w-full sm:w-auto justify-center sm:justify-start"
            style={{ fontWeight: 700 }}
          >
            Poznaj pełnię możliwości Salesforce Education Cloud
          </a>
        </div>

      </div>
    </section>
  );
}
