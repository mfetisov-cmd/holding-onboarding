'use client';
import React, {
  ChangeEvent,
  ElementType,
  FocusEvent,
  Fragment,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useTheme } from 'styled-components';

import { Divider } from '@/shared/ui/vivid-ui/components/Divider';
import {
  DropList,
  DropListOption,
} from '@/shared/ui/vivid-ui/components/DropList';
import {
  StyledDivider,
  StyledOption,
} from '@/shared/ui/vivid-ui/components/DropList/styles';
import { Column } from '@/shared/ui/vivid-ui/components/Layout';
import { ListItem } from '@/shared/ui/vivid-ui/components/ListItem';
import { Loader } from '@/shared/ui/vivid-ui/components/Loader';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { useOnOutside } from '@/shared/ui/vivid-ui/hooks';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { SelectInput, SelectInputProps } from './SelectInput';
import {
  StyledLoaderContainer,
  StyledSelect,
  StyledSelectOptionsListContainer,
} from './styles';

export type SelectOption = DropListOption;

export type SelectProps = {
  borderRadius?: string;
  closeOnSelect?: boolean;
  disableDropDown?: boolean;
  isDividersVisible?: boolean;
  isOpen?: boolean;
  loading?: boolean;
  maxItems?: number;
  onChange?: (value: SelectOption | string) => void;
  onSearch?: (value: string) => void;
  onSelect?: (value: SelectOption) => void;
  options: Array<SelectOption>;
  orientation?: 'down' | 'up';
  value?: SelectOption | string;
} & Omit<SelectInputProps, 'borderRadius' | 'isOpen' | 'onChange' | 'onSelect'>;

export type PolymorphicSelectProps<C extends ElementType = 'input'> =
  PolymorphicComponentProps<C, SelectProps>;

const SelectBase = ({
  borderRadius,
  closeOnSelect = true,
  disabled,
  disableDropDown,
  hint,
  id,
  isDividersVisible,
  isOpen,
  loading,
  maxItems,
  onChange,
  onFocus,
  onKeyDown,
  onSearch,
  onSelect,
  options,
  orientation = 'down',
  size,
  value = '',
  ...rest
}: PolymorphicSelectProps) => {
  const theme = useTheme();
  const optionsListRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(isOpen ?? false);

  const handleOutsideListClick = (): void => {
    if (!disableDropDown) {
      setOpened(false);
    }
  };

  const handleOpen = () => {
    if (disabled) return;
    setOpened(true);
  };

  useEffect(() => {
    if (typeof isOpen === 'boolean') {
      setOpened(isOpen);
    }
  }, [isOpen]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onSearch) {
      onSearch(e.target.value);
    } else if (onChange) {
      onChange(e.target.value);
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleSelect = (selected: SelectOption): void => {
    if (onSelect) {
      onSelect(selected);
    } else if (onChange) {
      onChange(selected);
    }
    if (closeOnSelect) {
      setOpened(false);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    handleOpen();
    if (onFocus && !disabled) {
      onFocus(e);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    const selected = options.filter((it) => !it.disabled)[0];
    const handler = onSelect || onChange || (() => {});

    if (selected && e.key === 'Enter') {
      handler(selected);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  useOnOutside({
    event: 'mousedown',
    onClick: handleOutsideListClick,
    target: optionsListRef,
  });

  return (
    <StyledSelect $disabled={disabled}>
      <div onClick={handleOpen}>
        <SelectInput
          {...rest}
          id={id}
          borderRadius={borderRadius}
          disabled={disabled}
          hint={hint}
          isOpen={opened}
          options={options}
          size={size}
          value={value}
          onChange={handleSearch}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
        />
      </div>
      {opened && !disableDropDown && !loading && (
        <StyledSelectOptionsListContainer
          id={`${id}-listbox`}
          $hint={hint}
          $orientation={orientation}
          aria-labelledby={`${id}-label`}
          ref={optionsListRef}
          role="listbox"
        >
          <Spacer size={2} />
          <DropList
            isDividersVisible={isDividersVisible}
            optionHtmlProps={{
              id: `${id}-option-${value}`,
              role: 'option',
            }}
            options={options}
            size={size}
            style={{
              maxHeight: maxItems ? `${(maxItems + 0.6) * 56}rem` : undefined,
            }}
            onClick={handleSelect}
          />
        </StyledSelectOptionsListContainer>
      )}
      {opened && !disableDropDown && loading && (
        <StyledSelectOptionsListContainer $hint={hint} $orientation={orientation} ref={optionsListRef}>
          <StyledLoaderContainer>
            <Loader color={theme?.token.color.c6} size={32} />
          </StyledLoaderContainer>
        </StyledSelectOptionsListContainer>
      )}
      {opened && disableDropDown && !loading && options.length > 0 && (
        <>
          <Spacer size={4} />
          {options.map((option, idx) => (
            <Fragment key={`option-${idx}-${option.value}`}>
              <ListItem
                role="option"
                size={size}
                {...option}
                id={`${id}-option-${value}`}
                component={StyledOption}
                type="button"
                onClick={() => handleSelect(option)}
              />
              <Divider component={StyledDivider} visible={isDividersVisible} />
            </Fragment>
          ))}
        </>
      )}
      {opened && disableDropDown && loading && (
        <Column align="center" justify="center" width="100%">
          <Spacer size={4} />
          <Loader color={theme?.token.color.c6} size={32} />
        </Column>
      )}
    </StyledSelect>
  );
};

export const Select = createPolymorphicComponent<'input', SelectProps>(
  SelectBase,
);
