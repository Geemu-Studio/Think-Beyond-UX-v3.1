const features = [
  {
    id: 'cyber',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        {/* Shield outline */}
        <path
          d="M14 2.5L4 6.5V13.5C4 19.17 8.36 24.47 14 26C19.64 24.47 24 19.17 24 13.5V6.5L14 2.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Pulse / signal lines — proactive / cyber */}
        <polyline
          points="9,14 11.5,11 13.5,16 15.5,12 18,14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    heading: 'Proactive Cyber Resilience',
    body:
      'Fortify your digital campus against evolving cyber threats. Our architecture provides continuous, advanced protection so your institution can focus on academic innovation without disruption.',
  },
  {
    id: 'privacy',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        {/* Lock body */}
        <rect
          x="6"
          y="13"
          width="16"
          height="12"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        {/* Lock shackle */}
        <path
          d="M9 13V9.5C9 7.015 10.791 5 14 5C17.209 5 19 7.015 19 9.5V13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Key hole dot */}
        <circle cx="14" cy="19.5" r="1.25" fill="currentColor" />
      </svg>
    ),
    heading: 'Uncompromising Data Privacy',
    body:
      'From rigorous GDPR compliance to granular, role-based access controls, ensure that sensitive student, applicant, and faculty information remains strictly confidential and fully governed.',
  },
];

export function SecurityTrustSection() {
  return (
    <section
      id="security-trust"
      className="bg-neutral-900 py-20 px-6 border-t border-neutral-800"
    >
      <div className="mx-auto max-w-5xl flex flex-col gap-12">

        {/* ── Header row ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">

          {/* Shield icon badge */}
          <div
            className="flex-shrink-0 w-14 h-14 rounded-[14px] flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="text-white"
              aria-hidden="true"
            >
              <path
                d="M15 2L3 7V15C3 21.627 8.373 27.5 15 29C21.627 27.5 27 21.627 27 15V7L15 2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M10 15.5L13 18.5L20 11.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Heading + sub */}
          <div className="flex flex-col gap-4">
            <div>
              <span
                className="text-[11px] text-neutral-500 uppercase tracking-[1.4px]"
                style={{ fontWeight: 600 }}
              >
                Security &amp; Compliance
              </span>
              <h2
                className="mt-3 text-[30px] sm:text-[38px] leading-[1.15] tracking-[-1.2px] text-white"
                style={{ fontWeight: 700 }}
              >
                Enterprise-grade security and compliance.
              </h2>
            </div>
            <p className="text-[15px] text-neutral-400 leading-[1.75] max-w-xl">
              Safeguarding your academic community's data with a robust,
              GDPR-compliant infrastructure.
            </p>
          </div>
        </div>

        {/* ── Feature cards ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="rounded-[20px] p-8 flex flex-col gap-5"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[12px] flex items-center justify-center text-white flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.09)' }}
              >
                {feat.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[17px] text-white leading-[1.3] tracking-[-0.4px]"
                  style={{ fontWeight: 700 }}
                >
                  {feat.heading}
                </h3>
                <p className="text-[14px] text-neutral-400 leading-[1.75]">
                  {feat.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Trust badges row ───────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-2"
        >
          {[
            { label: 'GDPR Compliant', detail: 'EU Data Protection' },
            { label: 'ISO 27001 Aligned', detail: 'Information Security' },
            { label: 'Role-Based Access', detail: 'Granular Permissions' },
            { label: 'Encrypted at Rest', detail: 'AES-256 Standard' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2.5">
              {/* Small tick icon */}
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path
                    d="M2 5l2 2 4-4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[12px] text-white leading-none"
                  style={{ fontWeight: 600 }}
                >
                  {badge.label}
                </span>
                <span className="text-[11px] text-neutral-500 mt-0.5">
                  {badge.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
