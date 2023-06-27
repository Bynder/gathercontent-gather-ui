import React from 'react';
import cx from 'classnames';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Icon } from 'lib';

export function OptionMenuItem({
  children,
  meta,
  active,
  danger,
  className,
  ...rest
}: any) {
  const classes = cx(`option-menu-item ${className}`, {
    'option-menu-item-active': active,
    'option-menu-item-danger': danger,
    'option-menu-item-has-meta': !!meta
  });

  return (
    <button
      className={classes}
      role="option"
      aria-selected={active}
      type="button"
      {...rest}
    >
      <div className="option-menu-item-content">{children}</div>
      {active && (
        <Icon
          name="tick16"
          types={['primary-blue']}
          className="option-menu-item-tick"
        />
      )}
      {!!meta && <div className="option-menu-item-meta">{meta}</div>}
    </button>
  );
}
