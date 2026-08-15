import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselSlide = {
  src: string;
  alt: string;
  caption?: string;
  subcaption?: string;
};

type ImageCarouselProps = {
  slides: CarouselSlide[];
  interval?: number;
  className?: string;
  aspectClassName?: string;
  showArrows?: boolean;
  showDots?: boolean;
  showCaptions?: boolean;
  captionColor?: string;
};

export function ImageCarousel({
  slides,
  interval = 5000,
  className = "",
  aspectClassName = "aspect-[16/8]",
  showArrows = true,
  showDots = true,
  showCaptions = true,
  captionColor = "#fff",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
  }, [slides.length]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, interval, slides.length, current]);

  if (slides.length === 0) return null;

  return (
    <div
      className={`relative overflow-hidden ${aspectClassName} ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galería de imágenes"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Dark gradient overlay for caption readability */}
      {showCaptions && (
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, transparent 60%)' }}
        />
      )}

      {showCaptions && slides[current]?.caption && (
        <div className="absolute bottom-0 inset-x-0 px-6 md:px-10 pb-6 md:pb-8">
          <div className="flex gap-1.5 mb-2">
            {['#FF5A4E', '#FFAA5A', '#FFD84A', '#7DD962', '#62BFFF'].map((c, i) => (
              <span key={i} className="w-5 h-1 rounded-full" style={{ background: c }} />
            ))}
          </div>
          {slides[current].caption && (
            <div className="text-lg md:text-2xl font-bold" style={{ color: captionColor, fontFamily: 'Nunito, sans-serif' }}>
              {slides[current].caption}
            </div>
          )}
          {slides[current].subcaption && (
            <div className="mt-1 text-sm md:text-base" style={{ color: captionColor, opacity: 0.85 }}>
              {slides[current].subcaption}
            </div>
          )}
        </div>
      )}

      {showArrows && slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-black/25 text-white backdrop-blur-sm hover:bg-black/45 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Imagen siguiente"
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-black/25 text-white backdrop-blur-sm hover:bg-black/45 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {showDots && slides.length > 1 && (
        <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6' : 'w-2'}`}
              style={{ background: i === current ? '#fff' : 'rgba(255,255,255,0.45)' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
