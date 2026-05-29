const sidebar = [
  {
    title: 'EDUCATION',
    items: [
      'LSU – Finance (Focus in Accounting)',
      "Dean's List",
      'Loyola University College of Law',
      'Academic Scholarship',
      'Law Review',
    ],
  },
  {
    title: 'PRACTICE AREAS',
    items: [
      'Tax Law',
      'General Business Law',
      'Medical Practice Defense',
      'Contracts & Agreements',
      'Legal Strategy & Compliance',
    ],
  },
  {
    title: 'FOCUS',
    items: [
      'Med Spas & Healthcare Businesses',
      'Business Owners & Entrepreneurs',
      'Legal Strategy & Planning',
      'Wealth Preservation',
      'Compliance & Risk Management',
    ],
  },
];

const values = [
  { label: 'EDUCATE', desc: 'Empowering providers through industry-leading education and resources.' },
  { label: 'COMPLY', desc: 'Supporting members with compliance, regulations, and risk management.' },
  { label: 'CONNECT', desc: 'Building a strong network of professionals and industry partners.' },
  { label: 'GROW', desc: 'Helping practices thrive through strategy, support, and shared resources.' },
  { label: 'ELEVATE', desc: 'Raising standards and excellence in aesthetics, wellness, and healthcare.' },
];

export default function BrandiLaBruzzo() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

          {/* Photo */}
          <div className="md:col-span-2">
            <div className="bg-slate-200 aspect-[3/4] rounded-sm flex items-center justify-center">
              <div className="text-center text-slate-400">
                <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm">Photo</p>
              </div>
            </div>
          </div>

          {/* Name & title */}
          <div className="md:col-span-3">
            <h1 className="font-serif text-4xl md:text-5xl text-navy mb-2">Brandi LaBruzzo, J.D.</h1>
            <div className="w-16 h-px bg-gold mb-3" />
            <p className="text-[11px] font-bold tracking-widest text-gold mb-1">FOUNDER, PRESIDENT &amp; CEO</p>
            <p className="text-sm font-semibold tracking-wider text-navy/60 uppercase mb-8">
              Southern Aesthetics and Wellness Association
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Brandi LaBruzzo is the Founder, President, and CEO of the{' '}
              <strong className="text-navy">Southern Aesthetics and Wellness Association</strong>, where she leads the
              organization's mission to support, educate, and strengthen independent aesthetics, wellness, and healthcare
              practices throughout the region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a passion for helping business owners succeed in an increasingly competitive and regulated healthcare
              environment, Brandi is committed to providing members with the resources, strategic guidance, educational
              opportunities, and industry support necessary to build compliant, profitable, and patient-focused practices.
            </p>
          </div>
        </div>
      </section>

      {/* Bio + sidebar */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-8">
            {sidebar.map((s) => (
              <div key={s.title}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[11px] font-bold tracking-widest text-gold">{s.title}</h3>
                </div>
                <ul className="space-y-1 pl-11">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bio text */}
          <div className="md:col-span-3 space-y-5 text-gray-600 leading-relaxed">
            <p>
              A Louisiana native, Brandi graduated from Louisiana State University with a degree in Finance and a
              concentration in Accounting, where she earned Dean's List honors for academic excellence. She later attended
              Loyola University College of Law on academic scholarship, graduating with distinction as a member of Law
              Review.
            </p>
            <p>
              For more than 20 years, Brandi has practiced law with a strong focus on business strategy, legal planning,
              and complex regulatory matters. Her legal experience includes tax law, general business law, medical practice
              defense, contract law, and healthcare-related legal strategy.
            </p>
            <p>
              Brandi has worked extensively with physicians, med spas, healthcare entrepreneurs, wellness providers, and
              business owners—helping them navigate complex legal and regulatory challenges while building strong,
              compliant, and profitable organizations.
            </p>
            <p>
              Brandi currently serves as an attorney with Lukinovich Law Firm, with offices in Baton Rouge and Metairie,
              Louisiana. In her practice, she partners with business owners to develop legal strategies that support
              growth, protect assets, ensure compliance, and preserve wealth for the future.
            </p>
            <p>
              Through the <strong className="text-navy">Southern Aesthetics and Wellness Association</strong>, Brandi
              brings together her legal background, business expertise, and passion for advocacy to create a stronger
              network for healthcare and wellness professionals. Her vision is to empower members through education,
              collaboration, compliance support, and access to industry-leading resources—so they can continue delivering
              exceptional care and services to their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values bar */}
      <section className="bg-navy py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {values.map((v) => (
            <div key={v.label}>
              <p className="text-[11px] font-bold tracking-widest text-gold mb-2">{v.label}</p>
              <p className="text-xs text-white/60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer tagline */}
      <section className="bg-cream py-10 px-4 text-center border-t border-gray-200">
        <p className="font-script italic text-xl text-navy/70 mb-2">
          Dedicated to helping practices succeed, stay compliant, and provide exceptional care.
        </p>
        <div className="flex justify-center mb-3">
          <svg className="w-8 h-8 text-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 22C6 16 2 12 2 8c0-2.5 2-4 4-4 1.5 0 3 .8 4 2 1 2 2 4 2 6 0-2 1-4 2-6 1-1.2 2.5-2 4-2 2 0 4 1.5 4 4 0 4-4 8-10 14z" />
          </svg>
        </div>
        <p className="text-sm text-gray-500 italic">
          Brandi is a proud mother of four children and the wife of John LaBruzzo.
        </p>
      </section>
    </>
  );
}
