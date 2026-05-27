import { Link } from 'react-router-dom';

const responsibilities = [
  {
    title: 'MEMBER SUPPORT & INTERACTION',
    body: 'Martha P. is your first point of contact for questions, guidance, resources, and general support. She ensures every member feels heard, valued, and supported.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'INTER-OFFICE COORDINATION',
    body: 'She keeps the SAWA team organized by managing tasks, tracking progress, and ensuring nothing falls through the cracks.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'MARKETING & RECRUITMENT SUPPORT',
    body: 'She assists with outreach, promotional messaging, content creation, and recruitment initiatives to help grow the SAWA community.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: 'REMINDERS & FOLLOW-UPS',
    body: 'Martha P. handles reminders, follow-ups, and important deadlines so our team and members stay on schedule and supported.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: 'COMMUNICATION COORDINATION',
    body: 'Martha P. manages member communications, newsletters, announcements, and updates to keep everyone informed and connected.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'RESOURCE MANAGEMENT',
    body: 'She organizes documents, guides, templates, and member resources for easy access and efficient information flow.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    title: 'EVENT & PROGRAM ASSISTANCE',
    body: 'From event reminders to registration support, Martha P. helps ensure our programs run smoothly and members never miss an opportunity to engage.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'DATA & INSIGHTS SUPPORT',
    body: 'Martha P. helps gather insights, track engagement, and support strategic growth through data-driven assistance.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function MarthaP() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-gold/80 mb-3">THE SAWA SECRETARY</p>
            <h1 className="font-serif text-4xl md:text-5xl text-navy mb-2">
              Meet <span className="font-script italic font-normal">Martha P.</span>
            </h1>
            <p className="text-[11px] font-bold tracking-widest text-navy/50 mb-5">
              AI ASSISTANT &amp; MEMBER SUPPORT SPECIALIST
            </p>
            <div className="w-16 h-px bg-gold mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Martha P. is SAWA's AI Assistant and Secretary, dedicated to supporting our members, streamlining
              communication, and helping our association operate with efficiency, organization, and heart.
            </p>
            <p className="text-gray-600 leading-relaxed italic">
              Named in loving memory of Martha Post—whose kindness, loyalty, and professionalism left a lasting
              impact—Martha P. embodies the same commitment to people, service, and excellence.
            </p>
          </div>

          {/* Photo placeholder */}
          <div className="bg-slate-200 aspect-[3/4] max-h-[500px] rounded-sm flex items-center justify-center">
            <div className="text-center text-slate-400">
              <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-sm">Martha P. Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="bg-white px-4 md:px-8 py-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 border border-gray-200 p-8">
          <div className="w-16 h-16 rounded-full border-2 border-gold/30 flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22C6 16 2 12 2 8c0-2.5 2-4 4-4 1.5 0 3 .8 4 2 1 2 2 4 2 6 0-2 1-4 2-6 1-1.2 2.5-2 4-2 2 0 4 1.5 4 4 0 4-4 8-10 14z" />
            </svg>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy mb-2">
              Here to Support. Here to Connect. Here for You.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Martha P. works behind the scenes every day to help our members succeed and our association thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="bg-cream py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-gold/30 flex-1 max-w-24" />
              <p className="text-[11px] font-bold tracking-widest text-navy/50">MARTHA P.'S RESPONSIBILITIES AT SAWA</p>
              <div className="h-px bg-gold/30 flex-1 max-w-24" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibilities.map((r) => (
              <div key={r.title} className="flex gap-4 bg-white p-6 border border-gray-100">
                <div className="text-gold/70 shrink-0 mt-0.5">{r.icon}</div>
                <div>
                  <h3 className="text-[11px] font-bold tracking-widest text-navy mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy section */}
      <section className="bg-white py-14 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">Built on Legacy. Powered by Purpose.</h2>
          <p className="text-gray-600 leading-relaxed">
            Martha P. carries forward the spirit of Martha Post—someone who led with compassion, loyalty, and dedication
            for over 45 years. Her legacy lives on through the work and heart of Martha P., serving the SAWA community
            every day.
          </p>
        </div>
      </section>

      {/* CTA card */}
      <section className="bg-cream py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl text-navy mb-1">Have a Question or Need Assistance?</h3>
              <p className="text-gray-500">Martha P. is here to help!</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="bg-olive text-white font-bold tracking-widest text-xs px-7 py-3.5 hover:bg-olive/90 transition-colors whitespace-nowrap"
              >
                CONTACT MARTHA P.
              </Link>
              <div className="text-center sm:text-left">
                <p className="text-sm text-navy font-medium">martha.p@sawa.org</p>
                <p className="text-xs text-gray-400">Mon – Fri &nbsp; 8:00 AM – 5:00 PM CT</p>
              </div>
            </div>
          </div>
          {/* Handwritten note */}
          <p className="font-script italic text-gold/70 text-xl text-right mt-4">We're here for you!</p>
        </div>
      </section>
    </>
  );
}
