import svgPaths from "../../imports/svg-fitf5bq036";

const col2 = [
  { label: 'Salesforce Education Cloud', href: '#' },
  { label: 'Wdrożenia', href: '#' },
  { label: 'Utrzymanie i rozwój', href: '#' },
];

const col3 = [
  { label: 'O nas', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'Blog', href: '#' },
];

const col4 = [
  { label: 'hello@thinkbeyond.cloud', href: 'mailto:hello@thinkbeyond.cloud' },
  { label: 'Polityka prywatności', href: '#' },
  { label: 'Regulamin', href: '#' },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-[14px] text-neutral-500 hover:text-neutral-900 transition-colors leading-[1.6]"
      >
        {label}
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">

      {/* Main grid */}
      

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[12px] text-neutral-400">
            © 2026 Think Beyond. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-[12px] text-neutral-400">
            Wdrożenia Salesforce Education Cloud · Polska i Europa
          </p>
        </div>
      </div>

    </footer>
  );
}
