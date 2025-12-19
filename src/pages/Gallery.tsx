import React, { useState, useEffect } from "react";

type MediaItem = {
  src: string;
  type: "image" | "video";
};

/* ---------------------------------------
   AUTO-LOAD MEDIA FROM FOLDERS (Vite)
---------------------------------------- */

// Images
const imageModules = import.meta.glob(
  "../assets/gallery/photos/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

// Videos
const videoModules = import.meta.glob(
  "../assets/gallery/videos/*.{mp4,webm,ogg}",
  { eager: true }
);

const images: MediaItem[] = Object.values(imageModules).map((mod: any) => ({
  src: mod.default,
  type: "image",
}));

const videos: MediaItem[] = Object.values(videoModules).map((mod: any) => ({
  src: mod.default,
  type: "video",
}));

/* ---------------------------------------
   CUSTOM SVG ICONS
---------------------------------------- */

const CloseIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const PlayIcon = () => (
  <svg
    className="w-6 h-6 sm:w-7 sm:h-7 ml-1"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ZoomIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
    />
  </svg>
);

const ImageIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const VideoIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"all" | "photos" | "videos">(
    "all"
  );

  const allMedia = [...images, ...videos];

  const filteredMedia =
    activeTab === "photos"
      ? images
      : activeTab === "videos"
      ? videos
      : allMedia;

  const openLightbox = (item: MediaItem, index: number) => {
    setCurrentItem(item);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentItem(null);
  };

  // Handle body overflow when lightbox opens/closes
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxOpen]);

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredMedia.length
        : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;

    setCurrentIndex(newIndex);
    setCurrentItem(filteredMedia[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-3 sm:px-6 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Our Moments
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Training moments, discipline, and the spirit of the Dragon.
          </p>
        </div>

        {/* Stats & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Stats */}
            <div className="flex gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="text-blue-600">
                  <ImageIcon />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Photos</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900">
                    {images.length}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-purple-600">
                  <VideoIcon />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Videos</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900">
                    {videos.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
              {[
                { key: "all" as const, label: "All" },
                { key: "photos" as const, label: "Photos" },
                { key: "videos" as const, label: "Videos" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab.key
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Media Grid */}
        {filteredMedia.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {filteredMedia.map((item, index) => (
              <MediaCard
                key={index}
                item={item}
                index={index}
                onClick={() => openLightbox(item, index)}
              />
            ))}
          </div>
        ) : (
          <EmptyState activeTab={activeTab} />
        )}

        {/* Lightbox */}
        {lightboxOpen && currentItem && (
          <Lightbox
            item={currentItem}
            onClose={closeLightbox}
            onNext={() => navigateLightbox("next")}
            onPrev={() => navigateLightbox("prev")}
            currentIndex={currentIndex}
            totalItems={filteredMedia.length}
          />
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------
   REUSABLE COMPONENTS
---------------------------------------- */

function MediaCard({
  item,
  index,
  onClick,
}: {
  item: MediaItem;
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={`Gallery item ${index + 1}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <>
            <video
              src={item.src}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <div className="text-slate-900">
                  <PlayIcon />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="text-white text-xs sm:text-sm font-medium">
                {item.type === "image" ? "Photo" : "Video"}
              </span>
              <div className="text-white">
                <ZoomIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lightbox({
  item,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalItems,
}: {
  item: MediaItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalItems: number;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors text-white"
      >
        <CloseIcon />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
        <span className="text-white text-sm font-medium">
          {currentIndex + 1} / {totalItems}
        </span>
      </div>

      {/* Navigation Buttons */}
      {totalItems > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors text-white"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors text-white"
          >
            <ChevronRightIcon />
          </button>
        </>
      )}

      {/* Media Content */}
      <div
        className="max-w-6xl max-h-[85vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt="Lightbox"
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <video
            src={item.src}
            className="w-full h-full object-contain rounded-lg"
            controls
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>
  );
}

function EmptyState({ activeTab }: { activeTab: "all" | "photos" | "videos" }) {
  const message =
    activeTab === "photos"
      ? "No photos added yet."
      : activeTab === "videos"
      ? "No videos added yet."
      : "No media added yet.";

  const Icon =
    activeTab === "photos"
      ? ImageIcon
      : activeTab === "videos"
      ? VideoIcon
      : ImageIcon;

  return (
    <div className="bg-white rounded-2xl border-2 border-dashed border-slate-300 p-12 sm:p-16 text-center">
      <div className="text-slate-400 mx-auto mb-4 flex justify-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
          <div className="scale-[2.5] sm:scale-[3.2]">
            <Icon />
          </div>
        </div>
      </div>
      <p className="text-slate-500 text-base sm:text-lg font-medium">
        {message}
      </p>
      <p className="text-slate-400 text-sm mt-2">
        Add your martial arts moments to get started
      </p>
    </div>
  );
}
