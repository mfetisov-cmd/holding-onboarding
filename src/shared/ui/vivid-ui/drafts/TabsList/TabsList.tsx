import { ReactNode, useId } from 'react';

import { styled } from 'styled-components';

import { Tab } from './Tab';

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0;
  margin: 0;
  gap: ${(props) => props.theme.token.sizeUnits(12)};
  border-bottom: 1rem solid ${(props) => props.theme.token.color.c17};
`;

type TabsListItem<T> = {
  key: T;
  title: ReactNode;
};

type Props<T> = {
  onSelectedTabChange: (selectedTabKey: T) => void;
  selectedTabKey: T;
  tabsList: TabsListItem<T>[];
};

export const TabsList = <T,>({
  onSelectedTabChange,
  selectedTabKey,
  tabsList,
}: Props<T>) => {
  const id = useId();

  return (
    <StyledUl>
      {tabsList.map((tab) => (
        <Tab
          animationLayoutId={`underline-${id}`}
          isSelected={tab.key === selectedTabKey}
          key={String(tab.key)}
          tabKey={tab.key}
          title={tab.title}
          onClick={onSelectedTabChange}
        />
      ))}
    </StyledUl>
  );
};
