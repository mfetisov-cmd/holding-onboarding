import { FC, useState } from 'react';

import { useTheme } from 'styled-components';

import { Paper } from '@/shared/ui/vivid-ui/components/Paper';

import {
  CollapsibleHeader,
  CollapsibleInner,
  CollapsibleProps,
  CollapsibleWrapper,
  StyledArrowIcon,
  StyledTriggerButton,
} from './styles';

export const Collapsible: FC<CollapsibleProps> = ({
  onChangeCallback,
  targetElement,
  triggerElement,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const theme = useTheme();
  const handleToggleState = (event: MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
    onChangeCallback?.(!isOpen);
  };

  return (
    <Paper style={{ position: 'relative' }}>
      <CollapsibleHeader onClick={handleToggleState}>
        {triggerElement}
        <StyledTriggerButton onClick={handleToggleState}>
          <StyledArrowIcon $isOpen={isOpen} color={theme?.token.color.c3} />
        </StyledTriggerButton>
      </CollapsibleHeader>
      <CollapsibleWrapper $isOpen={isOpen}>
        <CollapsibleInner>{targetElement}</CollapsibleInner>
      </CollapsibleWrapper>
    </Paper>
  );
};
