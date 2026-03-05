'use client';

import { useEffect, useMemo, useRef, useSyncExternalStore } from 'react';

import { useValueStorage } from '@/app/config/ValueStorageProvider';
import {
  dropValueEmitter,
  getOrCreateValueEmitter,
  ValueEmitter,
} from '@/shared/lib/emitter/value';
import { getRandomUUIDv4 } from '@/shared/lib/utils/getRandomUUIDv4';

type HookType<S> = [S, ValueEmitter<S>];

/**
 * Stores data in global state, allowing multiple components to share and update it.
 * @param initialValue - The initial value for the data. Used when the hook is first called with a specific ID or if `initialization` is true.
 * @param id - A unique identifier for the data. This allows multiple instances of the hook to manage different pieces of global state.
 * @param initialization - If true, the hook will initialize the data with `initialValue`, even if the hook has been called with the same ID before.
 */
export function useValue<S>(
  initialValue: S,
  id?: string,
  initialization = false,
): HookType<S> {
  // No id passed? create local.
  const useId = useMemo(() => id ?? getRandomUUIDv4(), [id]);
  const storage = useValueStorage();

  const emitter = getOrCreateValueEmitter({ id: useId, initialValue }, storage);

  // in case if other useValue hook runs before the initialization one
  const initialized = useRef(false);
  if (initialization && !initialized.current) {
    initialized.current = true;
    emitter.update(initialValue);
  }

  const state = useSyncExternalStore<S>(
    emitter.listen,
    emitter.get,
    emitter.get,
  );

  useEffect(() => {
    return () => {
      if (!id) {
        dropValueEmitter(useId, storage);
      }
    };
  }, [id, storage, useId]);
  return [state, emitter];
}
