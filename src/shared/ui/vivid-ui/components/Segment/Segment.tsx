import React, {
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import styled, { css } from 'styled-components';

import {
  Typography,
  TypographyProps,
} from '@/shared/ui/vivid-ui/components/Typography';
import { PrefixType, Size } from '@/shared/ui/vivid-ui/shared';

const SegmentedControlWrapper = styled.div<{ $backgroundColor?: string }>`
  flex: 1 0 auto;
  display: flex;
  position: relative;
  overflow: hidden;
  gap: ${(props) => props.theme.token.spacing2XS};
  background-color: ${(props) =>
    props.$backgroundColor || props.theme.token.color.c5};
  border-radius: ${(props) => props.theme.token.sizeUnits(5)};
  padding: ${(props) => props.theme.token.sizeUnits(1)};

  &:focus-visible {
    outline: 1px solid ${(props) => props.theme.token.color.c3};
  }
`;

const getSizeStyles = ({ $size }: StyledSegmentProps) => {
  switch ($size) {
    case 'large':
      return css`
        min-height: ${(props) => props.theme.token.sizeUnits(20)};
        padding: ${({ theme }) =>
          `${theme.token.spacingS} ${theme.token.spacingM}`};
      `;
    case 'medium':
      return css`
        min-height: ${(props) => props.theme.token.sizeUnits(16)};
        padding: ${({ theme }) =>
          `${theme.token.spacingXS} ${theme.token.spacingM}`};
      `;
    case 'small':
      return css`
        min-height: ${(props) => props.theme.token.sizeUnits(14)};
        padding: ${({ theme }) =>
          `${theme.token.spacingXS} ${theme.token.spacingM}`};
      `;
  }
};

const OptionButton = styled.button<StyledSegmentProps>`
  flex: 1 1 auto;
  border: none;
  color: ${(props) => props.theme.token.color.c1};
  border-radius: ${(props) => props.theme.token.borderRadiusS};
  background: none;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 2;
  overflow: hidden;
  ${getSizeStyles}

  &:focus {
    outline: none;
  }
`;

const ActiveHighlight = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  border-radius: ${(props) => props.theme.token.borderRadiusS};
  background-color: ${(props) => props.theme.token.color.c0};
  transform: translateY(-50%);
  transition-property: all;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  z-index: 1;
`;

type SizeMap<T> = Record<Size, T>;

const TEXT_SIZE_MAP: SizeMap<TypographyProps['variant']> = {
  large: 'labelM',
  medium: 'labelS',
  small: 'captionS',
};

export type SegmentOption<T> = {
  label: ReactNode | string;
  value: T;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'>;

export type SegmentProps<T> = {
  backgroundColor?: string;
  disabled?: boolean;
  name?: string;
  onChange?: (value: T) => void;
  options: SegmentOption<T>[];
  size?: Size;
  value?: T;
};

export type StyledSegmentProps = Partial<
  PrefixType<SegmentProps<unknown>, '$'>
>;

export const Segment = <T,>({
  backgroundColor,
  disabled,
  name,
  onChange,
  options,
  size = 'medium',
  value,
}: SegmentProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeStyles, setActiveStyles] = useState({});

  const handleOptionClick = (index: number) => {
    setActiveIndex(index);

    if (onChange) {
      onChange(options[index].value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      return handleOptionClick((activeIndex + 1) % options.length);
    }

    if (e.key === 'ArrowLeft') {
      return handleOptionClick(
        (activeIndex - 1 + options.length) % options.length,
      );
    }
  };

  const updateStyles = (index: number) => {
    if (ref.current == null || index < 0) {
      return {};
    }

    const activeEl = ref.current.children[index];
    const parentBoundingRect = ref.current.getBoundingClientRect();
    const activeBoundingRect = activeEl.getBoundingClientRect();

    return {
      height: activeBoundingRect.height,
      left: activeBoundingRect.left - parentBoundingRect.left,
      width: activeBoundingRect.width,
    };
  };

  useEffect(() => {
    setActiveIndex(options.findIndex((option) => option.value === value));
  }, [options, value]);

  useEffect(() => {
    setActiveStyles(updateStyles(activeIndex));
  }, [activeIndex, size]);

  return (
    <SegmentedControlWrapper
      $backgroundColor={backgroundColor}
      ref={ref}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      {options.map((option, index) => {
        const { label, value: optionValue, ...restProps } = option;
        return (
          <OptionButton
            {...restProps}
            $size={size}
            aria-selected={activeIndex === index}
            disabled={disabled}
            key={String(optionValue)}
            role="tab"
            tabIndex={activeIndex === index ? 0 : -1}
            type="button"
            value={`${name}_${optionValue}`}
            onClick={() => handleOptionClick(index)}
          >
            <Typography variant={TEXT_SIZE_MAP[size]}>{label}</Typography>
          </OptionButton>
        );
      })}
      <ActiveHighlight style={activeStyles} />
    </SegmentedControlWrapper>
  );
};
