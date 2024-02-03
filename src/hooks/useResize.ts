import { RefObject, useEffect, useRef, useState } from 'react';

interface UseResizeReturn {
  containerRef: RefObject<HTMLDivElement>;
  height: number;
  width: number;
}

export const useResize = (): UseResizeReturn => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ height: number; width: number }>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    // Function to update containerWidth
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const { height, width } = containerRef.current.getBoundingClientRect();

        setSize({ height, width });
      }
    };

    // Initial width calculation
    updateContainerWidth();

    // Attach resize event listener to update width on window resize
    window.addEventListener('resize', updateContainerWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  return {
    containerRef,
    ...size,
  };
};
