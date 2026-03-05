import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  PolymorphicSquareIconProps,
  SquareIconProps,
} from '@/shared/ui/vivid-ui/components/Icons/types';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

const Icon = ({
  color,
  component = 'svg',
  size = 24,
  ...rest
}: PolymorphicSquareIconProps) => {
  return (
    <Box
      component={component}
      fill={color}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      width={`${size}rem`}
      {...rest}
    >
      <path d="M9 7c-3 0-4 .15-4 .15v2.7S6 10 9 10s4-.15 4-.15v-2.7S12 7 9 7M5 12.1s.25-.1 1-.1 1 .1 1 .1v1.8s-.25.1-1 .1-1-.1-1-.1zM6 15c-.75 0-1 .1-1 .1v1.8s.25.1 1 .1 1-.1 1-.1v-1.8s-.25-.1-1-.1M8 12.1s.25-.1 1-.1 1 .1 1 .1v1.8s-.25.1-1 .1-1-.1-1-.1zM9 15c-.75 0-1 .1-1 .1v1.8s.25.1 1 .1 1-.1 1-.1v-1.8s-.25-.1-1-.1M11 12.1s.25-.1 1-.1 1 .1 1 .1v1.8s-.25.1-1 .1-1-.1-1-.1zM12 15c-.75 0-1 .1-1 .1v1.8s.25.1 1 .1 1-.1 1-.1v-1.8s-.25-.1-1-.1" />
      <path
        clipRule="evenodd"
        d="M2 3.9S3.75 3 9 3s7 .9 7 .9v16.2s-1.75.9-7 .9-7-.9-7-.9zm2 14.704c.95.19 2.545.396 5 .396s4.05-.206 5-.396V5.396C13.05 5.206 11.455 5 9 5s-4.05.206-5 .396z"
        fillRule="evenodd"
      />
      <path d="M18 16.994c2.237-.058 3-.494 3-.494v-9s-.763-.436-3-.494z" />
    </Box>
  );
};

export const ChipTan24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
