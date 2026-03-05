'use client';
import { useRef } from 'react';

import { Loader } from '@/shared/ui/vivid-ui/components/Loader';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  Size,
  SizeXS,
} from '@/shared/ui/vivid-ui/shared';

import { StyledChips } from './styles';

export type FilterChipsProps = {
  loading?: boolean;
  selected?: boolean;
  size?: Size | SizeXS;
};

const LOADER_SIZE: Record<Size | SizeXS, number> = {
  large: 18,
  medium: 16,
  small: 14,
  xs: 12,
};

const FilterChipsBase = ({
  children,
  component = 'button',
  loading,
  onClick,
  selected,
  size = 'small',
  ...rest
}: PolymorphicComponentProps<'button', FilterChipsProps>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

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
        <Loader color="currentColor" size={LOADER_SIZE[size]} />
      ) : (
        children
      )}
    </StyledChips>
  );
};

export const FilterChips = createPolymorphicComponent<
  'button',
  FilterChipsProps
>(FilterChipsBase);
