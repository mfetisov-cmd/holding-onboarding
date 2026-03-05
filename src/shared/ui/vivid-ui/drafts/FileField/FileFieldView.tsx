import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';

import styled, { css } from 'styled-components';

import { Upload24 } from '@/shared/ui/vivid-ui/components/Icons';
import { Loader } from '@/shared/ui/vivid-ui/components/Loader';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

const defaultColorStyles = css`
  color: ${(props) => props.theme.token.color.c2};
  border-color: ${(props) => props.theme.token.color.c2};
  background-color: ${(props) => props.theme.token.color.c5};
`;

const activeColorStyles = css`
  color: ${(props) => props.theme.token.color.c6};
  border-color: ${(props) => props.theme.token.color.c6};
  background-color: ${(props) => props.theme.token.color.c6l};
`;

const StyledFileFieldView = styled.div<{ $isActive?: boolean }>`
  display: flex;
  cursor: pointer;
  flex-grow: 1;
  gap: ${(props) => props.theme.token.sizeUnits(8)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  fill: currentColor;
  border-style: dashed;
  border-width: ${(props) => props.theme.token.sizeUnits(0.5)};
  border-radius: ${(props) => props.theme.token.sizeUnits(6)};
  padding: ${(props) =>
    `${props.theme.token.sizeUnits(10)} ${props.theme.token.sizeUnits(12)}`};

  ${(props) => (props.$isActive ? activeColorStyles : defaultColorStyles)};

  &:hover {
    ${activeColorStyles};
  }
`;

const StyledLabelsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: ${(props) => props.theme.token.sizeUnits(4)};
`;

export type FileFieldViewTexts = {
  label?: ReactNode;
  title: ReactNode;
};

type Props = {
  isActive?: boolean;
  isLoading?: boolean;
} & FileFieldViewTexts;

type PolymorphicFileFieldViewProps = PolymorphicComponentProps<'div', Props>;

export const FileFieldViewInner = ({
  isActive,
  isLoading,
  label,
  title,
  ...rest
}: PolymorphicFileFieldViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] =
    useState<CSSProperties['minHeight']>('auto');

  // Calculating minHeight on every title and label change to avoid component resizing between states
  useEffect(() => {
    if (ref.current) {
      const containerHeight = ref.current?.getBoundingClientRect().height;
      const parsedMinHeight = parseInt(String(minHeight), 10);

      setMinHeight(
        `${Math.max(
          containerHeight,
          isNaN(parsedMinHeight) ? 0 : parsedMinHeight,
        )}px`,
      );
    }
  }, [label, title, minHeight]);

  return (
    <StyledFileFieldView
      {...rest}
      $isActive={isActive || isLoading}
      ref={ref}
      style={{ minHeight }}
    >
      {isLoading ? <Loader /> : <Upload24 />}
      <StyledLabelsContainer>
        <Typography variant="bodySAcc">{title}</Typography>
        {label ? <Typography variant="bodyXS">{label}</Typography> : null}
      </StyledLabelsContainer>
    </StyledFileFieldView>
  );
};

export const FileFieldView = createPolymorphicComponent<'div', Props>(
  FileFieldViewInner,
);
