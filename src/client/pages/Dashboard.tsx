import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();
  const name = user?.profile ? `${user.profile.firstName} ${user.profile.lastName}` : user?.email;

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-white border-b border-gray-100 py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-gold mb-2">MEMBER PORTAL</p>
          <h1 className="font-serif text-3xl md:text-4xl text-navy mb-1">
            Welcome back, <span className="font-script italic font-normal">{name}.</span>
          </h1>
          <div className="w-16 h-px bg-gold mt-4" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Membership', body: 'View your plan, status, and renewal date.', to: '/membership/benefits', cta: 'VIEW BENEFITS' },
            { title: 'Resources', body: 'Access member-only resources, tools, and templates.', to: '/resources', cta: 'BROWSE RESOURCES' },
            { title: 'Events', body: 'Upcoming webinars, conferences, and regional events.', to: '/events', cta: 'SEE EVENTS' },
          ].map((card) => (
            <div key={card.title} className="bg-white border border-gray-100 p-6 flex flex-col">
              <p className="text-[11px] font-bold tracking-widest text-gold mb-2">{card.title.toUpperCase()}</p>
              <h2 className="font-serif text-xl text-navy mb-3">{card.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{card.body}</p>
              <Link
                to={card.to}
                className="mt-6 inline-block text-center bg-olive text-white font-bold tracking-widest text-xs px-6 py-3 hover:bg-olive/90 transition-colors"
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
