import { useEffect, useRef } from 'react';

/**
 * Custom hook to track dependency changes for debugging purposes
 * @param dependencies - Array of dependencies to track
 * @param effectName - Name of the effect for logging purposes
 */
export const useDependencyTracker = (dependencies: any[], effectName: string) => {
  const prevDepsRef = useRef<any[]>([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevDepsRef.current = dependencies;
      console.log(`[${effectName}] Initial render - dependencies:`, dependencies);
      return;
    }

    const prevDeps = prevDepsRef.current || [];
    const changedDeps: Array<{ from: any; index: number; to: any }> = [];


    dependencies.forEach((dep, index) => {
      if (Object.is(dep, prevDeps[index]) === false) {
        changedDeps.push({
          from: prevDeps[index],
          index,
          to: dep,
        });
      }
    });

    if (changedDeps.length > 0) {
      console.log(`[${effectName}] Dependencies changed:`, changedDeps);
      console.log(`[${effectName}] All current dependencies:`, dependencies);
    }

    prevDepsRef.current = dependencies;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};