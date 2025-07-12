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
        <div className="text-center mb-16">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 border border-white/20 hover:border-purple-400/50 shadow-lg hover:shadow-purple-500/25"
              aria-label="Previous slide"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              disabled={isTransitioning}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 border border-white/20 hover:border-purple-400/50 shadow-lg hover:shadow-purple-500/25"
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
              className="flex-shrink-0 w-full snap-start transform transition-all duration-500 hover:scale-105"
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
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out shadow-lg"
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
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125 shadow-lg shadow-purple-500/50'
                  : 'bg-white/30 hover:bg-white/50 hover:shadow-lg'
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
            className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full text-white text-sm hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-white/20 hover:border-purple-400/50 shadow-lg"
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