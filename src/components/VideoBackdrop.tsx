import React from "react";

interface VideoBackdropProps {
  videoSrc: string;
  header: string;
  content: string;

  height?: string;
  overlayStrength?: number;
  blurStrength?: number;
}

const VideoBackdrop: React.FC<VideoBackdropProps> = ({
  videoSrc,
  header,
  content,
  height = "100vh",
  overlayStrength = 0.5,
  blurStrength = 0,
}) => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height }}>
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        style={{
          filter: blurStrength > 0 ? `blur(${blurStrength}px)` : "none",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayStrength})`,
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {header}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoBackdrop;
