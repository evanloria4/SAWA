import { Link } from 'react-router-dom';
const vendors = ['BTL', 'Lumenis', 'Hydrafacial', 'Tixel', 'InMode', 'Cartessa'];

const memberPerks = [
  'Exclusive savings on products, services, and equipment',
  'Access to expert resources and ongoing education',
  'Advocacy that protects your practice and profession',
  'A supportive network of collaborative professionals',
  'Tools and strategies to help you grow and thrive',
];

const pillars = [
  {
    label: 'EDUCATION',
    desc: 'Stay informed. Enhance your skills. Lead with confidence.',
    color: 'bg-navy',
  },
  {
    label: 'SAVINGS',
    desc: 'Save on the products, services, and support your practice needs.',
    color: 'bg-gold',
  },
  {
    label: 'ADVOCACY',
    desc: 'Your voice. Your profession. Our mission.',
    color: 'bg-navy',
  },
  {
    label: 'COMMUNITY',
    desc: 'Connect. Collaborate. Thrive together.',
    color: 'bg-navy',
  },
  {
    label: 'SUPPORT',
    desc: 'Resources and partnerships you can count on.',
    color: 'bg-gold',
  },
];

export default function Vendors() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream py-14 px-4 md:px-8 text-center">
        <p className="text-[11px] font-bold tracking-widest text-gold mb-3">MEMBERSHIP PARTNERS</p>
        <h1 className="font-serif text-3xl md:text-5xl text-navy mb-4">Preferred Vendor Partners &amp; Discounts</h1>
        <div className="w-16 h-px bg-gold mx-auto mb-5" />
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          SAWA members receive exclusive discounts and savings from our trusted partner companies.
        </p>
      </section>

      {/* Main grid */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Vendor logos */}
          <div>
            <div className="space-y-4 mb-8">
              {vendors.map((v) => (
                <div key={v} className="border border-gray-200 px-6 py-4 flex items-center justify-center">
                  <span className="font-serif text-xl font-bold text-navy/70 tracking-wider">{v}</span>
                </div>
              ))}
            </div>
            <p className="font-script italic text-navy/60 text-xl text-center">
              Stronger Partnerships.<br />Greater Possibilities.
            </p>
          </div>

          {/* Members enjoy */}
          <div>
            <h2 className="text-[11px] font-bold tracking-widest text-gold mb-6">SAWA MEMBERS ENJOY:</h2>
            <ul className="space-y-3 mb-10">
              {memberPerks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            <div className="bg-cream border border-gray-200 p-4 mb-8">
              <h3 className="text-[11px] font-bold tracking-widest text-navy flex items-center gap-2 mb-2">
                <span>🏥</span> DISCOUNTED HEALTHCARE BENEFITS
              </h3>
              <p className="text-sm text-gray-500">
                Group health insurance for you and your employees at exclusive association rates{' '}
                <em>(coming soon)</em>
              </p>
            </div>

            {/* Mission statement */}
            <div className="text-center border-t border-gray-200 pt-6">
              <p className="text-xs text-gray-400 mb-3">SAWA exists to</p>
              <p className="font-serif text-2xl font-bold text-navy leading-tight">
                STRENGTHEN.<br />PROTECT.<br />ADVANCE.
              </p>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                Independent aesthetic and wellness providers across the Southeast through education, advocacy,
                collaboration, and collective buying power.
              </p>
            </div>
          </div>

          {/* Right panel */}
          <div>
            <div className="bg-navy p-8 text-center mb-6">
              <h2 className="font-serif text-xl text-white font-bold mb-1">ALL THE BENEFITS.</h2>
              <h2 className="font-serif text-xl text-gold font-bold mb-8">ONE POWERFUL COMMUNITY.</h2>
              <div className="space-y-5">
                {pillars.map((p) => (
                  <div key={p.label} className="flex items-start gap-3 text-left">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-1.5" />
                    <div>
                      <p className="text-[11px] font-bold tracking-widest text-gold">{p.label}</p>
                      <p className="text-xs text-white/60">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gold/30 p-6 text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-navy mb-2">JOIN SAWA TODAY!</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                Invest in your future.<br />Elevate your practice.<br />Be part of something bigger.
              </p>
              <Link
                to="/join"
                className="inline-block bg-olive text-white font-bold tracking-widest text-xs px-6 py-3 hover:bg-olive/90 transition-colors"
              >
                JOIN NOW
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom bar */}
      <section className="bg-navy py-8 px-4 text-center">
        <p className="font-script italic text-white/70 text-xl mb-2">Built for You. Backed by Community.</p>
        <p className="text-[10px] font-bold tracking-widest text-gold/60">
          EDUCATE &nbsp;•&nbsp; ADVOCATE &nbsp;•&nbsp; COLLABORATE &nbsp;•&nbsp; ELEVATE
        </p>
      </section>
    </>
  );
}
