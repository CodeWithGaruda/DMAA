import React, { useEffect, useState } from "react";

export type MediaItem = {
  type: "image" | "video";
  src: string;
};

interface HeroMediaBackdropProps {
  media: MediaItem[];
  height?: string;
  caption?: string;
  subCaption?: string; // 👈 NEW
  blurStrength?: number;
}

const IMAGE_DURATION = 3000;

const HeroMediaBackdrop: React.FC<HeroMediaBackdropProps> = ({
  media,
  height = "80vh",
  caption = "Dragon Martial Arts",
  subCaption = "Discipline • Strength • Balance",
  blurStrength = 0,
}) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const current = media[index];

  const triggerNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % media.length);
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    if (current.type === "image") {
      const timer = setTimeout(triggerNext, IMAGE_DURATION);
      return () => clearTimeout(timer);
    }
  }, [current]);

  const blurStyle =
    blurStrength > 0 ? { filter: `blur(${blurStrength}px)` } : undefined;

  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ height }}
    >
      {/* Media */}
      {current.type === "image" ? (
        <img
          key={current.src}
          src={current.src}
          alt=""
          style={blurStyle}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-700 ease-in-out
            ${fade ? "opacity-100 scale-105" : "opacity-0 scale-100"}
          `}
        />
      ) : (
        <video
          key={current.src}
          src={current.src}
          autoPlay
          muted
          playsInline
          onEnded={triggerNext}
          style={blurStyle}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-700 ease-in-out
            ${fade ? "opacity-100 scale-105" : "opacity-0 scale-100"}
          `}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Caption */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div
          className="
            bg-black/30 backdrop-blur-sm rounded-2xl
            px-6 sm:px-10 py-5 sm:py-7
            text-center
            animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out
          "
        >
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-extrabold
              bg-gradient-to-r from-white via-gray-100 to-gray-300
              bg-clip-text text-transparent
              tracking-wide
              leading-[1.2]
              drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]
            "
          >
            {caption}
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-gray-200 tracking-wide">
            {subCaption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroMediaBackdrop;
