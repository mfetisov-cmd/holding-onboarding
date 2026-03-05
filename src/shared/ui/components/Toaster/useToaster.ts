import { useCallback } from 'react';

import { ToastProps } from './Toast';
import { _useToasterState } from './Toaster';

export const useToaster = () => {
  const [, emitter] = _useToasterState();

  const toast = useCallback(
    (value: ToastProps) => {
      const toasts = emitter.get().toasts;
      if (toasts?.find((toast: ToastProps) => toast.id === value.id)) {
        return;
      }

      const newToasts = [...(toasts || []), value];
      emitter.update({ toasts: newToasts });
    },
    [emitter],
  );

  const dismiss = useCallback(
    (id: string) => {
      const restToasts = emitter
        .get()
        .toasts?.filter((toast) => toast.id !== id);
      emitter.update({ toasts: restToasts });
    },
    [emitter],
  );

  return { dismiss, toast };
};
