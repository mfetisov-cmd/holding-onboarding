'use client';

import { useCallback, useReducer, useRef } from 'react';

import { isAbortError } from '@/shared/services/grpc/asAsync/helpers';

type AsyncFunction = (...args: any[]) => Promise<any>;
type AsyncFunctionReturnType<T extends AsyncFunction> = Awaited<ReturnType<T>>;

export function useAsyncFunction<T extends AsyncFunction>(
  asyncFunction: T,
  initialValue?: AsyncFunctionReturnType<T>,
) {
  const [{ callId: lastCallId, ...asyncState }, dispatchAsyncState] =
    useReducer(asyncFunctionReducer<AsyncFunctionReturnType<T>>, {
      callId: -1,
      data: initialValue ?? null,
      error: null,
      isLoading: false,
    });

  const resetState = useCallback(() => {
    dispatchAsyncState({ initialValue: initialValue ?? null, type: 'RESET' });
  }, [initialValue]);

  const lastCallIdRef = useRef(lastCallId);

  const execute = useCallback(
    async (...args: any[]) => {
      const callId = ++lastCallIdRef.current;

      dispatchAsyncState({ callId, type: 'START_LOADING' });

      try {
        const data = await asyncFunction(...args);
        dispatchAsyncState({ callId, data, type: 'SUCCESS' });
        return data;
      } catch (error) {
        dispatchAsyncState({ callId, error, type: 'ERROR' });
        throw error;
      }
    },
    [asyncFunction],
  ) as T;

  return {
    ...asyncState,
    execute,
    resetState,
  };
}

type AsyncFunctionState<T> = {
  callId: number;
  data: null | T;
  error: unknown;
  isLoading: boolean;
};

type AsyncFunctionAction<T> =
  | { callId: number; data: T; type: 'SUCCESS' }
  | { callId: number; error: unknown; type: 'ERROR' }
  | { callId: number; type: 'START_LOADING' }
  | { initialValue: null | T; type: 'RESET' };

function asyncFunctionReducer<T>(
  state: AsyncFunctionState<T>,
  action: AsyncFunctionAction<T>,
): AsyncFunctionState<T> {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        callId: action.callId,
        isLoading: true,
      };
    case 'SUCCESS':
      return state.callId === action.callId
        ? {
            ...state,
            data: action.data,
            error: null,
            isLoading: false,
          }
        : state;
    case 'ERROR':
      return state.callId === action.callId
        ? {
            ...state,
            error: isAbortError(action.error) ? null : action.error,
            isLoading: false,
          }
        : state;
    case 'RESET':
      return {
        callId: 0,
        data: action.initialValue,
        error: null,
        isLoading: false,
      };
    default:
      return state;
  }
}
