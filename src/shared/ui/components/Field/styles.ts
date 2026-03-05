import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';

export const StyledField = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.token.spacingS};
`;
