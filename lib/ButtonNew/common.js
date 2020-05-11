import { string, node, bool, func } from 'prop-types';

export const sizes = {
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};

export const getSizeClasses = size => {
  if (size === sizes.md) {
    return 'w-8 h-8';
  }
  return 'w-6 h-6';
};

export const propTypes = {
  children: node.isRequired,
  className: string,
  type: string,
  loading: bool,
  loaderRight: bool,
  size: string,
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
