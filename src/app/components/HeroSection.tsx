export function HeroSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 px-6">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-4 sm:gap-6">

        {/* Badge — hidden on very small screens to save fold space */}
        <div className="hidden sm:inline-flex items-center gap-2 border border-neutral-300 px-4 py-1.5 rounded-full">
          <span className="block w-2 h-2 rounded-full bg-black shrink-0" />
          <span
            className="text-[12px] text-neutral-600 tracking-[0.4px] uppercase"
            style={{ fontWeight: 500 }}
          >
            Salesforce Education Cloud · Certyfikowany Partner
          </span>
        </div>

        {/* Headline
            Mobile:  text-[26px] — compact enough to stay above fold
            sm:      text-[44px]
            lg:      text-[58px]
        */}
        <h1
          className="leading-[1.13] tracking-[-1px] sm:tracking-[-2px] text-black text-[36px] sm:text-[48px]"
        >
          Wyniki matur to u&nbsp;Was chaos i&nbsp;padające systemy?&nbsp;Czas zacząć traktować rekrutację jak nowoczesny e-commerce.
        </h1>

        {/* Sub-headline
            Mobile: text-[15px] — readable but compact
            sm+:    text-[18px]
        */}
        <p
          className="text-[15px] sm:text-[18px] text-neutral-500 leading-[1.6] max-w-2xl"
          style={{ fontWeight: 400 }}
        >
          Zwiększ przychody uczelni, angażując najlepszych kandydatów i redukując wskaźnik rezygnacji ze studiów.
        </p>

        {/* CTA — full-width on mobile, auto on sm+ */}
        <a
          href="#contact-form"
          onClick={handleScroll}
          className="mt-1 w-full sm:w-auto inline-flex items-center justify-center bg-black text-white px-8 py-4 text-[15px] transition-colors hover:bg-neutral-800 rounded-full"
          style={{ fontWeight: 600 }}
        >
          Zidentyfikuj wąskie gardła rekrutacji →
        </a>

        {/* Trust signal */}
        <p className="text-[12px] sm:text-[13px] text-neutral-400 mt-0">
          Bezpłatna konsultacja · Bez zobowiązań · Odpowiadamy w 24h
        </p>

      </div>
    </section>
  );
}