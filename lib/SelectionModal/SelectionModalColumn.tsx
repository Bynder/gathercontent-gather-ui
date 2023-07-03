import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';
import { propTypes, defaultProps } from './common';

function SelectionModalColumn({
  children,
  className,
  isHighlight,
  ...rest
}: any) {
  const classes = cx(`flex min-h-0 overflow-y-auto flex-col ${className}`, {
    'bg-neutral-98': isHighlight
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

SelectionModalColumn.propTypes = {
  ...propTypes,
  isHighlight: bool
};

SelectionModalColumn.defaultProps = {
  ...defaultProps,
  isHighlight: false
};

export default SelectionModalColumn;
