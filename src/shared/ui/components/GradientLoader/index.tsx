import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'alt' | 'src'> & {
  size: number;
};

export const GradientLoader = ({ size, ...restProps }: Props) => {
  return (
    <Image
      fetchPriority="high"
      height={size}
      unoptimized
      width={size}
      {...restProps}
      alt=""
      src={'/images/onboarding/loader_gradient.webp'}
    />
  );
};
