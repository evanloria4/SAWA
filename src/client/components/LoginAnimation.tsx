import { useEffect, useRef } from 'react';
import sawaVideo from '../assets/sawa_video.mp4';

const MAX_DURATION_MS = 4000;

interface Props {
  onComplete: () => void;
}

export default function LoginAnimation({ onComplete }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play();

    const timer = setTimeout(onComplete, MAX_DURATION_MS);
    video.addEventListener('ended', onComplete);

    return () => {
      clearTimeout(timer);
      video.removeEventListener('ended', onComplete);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-cream flex items-center justify-center">
      <video
        ref={videoRef}
        src={sawaVideo}
        muted
        playsInline
        className="w-full max-w-2xl"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
}
