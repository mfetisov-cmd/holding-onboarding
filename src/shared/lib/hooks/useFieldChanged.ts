import { useEffect, useState } from 'react';

export const useFieldChanged = (dependencies: any[]) => {
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    setChanged(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return [changed, setChanged] as const;
};
