import React from 'react';

import { RatingValues } from '@/screens/vivid-chat/hooks/useAsatState';
import { Star } from '@/shared/ui/vivid-ui/components/StarRating/Star';
import {
  StarButton,
  StarRatingContainer,
} from '@/shared/ui/vivid-ui/components/StarRating/styles';

type Props = {
  disabled?: boolean;
  onChange?: (rating: RatingValues) => void;
  rating: RatingValues;
};

const MAX_STARS = 5;

export const StarRating = (props: Props) => {
  const { disabled = false, onChange, rating } = props;

  const handleClick = (index: number) => {
    if (index === undefined || disabled) return;
    const newRating = index + 1;
    onChange && onChange(newRating as RatingValues);
  };

  return (
    <StarRatingContainer>
      {Array.from({ length: MAX_STARS }, (_, index) => (
        <StarButton $disabled={disabled} key={index} onClick={() => handleClick(index)}>
          {rating === undefined || index >= rating ? (
            <Star isFilled={false} />
          ) : (
            <Star isFilled />
          )}
        </StarButton>
      ))}
    </StarRatingContainer>
  );
};

export default StarRating;
