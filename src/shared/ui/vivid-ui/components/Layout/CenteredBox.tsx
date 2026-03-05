import {
  Flex,
  FlexProps,
  PolymorphicFlexProps,
} from '@/shared/ui/vivid-ui/components/Layout/Flex';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

export const _CenteredBox = (props: PolymorphicFlexProps) => (
  <Flex {...props} align="center" direction="row" justify="center" />
);

export const CenteredBox = createPolymorphicComponent<'div', FlexProps>(
  _CenteredBox,
);
