import { styled } from 'styled-components';

type PrideProps = {
  height: string;
  width: string;
};

const StyledPride = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
`;

const StyledPrideColor = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

export const Pride = ({ height = '42rem', width = '42rem' }: PrideProps) => {
  return (
    <StyledPride style={{ height, width }}>
      <StyledPrideColor style={{ background: '#E50000' }} />
      <StyledPrideColor style={{ background: '#FF8D00' }} />
      <StyledPrideColor style={{ background: '#FE0' }} />
      <StyledPrideColor style={{ background: '#028121' }} />
      <StyledPrideColor style={{ background: '#004CFF' }} />
      <StyledPrideColor style={{ background: '#708' }} />
    </StyledPride>
  );
};
