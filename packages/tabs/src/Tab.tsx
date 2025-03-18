import { Tab as MUITab, type TabProps as MUITabProps } from '@mui/material';
import { a11yProps } from './a11y';
import { type FC, useMemo, MouseEventHandler, FormEventHandler, FormEvent } from 'react';
import { css } from '@emotion/react';
import { clsx } from 'clsx';
import Tooltip, { type TooltipProps } from '@horus-library/tooltip';

export interface TabProps extends Omit<MUITabProps, 'onChange'> {
  readOnly?: string;
  label: string;
  onChange?: (event: FormEvent<HTMLDivElement>, tabIndex: number) => void;
  tabIndex: number;
}

const buttonEnabledPointerCSS = css({
  '&&': {
    pointerEvents: 'auto',
  },
});

interface WrapperProps {
  children: TooltipProps['children'];
  readOnly?: string;
}
const Wrapper = ({ children, readOnly }: WrapperProps) =>
  !readOnly ? <>{children}</> : <Tooltip title={readOnly}>{children}</Tooltip>;

const Tab: FC<TabProps> = ({ className, label, readOnly, tabIndex, onChange, onClick, ...rest }: TabProps) => {
  const a11y = useMemo(() => a11yProps(tabIndex), [tabIndex]);

  const _onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (readOnly) {
      return;
    }

    onClick?.(event);
  };

  const _onChange: FormEventHandler<HTMLDivElement> = (event) => {
    if (readOnly) {
      return;
    }

    onChange?.(event, tabIndex);
  };

  return (
    <Wrapper readOnly={readOnly}>
      <MUITab
        className={clsx(className, { 'Mui-disabled': readOnly })}
        css={[readOnly && buttonEnabledPointerCSS]}
        disableTouchRipple={!!readOnly}
        label={label}
        onClick={_onClick}
        onChange={_onChange}
        {...a11y}
        {...rest}
      />
    </Wrapper>
  );
};

export default Tab;
