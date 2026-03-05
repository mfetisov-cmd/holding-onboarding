'use client';
import { createContext, CSSProperties } from 'react';

export type TableContextValue = {
  hasHorizontalPaddings: boolean;
  textAlign: CSSProperties['textAlign'];
};

export const TableContext = createContext<TableContextValue>({
  hasHorizontalPaddings: false,
  textAlign: 'left',
});
export const TableContextProvider = TableContext.Provider;
