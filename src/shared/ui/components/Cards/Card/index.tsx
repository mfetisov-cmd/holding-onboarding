import { useMemo } from 'react';

import { styled, useTheme } from 'styled-components';

import {
  CardState,
  CardStateMap,
  CardType,
} from '@/shared/api/main/generated/vivid/frontend/shared/card/v1/card_pb';
import { CardColor } from '@/shared/api/main/generated/vivid/shared/v1/card_color_pb';
import {
  CardGroupType,
  CardGroupTypeMap,
} from '@/shared/api/main/generated/vivid/shared/v1/card_group_type_pb';
import {
  PaymentSystem,
  PaymentSystemMap,
} from '@/shared/api/main/generated/vivid/shared/v1/payment_system_pb';
import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  Chip,
  Cloud24,
  VividRegular,
} from '@/shared/ui/vivid-ui/components/Icons';
import { VisaPlatinumBusiness } from '@/shared/ui/vivid-ui/components/Icons/BankingCard/VisaPlatinumBusiness';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

export type CardProps = {
  backgroundUrl?: string;
  cardState?: CardStateMap[keyof CardStateMap];
  color?: CardColor | string;
  // FirstName and LastName separated by space or '/'-sign
  embossingName?: string;
  hasShadow?: boolean;
  panLast4?: string;
  paymentSystem?: PaymentSystemMap[keyof PaymentSystemMap];
  type?: CardGroupTypeMap[keyof CardGroupTypeMap];
  width?: string;
};

type ContainerProps = {
  $backgroundColor?: string;
  $backgroundImage?: string;
  $hasShadow?: boolean;
};
const StyledCardContainer = styled(Box)<ContainerProps>`
  position: relative;
  border-radius: 6% / 4%;
  overflow: hidden;
  font: normal 500 14px/1.1 var(--font-ibm-plex-mono), monospace;

  box-shadow: ${(props) =>
    props.$hasShadow ? '0 20px 32px 0 rgba(0, 0, 0, 0.16)' : 'none'};
  border: ${(props) =>
    props.theme.name === 'dark'
      ? `1rem solid ${props.theme.token.color.c17}`
      : undefined};

  background-color: ${(props) => props.$backgroundColor || DEFAULT_CARD_COLOR};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: ${(props) => `url(${props.$backgroundImage})`};

  & image {
    transition: opacity 0.3s;
  }
`;

const DEFAULT_CARD_COLOR = '#7D33F6';

const CardBase = ({
  backgroundUrl,
  cardState,
  color,
  component = 'svg',
  embossingName = '',
  hasShadow,
  panLast4,
  paymentSystem,
  type = CardType.CARD_TYPE_VIRTUAL,
  width = '202',
  ...rest
}: PolymorphicComponentProps<'svg', CardProps>) => {
  const theme = useTheme();

  const cardColor = useMemo(() => {
    if (cardState === CardState.CARD_STATE_BLOCKED) {
      return theme?.token.color.c3 || '#BBBBC1';
    }

    if (typeof color !== 'string' && color != null) {
      return color.getColorHexCode();
    }

    if (typeof color === 'string' && color.length > 0) {
      return color;
    }

    return DEFAULT_CARD_COLOR;
  }, [cardState, color, theme?.token.color.c3]);

  const cardImage = useMemo(() => {
    if (type === CardGroupType.CARD_GROUP_TYPE_METAL && backgroundUrl != null) {
      return backgroundUrl;
    }
  }, [backgroundUrl, type]);

  const { firstName, lastName } = useMemo(() => {
    const names = embossingName?.split(/[\/]/gi);

    if (names.length > 1) {
      return {
        firstName: names[0],
        lastName: names[1],
      };
    }

    return { firstName: undefined, lastName: undefined };
  }, [embossingName]);

  return (
    <StyledCardContainer
      $backgroundColor={cardColor}
      $backgroundImage={cardImage}
      $hasShadow={hasShadow}
      as={component}
      viewBox="0 0 202 320"
      width={width}
      {...rest}
    >
      <image
        height={320}
        href="/images/home/card/frozen.png"
        opacity={cardState === CardState.CARD_STATE_FROZEN ? 0.8 : 0}
        preserveAspectRatio="xMidYMin slice"
        width={202}
      />
      <VividRegular fill="white" x={14} y={47} />
      {type === CardGroupType.CARD_GROUP_TYPE_VIRTUAL ? (
        <Cloud24 fill="white" opacity={0.4} width={18} x={170} y={9} />
      ) : (
        <Chip color="#BBBBC1" fill="#F5F5F4" x={100} y={38} />
      )}
      <text fill="white" x={14} y={206}>
        {firstName}
      </text>
      <text fill="white" x={14} y={222}>
        {lastName}
      </text>
      <text fill="white" x={14} y={299}>
        {panLast4}
      </text>
      {paymentSystem === PaymentSystem.PAYMENT_SYSTEM_VISA && (
        <VisaPlatinumBusiness fill="white" x={132} y={283} />
      )}
    </StyledCardContainer>
  );
};

export const Card = createPolymorphicComponent<'div', CardProps>(CardBase);
