import { styled } from 'styled-components';

import { SkeletonUser } from '@/shared/ui/components/Skeletons/SkeletonUser';
import { Skeleton } from '@/shared/ui/vivid-ui/components/Skeleton';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';

const StyledFullWidth = styled.div`
  width: 100%;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLeft = styled.div`
  width: 400rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${(props) => props.theme.token.spacingM};
`;

export const SkeletonCardIssueFinal = () => {
  return (
    <StyledContent>
      <StyledLeft>
        <SkeletonUser />
        <Spacer size={6} />
        <Skeleton
          animated
          component={StyledFullWidth}
          height={102}
          variant="rounded"
        />
        <Spacer size={6} />
        <Skeleton
          animated
          component={StyledFullWidth}
          height={14}
          variant="rounded"
        />
        <Spacer size={4} />
        <StyledGrid>
          <Skeleton
            animated
            component={StyledFullWidth}
            height={44}
            variant="rounded"
          />
          <Skeleton
            animated
            component={StyledFullWidth}
            height={44}
            variant="rounded"
          />
        </StyledGrid>
      </StyledLeft>
      <div>
        <Skeleton animated height={320} variant="rounded" width={202} />
      </div>
    </StyledContent>
  );
};
