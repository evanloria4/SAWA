const sidebar = [
  {
    title: 'MEDICAL EXPERTISE',
    items: [
      'Emergency Medicine (30+ years)',
      'Aesthetic & Wellness Medicine',
      'Advanced Patient Care',
      'Clinical Standards & Safety',
    ],
  },
  {
    title: 'LEGAL EXPERTISE',
    items: [
      'Member, Louisiana State Bar Association',
      'Healthcare Policy & Compliance',
      'Organizational Ethics',
      'Strategic Legal Guidance',
    ],
  },
  {
    title: 'ROLES AT SAWA',
    items: [
      'Founding Member',
      'Board Member',
      'Medical Director',
      'Policy & Compliance Advisor',
    ],
  },
];

export default function DrLenahan() {
  return (
    <>
      {/* Header — photo + name/title/intro */}
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
            <h1 className="font-serif text-4xl md:text-5xl text-navy mb-2">Dr. Lee Lenahan</h1>
            <div className="w-16 h-px bg-gold mb-3" />
            <p className="text-[11px] font-bold tracking-widest text-gold mb-1">
              FOUNDING MEMBER, BOARD MEMBER &amp; MEDICAL DIRECTOR
            </p>
            <p className="text-sm font-semibold tracking-wider text-navy/60 uppercase mb-8">
              Southeast Aesthetics &amp; Wellness Association
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Dr. Lee Lenahan brings more than 30 years of medical experience to SAWA as a Founding Member, Board
              Member, and Medical Director. A highly respected emergency room physician, Dr. Lenahan has dedicated his
              career to delivering exceptional patient care, leading under pressure, and maintaining the highest
              standards of clinical excellence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In addition to his extensive emergency medicine background, Dr. Lenahan is the owner and operator of
              Serenity MedAesthetics in Youngsville, Louisiana, where he combines advanced medical knowledge with
              innovative aesthetic and wellness treatments.
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

          {/* Full bio */}
          <div className="md:col-span-3 space-y-5 text-gray-600 leading-relaxed">
            <p className="text-[11px] font-bold tracking-widest text-navy/50">
              PHYSICIAN. ATTORNEY. FOUNDING LEADER.
            </p>
            <div className="w-10 h-px bg-gold" />
            <p>
              His broad understanding of both acute care medicine and modern aesthetic practice provides SAWA with a
              unique and valuable perspective. Beyond medicine, Dr. Lenahan is also an attorney and a member of the
              Louisiana State Bar Association. His combined medical and legal expertise was a major reason he was
              brought on as a founding leader within SAWA.
            </p>
            <p>
              He plays a critical role in helping guide the organization's policies, ethical standards, compliance
              efforts, and long-term strategic direction. As Medical Director for SAWA, Dr. Lenahan helps ensure that
              the organization and its members operate with integrity, professionalism, and a strong commitment to
              patient safety.
            </p>
            <p>
              His leadership helps reinforce SAWA's mission to elevate standards within the aesthetic, wellness, and
              healthcare community while creating meaningful opportunities and resources for its members.
            </p>
            <p>
              Known for his calm leadership, attention to detail, and commitment to excellence, Dr. Lenahan continues
              to serve as a trusted advisor, physician, entrepreneur, and advocate for innovation in healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Navy bar */}
      <section className="bg-navy py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: 'PHYSICIAN', desc: '30+ years of emergency medicine and clinical excellence.' },
            { label: 'ATTORNEY', desc: 'Louisiana State Bar member guiding policy and compliance.' },
            { label: 'DIRECTOR', desc: 'Medical Director setting SAWA\'s clinical standards.' },
            { label: 'FOUNDER', desc: 'A driving force behind SAWA\'s creation and mission.' },
          ].map((v) => (
            <div key={v.label}>
              <p className="text-[11px] font-bold tracking-widest text-gold mb-2">{v.label}</p>
              <p className="text-xs text-white/60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing tagline */}
      <section className="bg-cream py-10 px-4 text-center border-t border-gray-200">
        <div className="flex justify-center mb-3">
          <svg className="w-8 h-8 text-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 22C6 16 2 12 2 8c0-2.5 2-4 4-4 1.5 0 3 .8 4 2 1 2 2 4 2 6 0-2 1-4 2-6 1-1.2 2.5-2 4-2 2 0 4 1.5 4 4 0 4-4 8-10 14z" />
          </svg>
        </div>
        <p className="font-script italic text-xl text-navy/70">
          Physician. Attorney. Advocate for Innovation in Healthcare.
        </p>
      </section>
    </>
  );
}
