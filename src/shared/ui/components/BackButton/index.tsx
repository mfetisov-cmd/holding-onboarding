import styled from 'styled-components';

import { ProductLink, useRouter } from '@/shared/services/navigation';
import { ArrowBackCenter24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24';

type BackButtonProps = {
  href?: string;
};

const StyledBackButton = styled(ProductLink)`
  width: 32rem;
  height: 32rem;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: ${(props) => props.theme.token.color.c5};
  fill: ${(props) => props.theme.token.color.c2};

  &:focus {
    outline: 1px solid ${(props) => props.theme.token.color.c6};
  }
`;

export const BackButton = ({ href }: BackButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (!href) {
      router.back();
    }
  };

  // `href || {}` comes from next/link typings, where href: Url; type Url = string | UrlObject;
  return (
    <StyledBackButton href={href || {}} onClick={handleClick}>
      <ArrowBackCenter24 size={24} />
    </StyledBackButton>
  );
};
