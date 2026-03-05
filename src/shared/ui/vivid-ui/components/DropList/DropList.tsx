import { ElementType, Fragment } from 'react';

import { Divider } from '@/shared/ui/vivid-ui/components/Divider';
import {
  ListItem,
  ListItemProps,
} from '@/shared/ui/vivid-ui/components/ListItem';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { StyledDivider, StyledDropList, StyledOption } from './styles';

export type DropListOption = ListItemProps & {
  value: string;
};

export type DropListProps = {
  isDividersVisible?: boolean;
  onClick: (value: DropListOption) => void;
  optionHtmlProps?: PolymorphicComponentProps<'button', unknown>;
  options: Array<DropListOption>;
  size?: 'large' | 'medium' | 'small';
};

export type PolymorphicDropListProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, DropListProps>;

const _DropList = ({
  isDividersVisible,
  onClick,
  optionHtmlProps,
  options,
  size,
  ...rest
}: PolymorphicDropListProps) => {
  return (
    <StyledDropList {...rest} $isEmpty={options.length === 0} type="light">
      {options.map((option, idx) => (
        <Fragment key={`option-${idx}-${option.value}`}>
          <ListItem
            role="option"
            size={size}
            {...option}
            {...optionHtmlProps}
            component={StyledOption}
            type="button"
            onClick={() => onClick(option)}
          />
          <Divider component={StyledDivider} visible={isDividersVisible} />
        </Fragment>
      ))}
    </StyledDropList>
  );
};

export const DropList = createPolymorphicComponent<'div', DropListProps>(
  _DropList,
);
