import styled from 'styled-components';

export const StarRatingContainer = styled.div`
  display: flex;
`;

export const StarButton = styled.button<{ $disabled?: boolean }>`
  background: transparent;
  border: none;
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  transition: opacity 120ms ease-in-out;

  &:hover {
    opacity: ${(props) => (props.$disabled ? '1' : '0.7')};
  }

  &:focus-visible {
    opacity: ${(props) => (props.$disabled ? '1' : '0.85')};
    outline: none;
  }
`;
