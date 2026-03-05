import React, { useState } from 'react';

import {
  MobileHeader,
  MobileHeaderClose,
  MobileHeaderLeftItem,
} from '@/shared/ui/vivid-ui/components/MobileHeader';
import { Popup } from '@/shared/ui/vivid-ui/components/Popup';
import { NativeSelect } from '@/shared/ui/vivid-ui/components/Select/NativeSelect';
import {
  Select,
  SelectProps,
} from '@/shared/ui/vivid-ui/components/Select/Select';
import { SelectInput } from '@/shared/ui/vivid-ui/components/Select/SelectInput';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';
import { useThemeBreakpoints } from '@/shared/ui/vivid-ui/hooks';

export type AdaptiveSelectProps = SelectProps & {
  disableMobileAutoFocus?: boolean;
  // Show native select on mobile devices
  isNative?: boolean;
};

/**
 * This component is a variation of the Select component.
 * It is designed for mobile devices where clicking on the field opens a screen with a filter field and a list of
 * options, which is convenient for complex select common with search capabilities.
 * For desktop devices, it functions like a regular Select component.
 */
export const AdaptiveSelect = ({
  disableMobileAutoFocus = false,
  isNative,
  ...restProps
}: AdaptiveSelectProps) => {
  const breakpoints = useThemeBreakpoints();
  const [isModalOpened, setIsModalOpened] = useState(false);

  if (!breakpoints.isMobile) {
    return <Select {...restProps} />;
  }

  if (isNative) {
    return <NativeSelect {...restProps} />;
  }

  // Omit some props to prevent passing them to native input
  const {
    maxItems,
    onChange,
    onKeyDown,
    onSearch,
    onSelect,
    ...fakeInputProps
  } = restProps;

  const handleSelect: SelectProps['onSelect'] = (value) => {
    onSelect?.(value);
    setIsModalOpened(false);
  };

  const handleKeyDown: SelectProps['onKeyDown'] = (e) => {
    if (e.key == 'Enter') {
      setIsModalOpened(false);
    }

    onKeyDown?.(e);
  };

  const handleFakeInputClick = () => {
    // blur fake input to disable keyboard appearance on mobiles
    setTimeout(() => {
      (document.activeElement as HTMLInputElement)?.blur();
    }, 0);
    setIsModalOpened(true);
  };

  return (
    <>
      <SelectInput {...fakeInputProps} onClick={handleFakeInputClick} />
      <Popup
        fullScreen
        open={isModalOpened}
        paddingSize="small"
        onClose={() => setIsModalOpened(false)}
      >
        <MobileHeader>
          <MobileHeaderLeftItem>
            <MobileHeaderClose onClick={() => setIsModalOpened(false)} />
          </MobileHeaderLeftItem>
          <Typography variant="labelMAcc">
            {restProps.label ?? restProps.placeholder}
          </Typography>
        </MobileHeader>
        <Spacer size={12} />
        <Select
          {...restProps}
          autoFocus={!disableMobileAutoFocus}
          disableDropDown
          isOpen
          label=""
          onKeyDown={handleKeyDown}
          onSelect={handleSelect}
        />
      </Popup>
    </>
  );
};
