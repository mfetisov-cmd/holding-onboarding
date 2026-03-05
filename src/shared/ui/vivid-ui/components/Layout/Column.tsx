import { createPolymorphicComponent } from '../../shared';
import { Flex, FlexProps, PolymorphicFlexProps } from './Flex';

export const _Column: React.FC<PolymorphicFlexProps> = (props) => (
  <Flex direction="column" {...props} />
);

export const Column = createPolymorphicComponent<'div', FlexProps>(_Column);
