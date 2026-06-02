import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await axios.post('/api/auth/login', form, { withCredentials: true });
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
      <div className="hidden lg:flex lg:w-1/2 bg-navy flex-col justify-center px-16">
        <p className="text-[11px] font-bold tracking-widest text-gold mb-6">MEMBER PORTAL</p>
        <h2 className="font-serif text-4xl xl:text-5xl text-white leading-tight mb-4">
          Welcome Back to<br />
          <span className="font-script italic font-normal">SAWA.</span>
        </h2>
        <div className="w-16 h-px bg-gold my-6" />
        <p className="text-white/60 text-sm leading-relaxed max-w-sm">
          Sign in to access your member benefits, resources, and community — all in one place.
        </p>
      </div>

      {/* Right panel — form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <p className="text-[11px] font-bold tracking-widest text-gold mb-2">MEMBER SIGN IN</p>
          <h1 className="font-serif text-3xl text-navy mb-1">Sign In</h1>
          <p className="text-sm text-gray-500 mb-8">
            Not a member yet?{' '}
            <Link to="/join" className="text-gold hover:underline font-medium">
              Join SAWA
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="jane@mypractice.com"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-[11px] font-bold tracking-widest text-navy">
                  PASSWORD
                </label>
                <Link to="/forgot-password" className="text-[11px] text-gold hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => update('password', e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gold"
                placeholder="Enter your password"
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
              {loading ? 'SIGNING IN…' : 'SIGN IN'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
