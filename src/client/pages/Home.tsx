import { Link } from 'react-router-dom';

const features = [
  {
    title: 'STRONGER TOGETHER',
    body: 'A community built on collaboration, trust, and support.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'COMPLIANCE MADE SIMPLE',
    body: 'Tools, templates, and guidance to keep your practice protected.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'SAVE MORE. EARN MORE.',
    body: 'Exclusive member discounts on the products and services you use most.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'EDUCATION THAT EMPOWERS',
    body: 'CE opportunities, training, and resources to help you grow.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'ADVOCACY THAT MAKES AN IMPACT',
    body: 'We advocate for your profession and the future of aesthetics & wellness.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: 'LEAD WITH CONFIDENCE',
    body: 'Elevate your practice with resources and relationships you can count on.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '1,000+', label: 'MEMBERS' },
  { value: '7', label: 'STATES' },
  { value: '500+', label: 'PHYSICIAN PARTNERS' },
  { value: '35+', label: 'YEARS OF COMBINED LEADERSHIP EXPERIENCE' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center bg-slate-700 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/hero.jpg)' }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Elevating{' '}
              <span className="font-script italic font-normal text-white">Aesthetics &amp; Wellness</span>{' '}
              Together.
            </h1>
            <div className="w-20 h-px bg-gold mb-6" />
            <p className="text-white/80 text-lg leading-relaxed mb-3">
              SAWA is the premier association supporting NPs, PAs, physicians, and{' '}
              <span className="text-gold font-medium">Aesthetics</span> &amp;{' '}
              <span className="text-gold font-medium">Wellness</span> providers across the Southeast.
            </p>
            <p className="font-script italic text-white/60 text-xl mb-10">
              Resources. Relationships. Advocacy. Confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/join"
                className="bg-olive text-white font-bold tracking-widest text-xs px-8 py-4 hover:bg-olive/90 transition-colors text-center"
              >
                JOIN SAWA TODAY
              </Link>
              <Link
                to="/membership/benefits"
                className="border border-white/40 text-white font-semibold text-xs px-8 py-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-2.5"
              >
                <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                SEE HOW SAWA HELPS
              </Link>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-right hidden md:block">
          <p className="text-[10px] font-bold tracking-widest text-white/80">AESTHETICS</p>
          <p className="text-[10px] font-bold tracking-widest text-white/80">&amp; WELLNESS</p>
          <div className="w-full h-px bg-gold/60 my-2" />
          <p className="text-[10px] tracking-widest text-white/60">CONFIDENCE</p>
          <p className="text-[10px] tracking-widest text-white/60">INSIDE &amp; OUT</p>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className="text-navy/40 mb-4">{f.icon}</div>
              <h3 className="text-[11px] font-bold tracking-widest text-navy mb-2">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership section */}
      <section className="bg-cream py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image placeholder */}
          <div className="bg-slate-200 aspect-[4/3] rounded-sm flex items-center justify-center">
            <div className="text-center text-slate-400">
              <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Team Photo</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-widest text-gold mb-3">MEMBERSHIP THAT DELIVERS</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-4">
              Real Benefits.<br />Real Savings.<br />Real Support.
            </h2>
            <div className="w-16 h-px bg-gold mb-6" />
            <p className="text-gray-600 leading-relaxed mb-8">
              SAWA members save thousands each year through preferred pricing, streamlined compliance support,
              trusted physician partnerships, and a community that truly has your back.
            </p>
            <Link
              to="/membership/benefits"
              className="inline-block bg-olive text-white font-bold tracking-widest text-xs px-8 py-4 hover:bg-olive/90 transition-colors mb-8"
            >
              EXPLORE MEMBER BENEFITS
            </Link>

            {/* Stat cards */}
            <div className="space-y-3">
              {[
                { icon: '📈', text: 'MEMBERS SAVE $1,000 – $3,000+ PER MONTH' },
                { icon: '🤝', text: 'TRUSTED BY PROVIDERS ACROSS THE SOUTHEAST' },
                { icon: '🛡', text: 'BUILT ON COMPLIANCE. FOCUSED ON YOU.' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-4 bg-white p-4 border border-gray-100">
                  <span className="text-xl shrink-0">{icon}</span>
                  <span className="text-xs font-bold tracking-wider text-navy">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[11px] font-bold tracking-widest text-gold mb-10">
            MAKING AN IMPACT ACROSS THE SOUTHEAST
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-4xl md:text-5xl text-white mb-2">{s.value}</div>
                <div className="text-[10px] font-bold tracking-widest text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0">
            <div className="w-16 h-16 rounded-full border-2 border-navy/15 flex items-center justify-center">
              <svg className="w-7 h-7 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl text-navy mb-1">Stay Informed. Stay Ahead.</h3>
            <p className="text-sm text-gray-500">Subscribe for updates on regulations, education, events, and member news.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-0 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 px-5 py-3.5 text-sm focus:outline-none focus:border-gold w-full sm:w-72"
            />
            <button className="bg-olive text-white font-bold tracking-widest text-xs px-6 py-3.5 hover:bg-olive/90 transition-colors whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
