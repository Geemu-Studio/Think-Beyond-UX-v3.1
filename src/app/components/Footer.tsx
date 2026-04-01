import svgPaths from "../../imports/svg-fitf5bq036";

const col2 = [
  { label: 'Salesforce Education Cloud', href: '#' },
  { label: 'Implementations', href: '#' },
  { label: 'Support & Development', href: '#' },
];

const col3 = [
  { label: 'About', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'Blog', href: '#' },
];

const col4 = [
  { label: 'hello@thinkbeyond.cloud', href: 'mailto:hello@thinkbeyond.cloud' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
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
    <footer className="bg-white border-t border-neutral-100">
      {/* Bottom bar */}
      <div className="border-t border-neutral-100 py-10 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-[12px] lg:px-[24px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] text-neutral-400">
            © 2026 Think Beyond. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[12px] text-neutral-400 font-medium">
              Salesforce Education Cloud · UK & Europe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
