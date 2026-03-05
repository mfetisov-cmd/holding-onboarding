import { useEffect, useMemo, useState } from 'react';

import {
  dropStateEmitter,
  EmitterInit,
  getOrCreateStateEmitter,
  RequestHandlerState,
} from '@/shared/lib/emitter';
import { getRandomUUIDv4 } from '@/shared/lib/utils/getRandomUUIDv4';

type HookType<RQ, S> = [
  RequestHandlerState<RQ, S>,
  (rq: RQ) => void,
  () => void,
];

// @deprecated
export function useRequestHandler<RQ, S>(
  init: Partial<EmitterInit<RQ, S>>,
): HookType<RQ, S> {
  const { id } = init;
  // No id passed? create local
  const handlerId = useMemo(() => id ?? getRandomUUIDv4(), [id]);
  // Create temporary id if needed
  const emitter = getOrCreateStateEmitter({ ...init, id: handlerId });
  const [state, setState] = useState<RequestHandlerState<RQ, S>>(
    emitter.getState(),
  );
  useEffect(() => {
    emitter.listen(setState);
    return () => {
      if (!id) {
        dropStateEmitter(handlerId);
      }
      emitter.unlisten(setState);
    };
  }, [emitter, id, handlerId]);
  return [state, emitter.setRequest, emitter.abort];
}
