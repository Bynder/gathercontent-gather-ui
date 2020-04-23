import { string, node, bool } from 'prop-types';

export const sizes = {
  md: 'md',
  sm: 'sm',
  xs: 'xs'
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
  connectedRight: bool
};

export const defaultProps = {
  className: '',
  type: 'button',
  loading: false,
  loaderRight: false,
  size: sizes.md,
  disabled: false,
  connectedLeft: false,
  connectedRight: false
};
