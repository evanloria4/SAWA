import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const leftColumn = [
  {
    title: 'EDUCATION & PROFESSIONAL DEVELOPMENT',
    items: [
      'Discounted or reduced CME credits annually in aesthetic and wellness fields',
      'Continuing education opportunities (webinars, workshops, and training)',
      'Annual Regional Conference / Symposium with hands-on training',
      'Mentorship program (pairing experienced and newer practitioners)',
      'Research and publication opportunities (newsletter or journal)',
    ],
  },
  {
    title: 'PRACTICE OPERATIONS & FINANCIAL SAVINGS',
    items: [
      'Association discounts on office supplies',
      'Association discounts on injectables',
      'Association discounts on GLP-1s and other compounded medications',
      'Discounted office operations evaluations',
      'Association discounted digital marketing programs',
      'Expanded group purchasing opportunities for equipment and technology',
      'Negotiated group pricing for malpractice insurance',
      'Group health insurance for you and your employees (discounted healthcare benefits)',
    ],
  },
  {
    title: 'DISCOUNTED HEALTHCARE BENEFITS',
    items: [
      'Group health insurance for you and your employees at exclusive association rates',
    ],
  },
];

const rightColumn = [
  {
    title: 'ADVOCACY & LEGAL SUPPORT',
    items: [
      'Political advocacy through lobbying and established political relationships',
      'Legal counsel at discounted association rates',
      'Risk management support through group insurance programs',
    ],
  },
  {
    title: 'NETWORKING & COMMUNITY',
    items: [
      'Access to collaborative practice physicians in the aesthetic and wellness space at discounted rates',
      'Member Directory & Referral Network',
      'Patient lead generation through featured listings on SAWA platforms',
      'Exclusive member events, webinars, and regional retreats',
      'Wellness and staff training programs',
    ],
  },
  {
    title: 'MARKETING & BRANDING SUPPORT',
    items: [
      'Marketing and branding support (including rights to use the SAWA logo)',
      'Co-branded materials and promotional opportunities',
    ],
  },
  {
    title: 'ADDITIONAL MEMBER PERKS',
    items: [
      'Certificate of Membership for professional credibility',
      'Access to a supportive regional community of like-minded aesthetic and wellness professionals',
    ],
  },
];

const pillars = [
  { label: 'EDUCATION', icon: '🎓' },
  { label: 'SAVINGS', icon: '$' },
  { label: 'ADVOCACY', icon: '⚖️' },
  { label: 'COMMUNITY', icon: '👥' },
  { label: 'SUPPORT', icon: '📣' },
];

export default function Benefits() {
  const { user } = useAuth();

  return (
    <>
      {/* Header */}
      <section className="bg-cream py-14 px-4 md:px-8 text-center">
        <p className="text-[11px] font-bold tracking-widest text-gold mb-3">MEMBERSHIP</p>
        <h1 className="font-serif text-3xl md:text-5xl text-navy mb-4">
          The Benefits of <span className="font-script italic font-normal">Joining SAWA</span>
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-5" />
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          SAWA members receive access to exclusive resources, savings, legal support, and a community dedicated to
          elevating aesthetics and wellness professionals across the Southeast.
        </p>
      </section>

      {/* Benefits grid */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left column */}
          <div className="space-y-10">
            {leftColumn.map((section) => (
              <div key={section.title}>
                <h2 className="text-[11px] font-bold tracking-widest text-gold mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {section.title}
                </h2>
                <ul className="space-y-2 pl-7">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gold mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-10">
            {rightColumn.map((section) => (
              <div key={section.title}>
                <h2 className="text-[11px] font-bold tracking-widest text-gold mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {section.title}
                </h2>
                <ul className="space-y-2 pl-7">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gold mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA panel */}
      <section className="bg-cream py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-3xl md:text-4xl text-navy font-bold mb-2">STRONGER TOGETHER.</p>
          <p className="font-script italic text-gold text-3xl md:text-4xl mb-2">ELEVATING AESTHETICS</p>
          <p className="font-serif text-3xl md:text-4xl text-navy font-bold mb-6">AND WELLNESS.</p>
          <p className="font-script italic text-navy/50 text-xl mb-10">Empowering You.</p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
            {pillars.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy/50 text-lg">
                  {p.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest text-navy/50">{p.label}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-bold tracking-widest text-navy/40 mb-8">
            UNITING PROFESSIONALS. STRENGTHENING PRACTICES. ADVANCING THE FUTURE OF CARE.
          </p>

          {!user && (
            <Link
              to="/join"
              className="inline-block bg-olive text-white font-bold tracking-widest text-xs px-10 py-4 hover:bg-olive/90 transition-colors"
            >
              JOIN SAWA TODAY
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
