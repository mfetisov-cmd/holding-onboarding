'use client';
import { styled } from 'styled-components';

import { Skeleton } from '@/shared/ui/vivid-ui/components/Skeleton';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  gap: ${(props) => props.theme.token.spacingL};
  padding: ${(props) => props.theme.token.spacingL};
`;

const StyledCard = styled.div`
  flex-shrink: 0;
`;

const StyledDescription = styled.div`
  width: 73%;
`;

const StyledFullWidth = styled.div`
  width: 100%;
`;

export const SkeletonCardIssueVariant = () => {
  return (
    <StyledContainer>
      <Skeleton
        animated
        component={StyledCard}
        height={126}
        variant="rounded"
        width={80}
      />
      <StyledFullWidth>
        <Skeleton animated height={20} variant="rounded" width={200} />
        <Spacer size={2} />
        <Skeleton
          animated
          component={StyledDescription}
          height={60}
          variant="rounded"
        />
      </StyledFullWidth>
    </StyledContainer>
  );
};
