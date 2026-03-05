import React, { useMemo, useRef, useState } from 'react';

import { useTheme } from 'styled-components';

import { Checkbox } from '@/shared/ui/vivid-ui/components/Checkbox';
import {
  MobileHeader,
  MobileHeaderApply,
  MobileHeaderClose,
  MobileHeaderLeftItem,
  MobileHeaderRightItem,
} from '@/shared/ui/vivid-ui/components/MobileHeader';
import { Popup } from '@/shared/ui/vivid-ui/components/Popup';
import {
  Select,
  SelectOption,
  SelectProps,
} from '@/shared/ui/vivid-ui/components/Select/Select';
import { SelectInput } from '@/shared/ui/vivid-ui/components/Select/SelectInput';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';
import { useThemeBreakpoints } from '@/shared/ui/vivid-ui/hooks';

export type MultiSelectOption = SelectOption & { selected?: boolean };

export type MultiSelectProps = Omit<SelectProps, 'onReset' | 'options'> & {
  onReset?: (options: MultiSelectOption[]) => void;
  options: MultiSelectOption[];
};

export const MultiSelect = ({
  onReset,
  options,
  ...restProps
}: MultiSelectProps) => {
  const theme = useTheme();
  const breakpoints = useThemeBreakpoints();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const optionsBeforeOpen = useRef(options);

  const mappedOptions = useMemo(
    () =>
      options.map((it) => ({
        ...it,
        rightIcon: (
          <Checkbox
            checked={Boolean(it.selected)}
            readOnly
            size="small"
            type="checkbox"
            variant="square"
          />
        ),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options, theme],
  );

  // On a desktop we are showing basic select
  if (!breakpoints.isMobile) {
    return (
      <Select
        closeOnSelect={false}
        options={mappedOptions}
        readOnly
        {...restProps}
      />
    );
  }

  const handleOpen = () => {
    optionsBeforeOpen.current = options;
    setIsModalOpened(true);
  };

  const handleReset = () => {
    onReset?.(optionsBeforeOpen.current);
    setIsModalOpened(false);
  };

  // Omitting some props to prevent passing them to native input
  const {
    maxItems,
    onChange,
    onKeyDown,
    onSearch,
    onSelect,
    rightIcon,
    ...restMobileProps
  } = restProps;

  return (
    <>
      <SelectInput
        options={mappedOptions}
        onClick={handleOpen}
        {...restMobileProps}
      />
      <Popup
        fullScreen
        open={isModalOpened}
        paddingSize="small"
        onClose={() => setIsModalOpened(false)}
      >
        <MobileHeader>
          {onReset && (
            <MobileHeaderLeftItem>
              <MobileHeaderClose onClick={handleReset} />
            </MobileHeaderLeftItem>
          )}
          <Typography variant="labelMAcc">
            {restProps.label ?? restProps.placeholder}
          </Typography>
          <MobileHeaderRightItem>
            <MobileHeaderApply onClick={() => setIsModalOpened(false)} />
          </MobileHeaderRightItem>
        </MobileHeader>
        <Spacer size={12} />
        <Select
          {...restMobileProps}
          autoFocus
          closeOnSelect={false}
          disableDropDown
          isArrowHidden
          isOpen
          options={mappedOptions}
          rightIcon={undefined}
          onChange={onChange}
          onSelect={onSelect}
        />
      </Popup>
    </>
  );
};
