import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { refresh } = useAuth();
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
      await refresh();
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <p className="text-[11px] font-bold tracking-widest text-gold mb-2">MEMBER SIGN IN</p>
        <h1 className="font-serif text-3xl text-navy mb-1">Sign In</h1>
        <div className="w-12 h-px bg-gold my-4" />
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
              placeholder="johnny@mypractice.com"
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
  );
}
