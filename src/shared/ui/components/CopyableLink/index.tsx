import styled, { useTheme } from 'styled-components';

import { useCopy } from '@/shared/lib/hooks/useCopy';
import { Check24, Copy24 } from '@/shared/ui/vivid-ui/components/Icons';
import {
  CenteredBox,
  Column,
  FlexProps,
  Row,
} from '@/shared/ui/vivid-ui/components/Layout';
import {
  PolymorphicTypographyProps,
  Typography,
} from '@/shared/ui/vivid-ui/components/Typography';

const StyledTitle = styled(Typography)<PolymorphicTypographyProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
`;

const StyledLink = styled.a`
  display: inline-block;
  width: ${({ theme }) => `calc(100% - ${theme.token.sizeUnits(20)})`};
`;

const StyledIconContainer = styled(CenteredBox)`
  flex-shrink: 0;
  cursor: pointer;
  fill: ${({ theme }) => theme.token.color.c3};

  &:hover {
    fill: ${({ theme }) => theme.token.color.c6};
  }
`;

const StyledContainer = styled(Column)<FlexProps & { className?: string }>`
  min-height: ${({ theme }) => theme.token.sizeUnits(32)};
`;

type CopyableLinkProps = {
  className?: string;
  copyTimeoutMs?: number;
  label?: string;
  value: string;
};

export const CopyableLink = ({
  className,
  copyTimeoutMs = 3000,
  label,
  value,
}: CopyableLinkProps) => {
  const theme = useTheme();
  const [isCopied, onCopy] = useCopy(copyTimeoutMs);

  const handleCopyClick = () => {
    onCopy(value);
  };

  return (
    <StyledContainer className={className} gap={theme.token.spacingS}>
      {label && <Typography variant="labelMAcc">{label}</Typography>}
      <Row align="center" gap={theme.token.spacingM}>
        <StyledLink
          href={value}
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <StyledTitle color={theme.token.color.c6} variant="labelS">
            {value}
          </StyledTitle>
        </StyledLink>
        <StyledIconContainer>
          {isCopied ? (
            <Check24 size={24} />
          ) : (
            <Copy24 size={24} onClick={handleCopyClick} />
          )}
        </StyledIconContainer>
      </Row>
    </StyledContainer>
  );
};
