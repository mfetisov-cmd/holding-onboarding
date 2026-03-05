import styled from 'styled-components';

import { StyledInput } from '@/shared/ui/vivid-ui/components/Input/styles';

export const StyledTextarea = styled(StyledInput)<{
  $overflow: 'auto' | 'hidden';
}>`
  resize: none;
  overflow: ${(props) => props.$overflow};
  background-color: inherit;
  line-height: 110%;
`;
