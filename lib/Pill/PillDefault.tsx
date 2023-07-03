import React from 'react';
import cx from 'classnames';
import { propTypes, defaultProps, sizes } from './common';
import PillBase from './PillBase';

const PillDefault = ({
  className,
  children,
  size,
  ...rest
}: any) => {
  const classes = cx(`bg-neutral-90 border-neutral-90 ${className}`, {
    'text-neutral-primary': size === sizes.xs
  });

  return (
    <PillBase className={classes} size={size} {...rest}>
      {children}
    </PillBase>
  );
};

PillDefault.propTypes = propTypes;

PillDefault.defaultProps = defaultProps;

export default PillDefault;
