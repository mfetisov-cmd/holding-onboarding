import { useMemo } from 'react';

type Deserializer = { deserializeBinary: (data: Uint8Array) => any };
export function useDeserializedValue<T extends Deserializer>(
  deserializer: T,
  data?: Uint8Array,
) {
  return useMemo<ReturnType<T['deserializeBinary']> | undefined>(() => {
    if (data == null) {
      return undefined;
    }

    return deserializer.deserializeBinary(data);
  }, [data, deserializer]);
}
