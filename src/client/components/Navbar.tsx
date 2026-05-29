import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  {
    label: 'ABOUT',
    dropdown: [
      { label: 'About SAWA', to: '/about' },
      { label: 'Brandi LaBruzzo, J.D.', to: '/about/brandi' },
      { label: 'Dr. Lee Lenahan', to: '/about/dr-lenahan' },
      { label: 'Christy Lenahan, APRN', to: '/about/christy' },
      { label: 'Meet Martha P.', to: '/about/martha' },
    ],
  },
  {
    label: 'MEMBERSHIP',
    dropdown: [
      { label: 'Membership Benefits', to: '/membership/benefits' },
      { label: 'Join SAWA', to: '/join' },
      { label: 'Vendor Partners', to: '/membership/vendors' },
    ],
  },
  {
    label: 'PHYSICIANS',
    dropdown: [
      { label: 'Find a Physician', to: '/physicians' },
      { label: 'Become a Partner', to: '/physicians/partner' },
    ],
  },
  {
    label: 'RESOURCES',
    dropdown: [
      { label: 'Member Resources', to: '/resources' },
      { label: 'Blog', to: '/resources/blog' },
      { label: 'Newsletter', to: '/resources/newsletter' },
    ],
  },
  { label: 'EVENTS', to: '/events' },
  { label: 'CONTACT', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-start gap-1.5 shrink-0" onClick={closeMobile}>
            <div>
              <div className="text-[26px] font-bold text-navy tracking-widest leading-none font-serif">SAWA</div>
              <div className="text-[8px] text-navy/60 tracking-wider leading-tight uppercase mt-0.5">
                Southern Aesthetics and<br />Wellness Association
              </div>
            </div>
            <svg className="w-5 h-5 mt-0.5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22C6 16 2 12 2 8c0-2.5 2-4 4-4 1.5 0 3 .8 4 2 1 2 2 4 2 6 0-2 1-4 2-6 1-1.2 2.5-2 4-2 2 0 4 1.5 4 4 0 4-4 8-10 14z" />
            </svg>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.to ? (
                  <Link
                    to={link.to}
                    className={`text-[11px] font-semibold px-2.5 xl:px-3 py-2 tracking-widest transition-colors ${
                      location.pathname === link.to ? 'text-gold' : 'text-navy/70 hover:text-navy'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button className="text-[11px] font-semibold text-navy/70 hover:text-navy px-2.5 xl:px-3 py-2 tracking-widest flex items-center gap-1 transition-colors">
                    {link.label}
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border-t-2 border-gold min-w-52 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-5 py-3 text-sm text-navy/75 hover:bg-cream hover:text-navy border-b border-gray-100 last:border-0 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/join"
              className="bg-olive text-white text-[11px] font-bold tracking-widest px-5 py-2.5 hover:bg-olive/90 transition-colors"
            >
              JOIN SAWA
            </Link>
            <Link
              to="/login"
              className="border border-navy/25 text-navy text-[11px] font-semibold tracking-widest px-4 py-2.5 hover:bg-gray-50 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              MEMBER LOGIN
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 pb-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.to ? (
                  <Link
                    to={link.to}
                    className="block px-4 py-3 text-sm font-semibold text-navy/75 hover:text-navy hover:bg-cream tracking-widest"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full text-left px-4 py-3 text-sm font-semibold text-navy/75 hover:text-navy hover:bg-cream tracking-widest flex items-center justify-between"
                      onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform ${mobileDropdown === link.label ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileDropdown === link.label && link.dropdown && (
                      <div className="bg-cream border-l-2 border-gold ml-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block px-5 py-2.5 text-sm text-navy/70 hover:text-navy"
                            onClick={closeMobile}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="flex gap-2 px-4 pt-4">
              <Link to="/join" onClick={closeMobile} className="flex-1 bg-olive text-white text-center text-xs font-bold tracking-widest py-3">
                JOIN SAWA
              </Link>
              <Link to="/login" onClick={closeMobile} className="flex-1 border border-navy/25 text-navy text-center text-xs font-semibold tracking-widest py-3">
                MEMBER LOGIN
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
