import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

export default function Join() {
  const navigate = useNavigate();
  const { refresh } = useAuth();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }

    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);
    try {
      await axios.post('/api/auth/register', {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      }, { withCredentials: true });

      await refresh();
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-cream flex">

      {/* Left panel — brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-white flex-col justify-center px-16 border-r border-gray-100">
        <p className="text-[11px] font-bold tracking-widest text-gold mb-6">SAWA MEMBERSHIP</p>
        <h2 className="font-serif text-4xl xl:text-5xl text-navy leading-tight mb-4">
          Join the Premier<br />
          <span className="font-script italic font-normal">Aesthetics &amp; Wellness</span><br />
          Association.
        </h2>
        <div className="w-16 h-px bg-gold my-6" />
        <ul className="space-y-4">
          {[
            'Exclusive member discounts on injectables & supplies',
            'CME credits and continuing education',
            'Legal counsel at association rates',
            'A thriving community of Southeast providers',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-500 text-sm">
              <span className="text-gold mt-0.5 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right panel — form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <p className="text-[11px] font-bold tracking-widest text-gold mb-2">CREATE YOUR ACCOUNT</p>
          <h1 className="font-serif text-3xl text-navy mb-1">Join SAWA</h1>
          <p className="text-sm text-gray-500 mb-8">
            Already a member?{' '}
            <Link to="/login" className="text-gold hover:underline font-medium">
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold tracking-widest text-navy mb-1.5">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) => update('firstName', e.target.value)}
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gold"
                  placeholder="Johnny"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-widest text-navy mb-1.5">
                  LAST NAME
                </label>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={(e) => update('lastName', e.target.value)}
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gold"
                  placeholder="LaBruzzo"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-widest text-navy mb-1.5">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gold"
                placeholder="johnny@mypractice.com"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-widest text-navy mb-1.5">
                PASSWORD
              </label>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => update('password', e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gold"
                placeholder="Min. 8 characters"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-widest text-navy mb-1.5">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                required
                value={form.confirm}
                onChange={(e) => update('confirm', e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gold"
                placeholder="Re-enter password"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-olive text-white font-bold tracking-widest text-xs py-4 hover:bg-olive/90 transition-colors disabled:opacity-50 mt-2"
            >
              {loading ? 'CREATING ACCOUNT…' : 'CREATE ACCOUNT'}
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
            By creating an account you agree to SAWA's terms of service and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
