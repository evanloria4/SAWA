import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import BrandiLaBruzzo from './pages/about/BrandiLaBruzzo';
import MarthaP from './pages/about/MarthaP';
import ChristyLenahan from './pages/about/ChristyLenahan';
import DrLenahan from './pages/about/DrLenahan';
import Benefits from './pages/membership/Benefits';
import Vendors from './pages/membership/Vendors';
import Join from './pages/auth/Join';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Placeholder from './pages/Placeholder';

function isProfileIncomplete(profile: Record<string, string | null>): boolean {
  const fields = ['phone', 'streetAddress', 'city', 'state', 'zip', 'practiceName', 'specialty'];
  return fields.some((f) => !profile[f]);
}

function AppShell() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [showToast, setShowToast] = useState(false);
  const seenLoggedOut = useRef(false);
  const pendingToast = useRef(false);

  // Check profile completeness after login and queue the toast
  useEffect(() => {
    if (loading) return;

    if (!user) {
      seenLoggedOut.current = true;
      return;
    }

    if (!seenLoggedOut.current) return;

    const key = `profileNudge_${user.id}`;
    if (sessionStorage.getItem(key)) return;

    fetch('/api/auth/profile', { credentials: 'include' })
      .then((r) => r.json())
      .then((profile) => {
        if (isProfileIncomplete(profile)) {
          sessionStorage.setItem(key, '1');
          pendingToast.current = true;
        }
      })
      .catch(() => {});
  }, [user, loading]);

  // Show the toast only once we've left the login page (animation is done)
  useEffect(() => {
    if (!pendingToast.current || location.pathname === '/login') return;
    pendingToast.current = false;
    const timer = setTimeout(() => setShowToast(true), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="font-sans bg-cream min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/brandi" element={<BrandiLaBruzzo />} />
          <Route path="/about/martha" element={<MarthaP />} />
          <Route path="/about/christy" element={<ChristyLenahan />} />
          <Route path="/about/dr-lenahan" element={<DrLenahan />} />
          <Route path="/membership/benefits" element={<Benefits />} />
          <Route path="/membership/vendors" element={<Vendors />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/resources" element={<ProtectedRoute><Placeholder /></ProtectedRoute>} />
          <Route path="/events" element={<ProtectedRoute><Placeholder /></ProtectedRoute>} />
          <Route path="*" element={<Placeholder />} />
        </Routes>
      </main>
      <Footer />
      {showToast && (
        <Toast
          message="Your profile is incomplete. Add your contact and practice details to get the most from your membership."
          linkLabel="COMPLETE YOUR PROFILE"
          linkTo="/profile"
          onDismiss={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}
