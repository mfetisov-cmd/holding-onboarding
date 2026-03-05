'use client';
import { createContext, PropsWithChildren } from 'react';

export type TableSegmentContextValue = {
  variant: 'body' | 'footer' | 'header';
};

export const TableSegmentContext =
  createContext<null | TableSegmentContextValue>(null);

export const TableSegmentContextProvider = ({
  children,
  ...value
}: PropsWithChildren<TableSegmentContextValue>) => {
  return (
    <TableSegmentContext.Provider value={{ ...value }}>
      {children}
    </TableSegmentContext.Provider>
  );
};
