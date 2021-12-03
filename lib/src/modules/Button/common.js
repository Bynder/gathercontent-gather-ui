import { string, node, bool, func, oneOfType } from 'prop-types';
import { omit } from 'lodash';

export const sizes = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};

export const getSizeClasses = size => {
  if (!size) {
    return '';
  }

  if (size === sizes.lg) {
    return 'w-12 h-12';
  }

  if (size === sizes.md) {
    return 'w-8 h-8';
  }

  return 'w-6 h-6';
};

export const propTypes = {
  children: oneOfType([node, func]).isRequired,
  className: string,
  type: string,
  loading: bool,
  loaderRight: bool,
  size: oneOfType([string, bool]),
  disabled: bool,
  connectedLeft: bool,
  connectedRight: bool,
  onClick: func
};

export const defaultProps = {
  className: '',
  type: 'button',
  loading: false,
  loaderRight: false,
  size: sizes.md,
  disabled: false,
  connectedLeft: false,
  connectedRight: false,
  onClick: () => {}
};

export const buttonIconPropTypes = {
  ...omit(propTypes, 'children'),
  active: bool,
  iconTitle: string,
  name: string
};
export const buttonIconDefaultProps = {
  ...defaultProps,
  active: false
};
