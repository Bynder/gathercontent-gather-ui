import React from 'react';
import { node, string } from 'prop-types';
import cx from 'classnames';
import { ButtonBase } from './ButtonBase';

function ButtonPrimary({ children, className, ...rest }) {
  const classes = cx('bg-blue-primary text-white', className);

  return (
    <ButtonBase className={classes} {...rest}>
      {children}
    </ButtonBase>
  );
}

ButtonPrimary.propTypes = {
  children: node.isRequired,
  className: string
};

ButtonPrimary.defaultProps = {
  className: ''
};

export { ButtonPrimary };
