const roles = [
  {
    title: 'NURSE PRACTITIONER',
    body: 'Advanced practice provider with extensive clinical experience and a passion for aesthetic medicine.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'PROFESSOR',
    body: 'Professor of Nurse Practitioner studies in Louisiana, dedicated to mentoring and educating the next generation of advanced practice providers.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'CLINICAL DIRECTOR',
    body: 'Leads clinical standards, training, and education programs for SAWA to ensure excellence, safety, and innovation.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'OWNER & OPERATOR',
    body: 'Owner and operator of Serenity MedAesthetics in Youngsville, Louisiana, where she combines science, artistry, and compassion in every patient experience.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function ChristyLenahan() {
  return (
    <>
      {/* Header — photo + name/title/intro (matches Brandi's opening section) */}
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

          {/* Name, title & intro */}
          <div className="md:col-span-3">
            <h1 className="font-serif text-4xl md:text-5xl text-navy mb-2">Christy Lenahan, APRN</h1>
            <div className="w-16 h-px bg-gold mb-3" />
            <p className="text-[11px] font-bold tracking-widest text-gold mb-1">BOARD MEMBER | CLINICAL DIRECTOR</p>
            <p className="text-sm font-semibold tracking-wider text-navy/60 uppercase mb-8">
              Southern Aesthetics &amp; Wellness Association (SAWA)
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Christy Lenahan, APRN, is a highly respected nurse practitioner, educator, and aesthetic medicine expert
              with a proven track record of clinical excellence, leadership, and innovation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a <strong className="text-navy">Board Member and Clinical Director</strong> of the Southern Aesthetics
              and Wellness Association (SAWA), Christy plays a pivotal role in advancing the standards of aesthetic and
              wellness care across the region. She was brought on board for her unique blend of clinical expertise,
              educational leadership, and real-world experience in both running a successful medical aesthetics practice
              and training others to do the same.
            </p>
          </div>
        </div>
      </section>

      {/* Bio + roles sidebar (matches Brandi's main section) */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Roles sidebar */}
          <div className="md:col-span-2 space-y-8">
            {roles.map((r) => (
              <div key={r.title} className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5 text-gold">
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-[10px] font-bold tracking-widest text-gold mb-1">{r.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Full bio */}
          <div className="md:col-span-3 space-y-5 text-gray-600 leading-relaxed">
            <p className="text-[11px] font-bold tracking-widest text-navy/50">LEADER. EDUCATOR. CLINICAL EXPERT.</p>
            <div className="w-10 h-px bg-gold" />
            <p>
              Christy oversees SAWA's clinical training programs and{' '}
              <strong className="text-navy">educational</strong> initiatives, ensuring that members and participants
              receive the highest quality training rooted in evidence-based practices, safety, and ethical standards.
              Her guidance helps shape the future of the aesthetic and wellness industry by delivering meaningful,
              hands-on education that empowers providers and elevates patient care.
            </p>
            <p>
              In addition to her role with SAWA,{' '}
              <strong className="text-navy">Christy is the owner and operator</strong> of Serenity MedAesthetics in
              Youngsville, Louisiana, where she leads a thriving practice known for its personalized care, advanced
              treatments, and outstanding results.
            </p>
            <p>
              As a <strong className="text-navy">Professor of Nurse Practitioner</strong> studies in Louisiana, Christy
              is passionate about teaching and mentoring the next generation of healthcare providers. Her commitment to
              education and clinical leadership makes her an invaluable asset to SAWA and the entire aesthetic community.
            </p>
          </div>
        </div>
      </section>

      {/* Quote bar (navy footer — mirrors Brandi's values bar) */}
      <section className="bg-navy py-14 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-8 h-8 text-gold/40 mx-auto mb-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-script italic text-white/80 text-xl md:text-2xl leading-relaxed mb-6">
            Education is the foundation of excellence. My goal is to empower providers with the knowledge, skills, and
            confidence to deliver safe, effective, and transformative care.
          </p>
          <p className="text-[11px] font-bold tracking-widest text-gold">— Christy Lenahan, APRN</p>
        </div>
      </section>

      {/* Footer tagline (matches Brandi's closing section) */}
      <section className="bg-cream py-10 px-4 text-center border-t border-gray-200">
        <div className="flex justify-center mb-3">
          <svg className="w-8 h-8 text-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 22C6 16 2 12 2 8c0-2.5 2-4 4-4 1.5 0 3 .8 4 2 1 2 2 4 2 6 0-2 1-4 2-6 1-1.2 2.5-2 4-2 2 0 4 1.5 4 4 0 4-4 8-10 14z" />
          </svg>
        </div>
        <p className="font-script italic text-xl text-navy/70">
          Leader. Educator. Clinical Expert.
        </p>
      </section>
    </>
  );
}
