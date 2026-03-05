'use client';

import { ReactElement, useEffect, useMemo, useState } from 'react';

import styled, { useTheme } from 'styled-components';

import { Color } from '@/shared/api/main/generated/google/type/color_pb';
import { colorToRGBA } from '@/shared/lib/utils/convert/google/type/color';
import { TextButton } from '@/shared/ui/components/TextButton';
import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { CheckboxEmpty24, Edit24 } from '@/shared/ui/vivid-ui/components/Icons';
import {
  IconView,
  IconViewProps,
} from '@/shared/ui/vivid-ui/components/IconView';
import { Skeleton } from '@/shared/ui/vivid-ui/components/Skeleton';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

/**
 * Hook to load image and get its URL or undefined if image can't be loaded
 */
export const useImageUrl = (url?: string) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!url) {
      setImageUrl(undefined);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const img = new Image();
    img.src = url;

    const setUrl = () => {
      setImageUrl(url);
      setIsLoading(false);
    };

    const setError = () => {
      setImageUrl(undefined);
      setIsLoading(false);
    };

    img.addEventListener('load', setUrl);
    img.addEventListener('error', setError);

    return () => {
      img.removeEventListener('load', setUrl);
      img.removeEventListener('error', setError);
    };
  }, [url]);

  return [imageUrl, isLoading] as const;
};

export type AvatarProps = {
  color?: string;
  disabled?: boolean;
  googleColor?: Color;
  icon?: ReactElement<any>;
  isOwner?: boolean;
  name: string;
  nameColor?: string;
  onEdit?: () => void;
  size?: number;
  subIcon?: IconViewProps['subIcon'];
  url?: string;
};

const StyledAvatarName = styled(Box)<{
  $nameColor?: string;
  $size: number;
}>`
  font-size: ${(props) => props.$size}rem;
  line-height: 1.1em;
  color: ${(props) => props.$nameColor || props.theme.token.color.c7};
`;

const StyledParanja = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background-color: ${(props) => props.theme.token.color.c0};
  opacity: 0.8;
`;

const AvatarInner = ({
  color,
  component,
  disabled,
  googleColor,
  isOwner,
  name,
  nameColor,
  onEdit,
  size = 32,
  subIcon,
  url,
  ...rest
}: PolymorphicComponentProps<'div', AvatarProps>) => {
  const theme = useTheme();

  const backgroundColor = useMemo(() => {
    if (color) {
      return color;
    }
    if (googleColor) {
      return colorToRGBA(googleColor);
    }
  }, [color, googleColor]);

  const defaultSubIcon = useMemo(() => {
    if (onEdit) {
      return (
        <TextButton onClick={onEdit}>
          <Edit24 color={theme?.token.color.c1} size={16} />
        </TextButton>
      );
    }
    if (isOwner) {
      return <CheckboxEmpty24 color={theme.token.color.c9} size={10} />;
    }
    return null;
  }, [onEdit, isOwner, theme]);

  const [backgroundUrl, isLoading] = useImageUrl(url);

  if (isLoading) {
    return <Skeleton animated height={size} variant="circular" width={size} />;
  }

  return (
    <IconView
      backgroundColor={backgroundColor}
      backgroundUrl={backgroundUrl}
      size={size}
      subIcon={subIcon || defaultSubIcon}
      variant="circle"
      {...rest}
    >
      {!backgroundUrl ? (
        <StyledAvatarName $nameColor={nameColor} $size={size / 2} as="div">
          {name[0]?.toUpperCase()}
        </StyledAvatarName>
      ) : null}
      {disabled ? <StyledParanja /> : null}
    </IconView>
  );
};

export const Avatar = createPolymorphicComponent<'div', AvatarProps>(
  AvatarInner,
);
