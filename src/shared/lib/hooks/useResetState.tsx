import { useCallback, useState } from 'react';

export function useResetState<T>(
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const [state, setState] = useState<T>(initialValue);

  const reset = useCallback(() => {
    setState(initialValue);
  }, [initialValue]);

  return [state, setState, reset];
}
