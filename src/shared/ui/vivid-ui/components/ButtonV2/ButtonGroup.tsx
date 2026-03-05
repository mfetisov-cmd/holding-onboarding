import { PropsWithChildren } from 'react';

import { useTheme } from 'styled-components';

import { Flex } from '@/shared/ui/vivid-ui/components/Layout';

type Props = {
  type: 'horizontal' | 'vertical';
};

export const ButtonGroup = ({ children, type }: PropsWithChildren<Props>) => {
  const theme = useTheme();
  return (
    <Flex
      direction={type === 'horizontal' ? 'row' : 'column'}
      gap={theme.token.sizeUnits(4)}
      wrap="nowrap"
    >
      {children}
    </Flex>
  );
};
