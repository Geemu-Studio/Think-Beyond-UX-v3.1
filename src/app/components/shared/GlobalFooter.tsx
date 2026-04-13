import { Link } from 'react-router';

const LINKS = {
  solutions: [
    { label: 'Core CRM Architecture', href: '#' },
    { label: 'Legacy SIS Integration', href: '#' },
    { label: 'Managed Services', href: '#' },
  ],
  compliance: [
    { label: 'Data Governance (GDPR)', href: '#' },
    { label: 'Modern Slavery Act', href: '#' },
    { label: 'Accessibility Statement', href: '#' },
    { label: 'Information Security', href: '#' },
  ]
};

export function GlobalFooter() {
  return (
    <footer className="bg-neutral-900 border-t border-white/5 py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-bold tracking-tight text-white">
                Think Beyond.
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The authoritative voice in Higher Education digital transformation. Empowering UK universities with resilient, unified Salesforce architectures.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Solutions
            </h4>
            <ul className="flex flex-col gap-3">
              {LINKS.solutions.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Compliance & Legal */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Compliance
            </h4>
            <ul className="flex flex-col gap-3">
              {LINKS.compliance.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Think Beyond. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-semibold tracking-wide uppercase">Salesforce Education Cloud</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span className="text-slate-400 font-semibold tracking-wide uppercase">UK & Europe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
