import { Link, useLocation } from 'react-router-dom';

export default function Placeholder() {
  const { pathname } = useLocation();

  return (
    <section className="bg-cream min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <p className="text-[10px] font-bold tracking-widest text-gold mb-3">COMING SOON</p>
        <h1 className="font-serif text-3xl text-navy mb-3">Page Under Construction</h1>
        <div className="w-12 h-px bg-gold mx-auto mb-5" />
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded text-navy/60">{pathname}</span>
        </p>
        <p className="text-sm text-gray-400 mb-8">This page is being built. Check back soon.</p>
        <Link
          to="/"
          className="inline-block bg-olive text-white font-bold tracking-widest text-xs px-8 py-3.5 hover:bg-olive/90 transition-colors"
        >
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
}
