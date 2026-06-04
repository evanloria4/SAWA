import { useState, FormEvent, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import LoginAnimation from '../../components/LoginAnimation';

type LoginError = 'email_not_found' | 'wrong_password' | 'generic' | null;

export default function Login() {
  const navigate = useNavigate();
  const { refresh } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState<LoginError>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoginError(null);
    setLoading(true);

    try {
      await axios.post('/api/auth/login', form, { withCredentials: true });
      await refresh();
      setShowAnimation(true);
    } catch (err: any) {
      const status = err.response?.status;
      if (status === 404) setLoginError('email_not_found');
      else if (status === 401) setLoginError('wrong_password');
      else setLoginError('generic');
    } finally {
      setLoading(false);
    }
  }

  const handleAnimationComplete = useCallback(() => navigate('/dashboard'), [navigate]);

  return (
    <>
      {showAnimation && <LoginAnimation onComplete={handleAnimationComplete} />}
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
              className={`w-full border px-4 py-3 text-sm focus:outline-none focus:border-gold ${
                loginError === 'email_not_found' ? 'border-red-400' : 'border-gray-300'
              }`}
              placeholder="johnny@mypractice.com"
            />
            {loginError === 'email_not_found' && (
              <p className="text-red-600 text-sm mt-1.5">
                No account found with that email.{' '}
                <Link to="/join" className="underline font-medium">Join SAWA?</Link>
              </p>
            )}
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
              className={`w-full border px-4 py-3 text-sm focus:outline-none focus:border-gold ${
                loginError === 'wrong_password' ? 'border-red-400' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            {loginError === 'wrong_password' && (
              <p className="text-red-600 text-sm mt-1.5">
                Incorrect password.{' '}
                <Link to="/forgot-password" className="underline font-medium">Forgot your password?</Link>
              </p>
            )}
          </div>

          {loginError === 'generic' && (
            <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
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
    </>
  );
}
