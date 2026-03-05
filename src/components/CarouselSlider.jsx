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
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Calculate total slides and max index
  const totalSlides = Math.max(0, items.length - itemsPerView);
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
    const currentScrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = carouselRef.current.offsetWidth / itemsPerView;
    const newIndex = Math.round(currentScrollLeft / itemWidth);
    goToSlide(newIndex);
  }, [goToSlide, itemsPerView]);

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
    const currentScrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = carouselRef.current.offsetWidth / itemsPerView;
    const newIndex = Math.round(currentScrollLeft / itemWidth);
    goToSlide(newIndex);
  }, [goToSlide, itemsPerView]);

  // Update scroll position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth / itemsPerView;
      carouselRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, itemsPerView]);

  return (
    <div className={`relative ${className}`}>
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

      {/* Enhanced Carousel Container */}
      <div className="relative group">
        {/* Gradient Overlays for better visual effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        {/* Enhanced Navigation Arrows */}
        {showArrows && items.length > itemsPerView && (
          <>
            <button
              onClick={goToPrev}
              disabled={isTransitioning}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors opacity-0 group-hover:opacity-100 border border-slate-200 dark:border-slate-600 shadow"
              aria-label="Previous slide"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              disabled={isTransitioning}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors opacity-0 group-hover:opacity-100 border border-slate-200 dark:border-slate-600 shadow"
              aria-label="Next slide"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Enhanced Carousel Track */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
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
                width: `calc(100% / ${itemsPerView} - 1.5rem)`,
                minWidth: `calc(100% / ${itemsPerView} - 1.5rem)`
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Enhanced Progress Bar */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-white/20">
          <div 
            className="h-full bg-teal-500 rounded-full transition-all duration-700 ease-out"
            style={{ 
              width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` 
            }}
          />
        </div>
      </div>

      {/* Enhanced Dots Navigation */}
      {showDots && items.length > itemsPerView && (
        <div className="flex justify-center items-center space-x-3 mt-12">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentIndex
                  ? 'bg-teal-500 scale-125'
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
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