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
  size: string
};

export const defaultProps = {
  className: '',
  type: 'button',
  loading: false,
  loaderRight: false,
  size: sizes.md
};
