import { useEffect, useRef } from 'react';
import sawaVideo from '../assets/sawa_video.mp4';

interface Props {
  onComplete: () => void;
}

export default function LoginAnimation({ onComplete }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    video.addEventListener('ended', onComplete);
    return () => video.removeEventListener('ended', onComplete);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src={sawaVideo}
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
