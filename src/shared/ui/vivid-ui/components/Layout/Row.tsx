import { createPolymorphicComponent } from '../../shared';
import { Flex, FlexProps, PolymorphicFlexProps } from './Flex';

export const _Row: React.FC<PolymorphicFlexProps> = (props) => (
  <Flex {...props} direction="row" />
);

export const Row = createPolymorphicComponent<'div', FlexProps>(_Row);
