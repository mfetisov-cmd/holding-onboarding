import { ReactNode } from 'react';

import { motion } from 'framer-motion';
import { styled, useTheme } from 'styled-components';

const StyledTab = styled(motion.li)<{ $isSelected?: boolean }>`
  list-style: none;
  margin: 0;
  padding: ${(props) => `${props.theme.token.sizeUnits(4)} 0`};
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  position: relative;
  user-select: none;
  font: ${(props) => props.theme.token.font.bodyS};
  white-space: nowrap;
`;

const StyledTabUnderline = styled(motion.div)`
  background: ${(props) => props.theme.token.color.c6};
  height: ${(props) => props.theme.token.sizeUnits(1)};
  border-radius: ${(props) => props.theme.token.sizeUnits(1)};
  bottom: ${(props) => props.theme.token.sizeUnits(-1)};
  left: 0;
  position: absolute;
  right: 0;
`;

type Props<T> = {
  animationLayoutId?: string;
  isSelected: boolean;
  onClick: (key: T) => void;
  tabKey: T;
  title: ReactNode;
};

export const Tab = <T,>({
  animationLayoutId = 'underline',
  isSelected,
  onClick,
  tabKey,
  title,
}: Props<T>) => {
  const theme = useTheme();

  return (
    <StyledTab
      animate={{
        color: isSelected ? theme.token.color.c1 : theme.token.color.c2,
      }}
      initial={false}
      key={String(tabKey)}
      onClick={() => onClick(tabKey)}
    >
      {title}
      {isSelected ? <StyledTabUnderline layoutId={animationLayoutId} /> : null}
    </StyledTab>
  );
};
