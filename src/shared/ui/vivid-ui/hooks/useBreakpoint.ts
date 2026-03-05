import { useEffect, useState } from 'react';

export const useBreakpoint = (config: number[], initial: number) => {
  const [breakpoint, setBreakpoint] = useState(initial);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      for (let i = config.length - 1; i >= 0; i--) {
        if (width >= config[i]) {
          if (i !== breakpoint) {
            setBreakpoint(i);
          }
          break;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [config, breakpoint]);

  return { breakpoint };
};
