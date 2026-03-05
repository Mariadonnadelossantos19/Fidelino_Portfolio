import React, { useState, useEffect, useRef, useCallback } from 'react';

const CarouselSlider = ({ 
  items, 
  title, 
  subtitle, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  itemsPerView = 3,
  itemsPerViewMobile = 1,
  simple = false,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [effectiveItemsPerView, setEffectiveItemsPerView] = useState(itemsPerView);

  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Responsive: use itemsPerViewMobile below 640px
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    const update = () => setEffectiveItemsPerView(mq.matches ? itemsPerView : itemsPerViewMobile);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [itemsPerView, itemsPerViewMobile]);

  // Calculate total slides and max index
  const totalSlides = Math.max(0, items.length - effectiveItemsPerView);
  const maxIndex = Math.max(0, totalSlides);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, autoPlay, autoPlayInterval, maxIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  // Navigation functions with transition handling
  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [maxIndex, isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [maxIndex, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [maxIndex, isTransitioning]);

  // Touch/Swipe functionality
  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    if (!carouselRef.current) return;
    const currentScrollLeft = carouselRef.current.scrollLeft;
    const children = carouselRef.current.children;
    let newIndex = 0;
    for (let i = 0; i < children.length; i++) {
      const childLeft = children[i].offsetLeft;
      if (currentScrollLeft >= childLeft - 20) newIndex = i;
    }
    goToSlide(Math.min(newIndex, maxIndex));
  }, [goToSlide, maxIndex]);

  // Mouse drag functionality
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (!carouselRef.current) return;
    const currentScrollLeft = carouselRef.current.scrollLeft;
    const children = carouselRef.current.children;
    let newIndex = 0;
    for (let i = 0; i < children.length; i++) {
      const childLeft = children[i].offsetLeft;
      if (currentScrollLeft >= childLeft - 20) newIndex = i;
    }
    goToSlide(Math.min(newIndex, maxIndex));
  }, [goToSlide, maxIndex]);

  // Update scroll position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children[currentIndex]) {
      const targetLeft = carouselRef.current.children[currentIndex].offsetLeft;
      carouselRef.current.scrollTo({
        left: targetLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, effectiveItemsPerView]);

  return (
    <div className={`relative w-full max-w-full min-w-0 overflow-hidden ${className}`}>
      {/* Header with enhanced styling */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Carousel: arrows outside, track in middle */}
      <div className="relative group flex items-center gap-2 md:gap-4 w-full min-w-0">
        {/* Left arrow - outside */}
        {showArrows && items.length > effectiveItemsPerView && (
          <button
            onClick={goToPrev}
            disabled={isTransitioning}
            className="flex-shrink-0 z-20 min-w-[44px] min-h-[44px] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors border border-slate-200 dark:border-slate-600 shadow touch-manipulation"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Carousel track */}
        <div
          ref={carouselRef}
          className="flex-1 min-w-0 flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={(e) => {
            handleMouseLeave(e);
            setIsDragging(false);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full snap-start"
              style={{ 
                width: effectiveItemsPerView === 1 ? '100%' : `calc((100% - 2rem * (${effectiveItemsPerView} - 1)) / ${effectiveItemsPerView})`,
                minWidth: effectiveItemsPerView === 1 ? '100%' : `calc((100% - 2rem * (${effectiveItemsPerView} - 1)) / ${effectiveItemsPerView})`
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Right arrow - outside */}
        {showArrows && items.length > effectiveItemsPerView && (
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="flex-shrink-0 z-20 min-w-[44px] min-h-[44px] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors border border-slate-200 dark:border-slate-600 shadow touch-manipulation"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Progress bar (non-simple only) */}
      {!simple && (
        <div className="relative h-8 flex justify-center">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-white/20">
            <div 
              className="h-full bg-teal-500 rounded-full transition-all duration-700 ease-out"
              style={{ 
                width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` 
              }}
            />
          </div>
        </div>
      )}

      {/* Dots Navigation */}
      {showDots && items.length > effectiveItemsPerView && (
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-12 py-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all duration-300 touch-manipulation p-0 border-0"
              aria-label={`Go to slide ${index + 1}`}
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-teal-500 w-3 h-3 sm:w-4 sm:h-4 scale-125'
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500 w-2.5 h-2.5 sm:w-4 sm:h-4'
                }`}
                aria-hidden
              />
            </button>
          ))}
        </div>
      )}

      {/* Enhanced Auto-play Indicator */}
      {autoPlay && (
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-3 px-6 py-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 text-sm hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600"
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              isAutoPlaying ? 'bg-green-400 shadow-lg shadow-green-400/50' : 'bg-red-400 shadow-lg shadow-red-400/50'
            }`} />
            <span className="font-medium">{isAutoPlaying ? 'Auto-play On' : 'Auto-play Off'}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CarouselSlider; 