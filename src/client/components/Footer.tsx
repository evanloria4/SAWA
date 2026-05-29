import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-start gap-1.5 mb-4 inline-flex">
              <div>
                <div className="text-2xl font-bold tracking-widest font-serif leading-none">SAWA</div>
                <div className="text-[8px] text-white/50 tracking-wider uppercase leading-tight mt-0.5">
                  Southern Aesthetics and<br />Wellness Association
                </div>
              </div>
              <svg className="w-5 h-5 mt-0.5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22C6 16 2 12 2 8c0-2.5 2-4 4-4 1.5 0 3 .8 4 2 1 2 2 4 2 6 0-2 1-4 2-6 1-1.2 2.5-2 4-2 2 0 4 1.5 4 4 0 4-4 8-10 14z" />
              </svg>
            </Link>
            <p className="text-sm text-white/60 font-script italic leading-relaxed">
              Empowering Aesthetics &amp; Wellness<br />Professionals to Thrive.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-white/65">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gold/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="text-white/90 font-medium">Serving Providers</div>
                  <div>Across the Southeast</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/65">
                <svg className="w-4 h-4 shrink-0 text-gold/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
                <span>SAWA.org</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/65">
                <svg className="w-4 h-4 shrink-0 text-gold/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@sawa.org</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {[
                ['About SAWA', '/about'],
                ['Membership Benefits', '/membership/benefits'],
                ['Vendor Partners', '/membership/vendors'],
                ['Events', '/events'],
                ['Contact', '/contact'],
                ['Join SAWA', '/join'],
              ].map(([label, to]) => (
                <Link key={to} to={to} className="block text-sm text-white/60 hover:text-gold transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-4">Follow Us</h4>
            <div className="flex gap-2.5">
              {[
                { label: 'f', title: 'Facebook' },
                { label: 'in', title: 'Instagram' },
                { label: 'li', title: 'LinkedIn' },
              ].map(({ label, title }) => (
                <a
                  key={title}
                  href="#"
                  aria-label={title}
                  className="w-9 h-9 border border-white/20 hover:border-gold hover:text-gold flex items-center justify-center text-xs font-bold text-white/60 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/35">
          <span>© {new Date().getFullYear()} Southern Aesthetics and Wellness Association. All rights reserved.</span>
          <span>EDUCATE · ADVOCATE · COLLABORATE · ELEVATE</span>
        </div>
      </div>
    </footer>
  );
}
