import { useCallback, useEffect, useState } from 'react';

export function useVisibilityToggle(initial = false) {
  const [shouldRender, setShouldRender] = useState(initial);

  useEffect(() => {
    if (initial) {
      setShouldRender(true);
    }
  }, [initial]);

  const handleAnimationEnd = useCallback(() => {
    if (!initial) {
      setShouldRender(false);
    }
  }, [initial]);

  return [shouldRender, handleAnimationEnd] as const;
}
