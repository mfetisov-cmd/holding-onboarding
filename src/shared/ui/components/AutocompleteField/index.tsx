import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useRef,
  useState,
} from 'react';

import { styled } from 'styled-components';

import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Input, InputProps } from '@/shared/ui/vivid-ui/components/Input';
import { Paper, PaperProps } from '@/shared/ui/vivid-ui/components/Paper';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { useOnOutside } from '@/shared/ui/vivid-ui/hooks';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

type AutocompleteProps<T> = {
  action?: ReactElement<any>;
  endAction?: ReactElement<any>;
  fullWidth?: boolean;
  inputProps?: Omit<
    PolymorphicComponentProps<'input', InputProps>,
    'fullWidth' | 'onChange' | 'value'
  >;
  maxItems?: number;
  noContentPadding?: boolean;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  onSelect: (value: T) => void;
  options?: Array<T>;
  optionsTitle?: string;
  readOnly?: boolean;
  renderOption: (option: T, onClick: () => void) => ReactElement<any>;
  value: string;
};

const StyledAutocomplete = styled.div`
  position: relative;
`;

const StyledAutocompleteOptionsContainer = styled.div<{
  $withHint?: boolean;
}>`
  position: absolute;
  z-index: ${(props) => props.theme.token.zIndex.dropdown};
  top: ${(props) => (props.$withHint ? 'calc(100% - 22rem)' : '100%')};
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledPaper = styled(Paper)<PolymorphicComponentProps<'div', PaperProps>>`
  padding: ${(props) => `${props.theme.token.spacingXS} 0`};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.token.spacingXS};
  overflow-y: auto;
`;

const StyledAction = styled.div<{ $noContentPadding?: boolean }>`
  padding: 0
    ${(props) =>
      props.$noContentPadding ? 0 : `0 ${props.theme.token.spacingXS}`};
`;

const StyledOptionsTitle = styled.div`
  font: ${(props) => props.theme.token.font.captionCaps};
  text-transform: uppercase;
  color: ${(props) => props.theme.token.color.c2};
  padding: ${(props) =>
    `${props.theme.token.spacingXS} ${props.theme.token.spacingS}`};
  border-bottom: 1px solid ${(props) => props.theme.token.color.c17};
`;

export const AutocompleteFieldInner = <T extends unknown>(
  {
    action,
    endAction,
    inputProps,
    maxItems,
    noContentPadding,
    onChange,
    onSearch,
    onSelect,
    options,
    optionsTitle,
    readOnly,
    renderOption,
    value,
  }: AutocompleteProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const optionsListRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);

  const handleOutsideClick = (): void => {
    setOpened(false);
  };

  const handleSearch = useDebounce((value: string) => {
    if (value.length >= 3 && onSearch) {
      onSearch(value);
    }
  }, 300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return;

    const updated = e.target.value;
    onChange(updated);
    handleSearch(updated);
  };

  const handleSelect = (value: T) => {
    if (readOnly) return;

    onSelect(value);
    setOpened(false);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (readOnly) return;

    setOpened(true);

    if (inputProps?.onFocus) {
      inputProps.onFocus(e);
    }
  };

  useOnOutside({
    event: 'mousedown',
    onClick: handleOutsideClick,
    target: containerRef,
  });

  return (
    <StyledAutocomplete ref={containerRef}>
      <Input
        {...inputProps}
        autoComplete="off"
        ref={ref}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      {opened && (options?.length || action || endAction) && (
        <StyledAutocompleteOptionsContainer
          id={`${inputProps?.id}-listbox`}
          $withHint={Boolean(inputProps?.hint)}
          aria-labelledby={`${inputProps?.id}-label`}
          ref={optionsListRef}
          role="listbox"
        >
          <Spacer size={2} />
          <StyledPaper
            style={{
              maxHeight: maxItems ? `${(maxItems + 0.6) * 56}rem` : undefined,
            }}
          >
            <>
              {action && (
                <StyledAction
                  $noContentPadding={noContentPadding}
                  onClick={() => setOpened(false)}
                >
                  {action}
                </StyledAction>
              )}
              {options?.length ? (
                <div>
                  {optionsTitle ? (
                    <StyledOptionsTitle>{optionsTitle}</StyledOptionsTitle>
                  ) : null}
                  {options?.map((opt) =>
                    renderOption(opt, () => handleSelect(opt)),
                  )}
                </div>
              ) : null}
              {endAction && (
                <StyledAction
                  $noContentPadding={noContentPadding}
                  onClick={() => setOpened(false)}
                >
                  {endAction}
                </StyledAction>
              )}
            </>
          </StyledPaper>
        </StyledAutocompleteOptionsContainer>
      )}
    </StyledAutocomplete>
  );
};

export const AutocompleteField = forwardRef(AutocompleteFieldInner) as <T>(
  props: AutocompleteProps<T> & {
    ref?: ForwardedRef<HTMLInputElement>;
  },
) => ReturnType<typeof AutocompleteFieldInner>;
