'use client';
import { ElementType, useRef } from 'react';

import { useTheme } from 'styled-components';

import { Loader } from '@/shared/ui/vivid-ui/components/Loader';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  Size,
  SizeXS,
} from '@/shared/ui/vivid-ui/shared';

import { StyledChips } from './styles';

export type ChipsProps = {
  loading?: boolean;
  selected?: boolean;
  size?: Size | SizeXS;
};

export type PolymorphicChipsProps<C extends ElementType = 'button'> =
  PolymorphicComponentProps<C, ChipsProps>;

const ChipsBase = ({
  children,
  component = 'button',
  loading,
  onClick,
  selected,
  size,
  ...rest
}: PolymorphicChipsProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const theme = useTheme();

  // Fix the issue where the button remains in an active state after being clicked
  // on macOS Chrome by blurring the button after click event.
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <StyledChips
      $loading={loading}
      $selected={selected && !loading}
      $size={size}
      as={component}
      ref={buttonRef}
      onClick={handleClick}
      {...rest}
    >
      {loading ? (
        <Loader
          color={selected ? theme?.token.color.c0 : theme?.token.color.c1}
          size={size === 'large' ? 16 : 14}
        />
      ) : (
        children
      )}
    </StyledChips>
  );
};

export const Chips = createPolymorphicComponent<'button', ChipsProps>(
  ChipsBase,
);
