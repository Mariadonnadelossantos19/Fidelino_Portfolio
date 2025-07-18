import { useEffect, useRef, useState } from 'react';

// Custom hook para sa Intersection Observer
export default function useInView(options = { threshold: 0.15, once: true }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let observer;
    observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.once && observer) observer.disconnect();
        } else if (!options.once) {
          setInView(false);
        }
      },
      options
    );
    observer.observe(node);
    return () => observer && observer.disconnect();
  }, [options]);

  return [ref, inView];
} 