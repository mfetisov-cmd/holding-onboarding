import { PropsWithChildren } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  selectedTabKey: string;
};

export const TabContent = ({
  children,
  selectedTabKey,
}: PropsWithChildren<Props>) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        initial={{ opacity: 0, y: 10 }}
        key={selectedTabKey}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
