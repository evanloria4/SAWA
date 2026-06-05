import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ToastProps {
  message: string;
  linkLabel?: string;
  linkTo?: string;
  onDismiss: () => void;
  durationMs?: number;
}

export default function Toast({ message, linkLabel, linkTo, onDismiss, durationMs = 6000 }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDismiss, 300);
    }, durationMs);
    return () => {
      cancelAnimationFrame(show);
      clearTimeout(timer);
    };
  }, [durationMs, onDismiss]);

  function dismiss() {
    setVisible(false);
    setTimeout(onDismiss, 300);
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-sm bg-navy text-white shadow-lg transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="w-full h-0.5 bg-gold" />
      <div className="px-5 py-4 flex items-start gap-4">
        <p className="text-sm leading-relaxed flex-1">{message}</p>
        <button onClick={dismiss} className="text-white/40 hover:text-white transition-colors shrink-0 mt-0.5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {linkLabel && linkTo && (
        <div className="px-5 pb-4">
          <Link
            to={linkTo}
            onClick={dismiss}
            className="text-[11px] font-bold tracking-widest text-gold hover:text-gold/80 transition-colors"
          >
            {linkLabel} →
          </Link>
        </div>
      )}
    </div>
  );
}
